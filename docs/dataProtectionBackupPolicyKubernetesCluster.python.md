# `dataProtectionBackupPolicyKubernetesCluster` Submodule <a name="`dataProtectionBackupPolicyKubernetesCluster` Submodule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupPolicyKubernetesCluster <a name="DataProtectionBackupPolicyKubernetesCluster" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster azurerm_data_protection_backup_policy_kubernetes_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_kubernetes_cluster

dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster(
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
  default_retention_rule: DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule,
  name: str,
  resource_group_name: str,
  vault_name: str,
  id: str = None,
  retention_rule: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyKubernetesClusterRetentionRule]] = None,
  timeouts: DataProtectionBackupPolicyKubernetesClusterTimeouts = None,
  time_zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.backupRepeatingTimeIntervals">backup_repeating_time_intervals</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#backup_repeating_time_intervals DataProtectionBackupPolicyKubernetesCluster#backup_repeating_time_intervals}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.defaultRetentionRule">default_retention_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule</a></code> | default_retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#name DataProtectionBackupPolicyKubernetesCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#resource_group_name DataProtectionBackupPolicyKubernetesCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.vaultName">vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#vault_name DataProtectionBackupPolicyKubernetesCluster#vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#id DataProtectionBackupPolicyKubernetesCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.retentionRule">retention_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule">DataProtectionBackupPolicyKubernetesClusterRetentionRule</a>]]</code> | retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts">DataProtectionBackupPolicyKubernetesClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#time_zone DataProtectionBackupPolicyKubernetesCluster#time_zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_repeating_time_intervals`<sup>Required</sup> <a name="backup_repeating_time_intervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.backupRepeatingTimeIntervals"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#backup_repeating_time_intervals DataProtectionBackupPolicyKubernetesCluster#backup_repeating_time_intervals}.

---

##### `default_retention_rule`<sup>Required</sup> <a name="default_retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.defaultRetentionRule"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule</a>

default_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#default_retention_rule DataProtectionBackupPolicyKubernetesCluster#default_retention_rule}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#name DataProtectionBackupPolicyKubernetesCluster#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#resource_group_name DataProtectionBackupPolicyKubernetesCluster#resource_group_name}.

---

##### `vault_name`<sup>Required</sup> <a name="vault_name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.vaultName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#vault_name DataProtectionBackupPolicyKubernetesCluster#vault_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#id DataProtectionBackupPolicyKubernetesCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retention_rule`<sup>Optional</sup> <a name="retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.retentionRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule">DataProtectionBackupPolicyKubernetesClusterRetentionRule</a>]]

retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#retention_rule DataProtectionBackupPolicyKubernetesCluster#retention_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts">DataProtectionBackupPolicyKubernetesClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#timeouts DataProtectionBackupPolicyKubernetesCluster#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.timeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#time_zone DataProtectionBackupPolicyKubernetesCluster#time_zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putDefaultRetentionRule">put_default_retention_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putRetentionRule">put_retention_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetRetentionRule">reset_retention_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_default_retention_rule` <a name="put_default_retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putDefaultRetentionRule"></a>

```python
def put_default_retention_rule(
  life_cycle: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle]]
) -> None
```

###### `life_cycle`<sup>Required</sup> <a name="life_cycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putDefaultRetentionRule.parameter.lifeCycle"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle</a>]]

life_cycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#life_cycle DataProtectionBackupPolicyKubernetesCluster#life_cycle}

---

##### `put_retention_rule` <a name="put_retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putRetentionRule"></a>

```python
def put_retention_rule(
  value: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyKubernetesClusterRetentionRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putRetentionRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule">DataProtectionBackupPolicyKubernetesClusterRetentionRule</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#create DataProtectionBackupPolicyKubernetesCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#delete DataProtectionBackupPolicyKubernetesCluster#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#read DataProtectionBackupPolicyKubernetesCluster#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_retention_rule` <a name="reset_retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetRetentionRule"></a>

```python
def reset_retention_rule() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataProtectionBackupPolicyKubernetesCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_kubernetes_cluster

dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_kubernetes_cluster

dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_kubernetes_cluster

dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_kubernetes_cluster

dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataProtectionBackupPolicyKubernetesCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataProtectionBackupPolicyKubernetesCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataProtectionBackupPolicyKubernetesCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupPolicyKubernetesCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.defaultRetentionRule">default_retention_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.retentionRule">retention_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList">DataProtectionBackupPolicyKubernetesClusterRetentionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference">DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.backupRepeatingTimeIntervalsInput">backup_repeating_time_intervals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.defaultRetentionRuleInput">default_retention_rule_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.retentionRuleInput">retention_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule">DataProtectionBackupPolicyKubernetesClusterRetentionRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts">DataProtectionBackupPolicyKubernetesClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.vaultNameInput">vault_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.backupRepeatingTimeIntervals">backup_repeating_time_intervals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.vaultName">vault_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_retention_rule`<sup>Required</sup> <a name="default_retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.defaultRetentionRule"></a>

```python
default_retention_rule: DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference</a>

---

##### `retention_rule`<sup>Required</sup> <a name="retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.retentionRule"></a>

```python
retention_rule: DataProtectionBackupPolicyKubernetesClusterRetentionRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList">DataProtectionBackupPolicyKubernetesClusterRetentionRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.timeouts"></a>

```python
timeouts: DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference">DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference</a>

---

##### `backup_repeating_time_intervals_input`<sup>Optional</sup> <a name="backup_repeating_time_intervals_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.backupRepeatingTimeIntervalsInput"></a>

```python
backup_repeating_time_intervals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_retention_rule_input`<sup>Optional</sup> <a name="default_retention_rule_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.defaultRetentionRuleInput"></a>

```python
default_retention_rule_input: DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `retention_rule_input`<sup>Optional</sup> <a name="retention_rule_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.retentionRuleInput"></a>

```python
retention_rule_input: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyKubernetesClusterRetentionRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule">DataProtectionBackupPolicyKubernetesClusterRetentionRule</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataProtectionBackupPolicyKubernetesClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts">DataProtectionBackupPolicyKubernetesClusterTimeouts</a>]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `vault_name_input`<sup>Optional</sup> <a name="vault_name_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.vaultNameInput"></a>

```python
vault_name_input: str
```

- *Type:* str

---

##### `backup_repeating_time_intervals`<sup>Required</sup> <a name="backup_repeating_time_intervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.backupRepeatingTimeIntervals"></a>

```python
backup_repeating_time_intervals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `vault_name`<sup>Required</sup> <a name="vault_name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.vaultName"></a>

```python
vault_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupPolicyKubernetesClusterConfig <a name="DataProtectionBackupPolicyKubernetesClusterConfig" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_kubernetes_cluster

dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_repeating_time_intervals: typing.List[str],
  default_retention_rule: DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule,
  name: str,
  resource_group_name: str,
  vault_name: str,
  id: str = None,
  retention_rule: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyKubernetesClusterRetentionRule]] = None,
  timeouts: DataProtectionBackupPolicyKubernetesClusterTimeouts = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.backupRepeatingTimeIntervals">backup_repeating_time_intervals</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#backup_repeating_time_intervals DataProtectionBackupPolicyKubernetesCluster#backup_repeating_time_intervals}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.defaultRetentionRule">default_retention_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule</a></code> | default_retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#name DataProtectionBackupPolicyKubernetesCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#resource_group_name DataProtectionBackupPolicyKubernetesCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.vaultName">vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#vault_name DataProtectionBackupPolicyKubernetesCluster#vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#id DataProtectionBackupPolicyKubernetesCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.retentionRule">retention_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule">DataProtectionBackupPolicyKubernetesClusterRetentionRule</a>]]</code> | retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts">DataProtectionBackupPolicyKubernetesClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#time_zone DataProtectionBackupPolicyKubernetesCluster#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_repeating_time_intervals`<sup>Required</sup> <a name="backup_repeating_time_intervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.backupRepeatingTimeIntervals"></a>

```python
backup_repeating_time_intervals: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#backup_repeating_time_intervals DataProtectionBackupPolicyKubernetesCluster#backup_repeating_time_intervals}.

---

##### `default_retention_rule`<sup>Required</sup> <a name="default_retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.defaultRetentionRule"></a>

```python
default_retention_rule: DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule</a>

default_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#default_retention_rule DataProtectionBackupPolicyKubernetesCluster#default_retention_rule}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#name DataProtectionBackupPolicyKubernetesCluster#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#resource_group_name DataProtectionBackupPolicyKubernetesCluster#resource_group_name}.

---

##### `vault_name`<sup>Required</sup> <a name="vault_name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.vaultName"></a>

```python
vault_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#vault_name DataProtectionBackupPolicyKubernetesCluster#vault_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#id DataProtectionBackupPolicyKubernetesCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retention_rule`<sup>Optional</sup> <a name="retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.retentionRule"></a>

```python
retention_rule: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyKubernetesClusterRetentionRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule">DataProtectionBackupPolicyKubernetesClusterRetentionRule</a>]]

retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#retention_rule DataProtectionBackupPolicyKubernetesCluster#retention_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.timeouts"></a>

```python
timeouts: DataProtectionBackupPolicyKubernetesClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts">DataProtectionBackupPolicyKubernetesClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#timeouts DataProtectionBackupPolicyKubernetesCluster#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#time_zone DataProtectionBackupPolicyKubernetesCluster#time_zone}.

---

### DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule <a name="DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_kubernetes_cluster

dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule(
  life_cycle: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule.property.lifeCycle">life_cycle</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle</a>]]</code> | life_cycle block. |

---

##### `life_cycle`<sup>Required</sup> <a name="life_cycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule.property.lifeCycle"></a>

```python
life_cycle: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle</a>]]

life_cycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#life_cycle DataProtectionBackupPolicyKubernetesCluster#life_cycle}

---

### DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle <a name="DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_kubernetes_cluster

dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle(
  data_store_type: str,
  duration: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle.property.dataStoreType">data_store_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#data_store_type DataProtectionBackupPolicyKubernetesCluster#data_store_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle.property.duration">duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#duration DataProtectionBackupPolicyKubernetesCluster#duration}. |

---

##### `data_store_type`<sup>Required</sup> <a name="data_store_type" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle.property.dataStoreType"></a>

```python
data_store_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#data_store_type DataProtectionBackupPolicyKubernetesCluster#data_store_type}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle.property.duration"></a>

```python
duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#duration DataProtectionBackupPolicyKubernetesCluster#duration}.

---

### DataProtectionBackupPolicyKubernetesClusterRetentionRule <a name="DataProtectionBackupPolicyKubernetesClusterRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_kubernetes_cluster

dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule(
  criteria: DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria,
  life_cycle: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle]],
  name: str,
  priority: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria</a></code> | criteria block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.property.lifeCycle">life_cycle</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle</a>]]</code> | life_cycle block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#name DataProtectionBackupPolicyKubernetesCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#priority DataProtectionBackupPolicyKubernetesCluster#priority}. |

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.property.criteria"></a>

```python
criteria: DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#criteria DataProtectionBackupPolicyKubernetesCluster#criteria}

---

##### `life_cycle`<sup>Required</sup> <a name="life_cycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.property.lifeCycle"></a>

```python
life_cycle: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle</a>]]

life_cycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#life_cycle DataProtectionBackupPolicyKubernetesCluster#life_cycle}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#name DataProtectionBackupPolicyKubernetesCluster#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#priority DataProtectionBackupPolicyKubernetesCluster#priority}.

---

### DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria <a name="DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_kubernetes_cluster

dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria(
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
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.absoluteCriteria">absolute_criteria</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#absolute_criteria DataProtectionBackupPolicyKubernetesCluster#absolute_criteria}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#days_of_week DataProtectionBackupPolicyKubernetesCluster#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.monthsOfYear">months_of_year</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#months_of_year DataProtectionBackupPolicyKubernetesCluster#months_of_year}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.scheduledBackupTimes">scheduled_backup_times</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#scheduled_backup_times DataProtectionBackupPolicyKubernetesCluster#scheduled_backup_times}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#weeks_of_month DataProtectionBackupPolicyKubernetesCluster#weeks_of_month}. |

---

##### `absolute_criteria`<sup>Optional</sup> <a name="absolute_criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.absoluteCriteria"></a>

```python
absolute_criteria: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#absolute_criteria DataProtectionBackupPolicyKubernetesCluster#absolute_criteria}.

---

##### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#days_of_week DataProtectionBackupPolicyKubernetesCluster#days_of_week}.

---

##### `months_of_year`<sup>Optional</sup> <a name="months_of_year" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.monthsOfYear"></a>

```python
months_of_year: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#months_of_year DataProtectionBackupPolicyKubernetesCluster#months_of_year}.

---

##### `scheduled_backup_times`<sup>Optional</sup> <a name="scheduled_backup_times" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.scheduledBackupTimes"></a>

```python
scheduled_backup_times: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#scheduled_backup_times DataProtectionBackupPolicyKubernetesCluster#scheduled_backup_times}.

---

##### `weeks_of_month`<sup>Optional</sup> <a name="weeks_of_month" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#weeks_of_month DataProtectionBackupPolicyKubernetesCluster#weeks_of_month}.

---

### DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle <a name="DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_kubernetes_cluster

dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle(
  data_store_type: str,
  duration: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle.property.dataStoreType">data_store_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#data_store_type DataProtectionBackupPolicyKubernetesCluster#data_store_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle.property.duration">duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#duration DataProtectionBackupPolicyKubernetesCluster#duration}. |

---

##### `data_store_type`<sup>Required</sup> <a name="data_store_type" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle.property.dataStoreType"></a>

```python
data_store_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#data_store_type DataProtectionBackupPolicyKubernetesCluster#data_store_type}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle.property.duration"></a>

```python
duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#duration DataProtectionBackupPolicyKubernetesCluster#duration}.

---

### DataProtectionBackupPolicyKubernetesClusterTimeouts <a name="DataProtectionBackupPolicyKubernetesClusterTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_kubernetes_cluster

dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#create DataProtectionBackupPolicyKubernetesCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#delete DataProtectionBackupPolicyKubernetesCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#read DataProtectionBackupPolicyKubernetesCluster#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#create DataProtectionBackupPolicyKubernetesCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#delete DataProtectionBackupPolicyKubernetesCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#read DataProtectionBackupPolicyKubernetesCluster#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList <a name="DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_kubernetes_cluster

dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle</a>]]

---


### DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference <a name="DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_kubernetes_cluster

dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput">data_store_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreType">data_store_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_store_type_input`<sup>Optional</sup> <a name="data_store_type_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput"></a>

```python
data_store_type_input: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `data_store_type`<sup>Required</sup> <a name="data_store_type" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreType"></a>

```python
data_store_type: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle</a>]

---


### DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference <a name="DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_kubernetes_cluster

dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.putLifeCycle">put_life_cycle</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_life_cycle` <a name="put_life_cycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.putLifeCycle"></a>

```python
def put_life_cycle(
  value: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.putLifeCycle.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.lifeCycle">life_cycle</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.lifeCycleInput">life_cycle_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `life_cycle`<sup>Required</sup> <a name="life_cycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.lifeCycle"></a>

```python
life_cycle: DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList</a>

---

##### `life_cycle_input`<sup>Optional</sup> <a name="life_cycle_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.lifeCycleInput"></a>

```python
life_cycle_input: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule</a>

---


### DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference <a name="DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_kubernetes_cluster

dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria">reset_absolute_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetDaysOfWeek">reset_days_of_week</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetMonthsOfYear">reset_months_of_year</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes">reset_scheduled_backup_times</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetWeeksOfMonth">reset_weeks_of_month</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_absolute_criteria` <a name="reset_absolute_criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria"></a>

```python
def reset_absolute_criteria() -> None
```

##### `reset_days_of_week` <a name="reset_days_of_week" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetDaysOfWeek"></a>

```python
def reset_days_of_week() -> None
```

##### `reset_months_of_year` <a name="reset_months_of_year" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetMonthsOfYear"></a>

```python
def reset_months_of_year() -> None
```

##### `reset_scheduled_backup_times` <a name="reset_scheduled_backup_times" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes"></a>

```python
def reset_scheduled_backup_times() -> None
```

##### `reset_weeks_of_month` <a name="reset_weeks_of_month" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetWeeksOfMonth"></a>

```python
def reset_weeks_of_month() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput">absolute_criteria_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.daysOfWeekInput">days_of_week_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.monthsOfYearInput">months_of_year_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput">scheduled_backup_times_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput">weeks_of_month_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.absoluteCriteria">absolute_criteria</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.monthsOfYear">months_of_year</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes">scheduled_backup_times</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `absolute_criteria_input`<sup>Optional</sup> <a name="absolute_criteria_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput"></a>

```python
absolute_criteria_input: str
```

- *Type:* str

---

##### `days_of_week_input`<sup>Optional</sup> <a name="days_of_week_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.daysOfWeekInput"></a>

```python
days_of_week_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `months_of_year_input`<sup>Optional</sup> <a name="months_of_year_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.monthsOfYearInput"></a>

```python
months_of_year_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scheduled_backup_times_input`<sup>Optional</sup> <a name="scheduled_backup_times_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput"></a>

```python
scheduled_backup_times_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weeks_of_month_input`<sup>Optional</sup> <a name="weeks_of_month_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput"></a>

```python
weeks_of_month_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `absolute_criteria`<sup>Required</sup> <a name="absolute_criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.absoluteCriteria"></a>

```python
absolute_criteria: str
```

- *Type:* str

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `months_of_year`<sup>Required</sup> <a name="months_of_year" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.monthsOfYear"></a>

```python
months_of_year: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scheduled_backup_times`<sup>Required</sup> <a name="scheduled_backup_times" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes"></a>

```python
scheduled_backup_times: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weeks_of_month`<sup>Required</sup> <a name="weeks_of_month" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria</a>

---


### DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList <a name="DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_kubernetes_cluster

dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle</a>]]

---


### DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference <a name="DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_kubernetes_cluster

dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput">data_store_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.dataStoreType">data_store_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_store_type_input`<sup>Optional</sup> <a name="data_store_type_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput"></a>

```python
data_store_type_input: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `data_store_type`<sup>Required</sup> <a name="data_store_type" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.dataStoreType"></a>

```python
data_store_type: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle</a>]

---


### DataProtectionBackupPolicyKubernetesClusterRetentionRuleList <a name="DataProtectionBackupPolicyKubernetesClusterRetentionRuleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_kubernetes_cluster

dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule">DataProtectionBackupPolicyKubernetesClusterRetentionRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyKubernetesClusterRetentionRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule">DataProtectionBackupPolicyKubernetesClusterRetentionRule</a>]]

---


### DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference <a name="DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_kubernetes_cluster

dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.putCriteria">put_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.putLifeCycle">put_life_cycle</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_criteria` <a name="put_criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.putCriteria"></a>

```python
def put_criteria(
  absolute_criteria: str = None,
  days_of_week: typing.List[str] = None,
  months_of_year: typing.List[str] = None,
  scheduled_backup_times: typing.List[str] = None,
  weeks_of_month: typing.List[str] = None
) -> None
```

###### `absolute_criteria`<sup>Optional</sup> <a name="absolute_criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.putCriteria.parameter.absoluteCriteria"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#absolute_criteria DataProtectionBackupPolicyKubernetesCluster#absolute_criteria}.

---

###### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.putCriteria.parameter.daysOfWeek"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#days_of_week DataProtectionBackupPolicyKubernetesCluster#days_of_week}.

---

###### `months_of_year`<sup>Optional</sup> <a name="months_of_year" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.putCriteria.parameter.monthsOfYear"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#months_of_year DataProtectionBackupPolicyKubernetesCluster#months_of_year}.

---

###### `scheduled_backup_times`<sup>Optional</sup> <a name="scheduled_backup_times" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.putCriteria.parameter.scheduledBackupTimes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#scheduled_backup_times DataProtectionBackupPolicyKubernetesCluster#scheduled_backup_times}.

---

###### `weeks_of_month`<sup>Optional</sup> <a name="weeks_of_month" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.putCriteria.parameter.weeksOfMonth"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#weeks_of_month DataProtectionBackupPolicyKubernetesCluster#weeks_of_month}.

---

##### `put_life_cycle` <a name="put_life_cycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.putLifeCycle"></a>

```python
def put_life_cycle(
  value: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.putLifeCycle.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.lifeCycle">life_cycle</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList">DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.criteriaInput">criteria_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.lifeCycleInput">life_cycle_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule">DataProtectionBackupPolicyKubernetesClusterRetentionRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.criteria"></a>

```python
criteria: DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference</a>

---

##### `life_cycle`<sup>Required</sup> <a name="life_cycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.lifeCycle"></a>

```python
life_cycle: DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList">DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList</a>

---

##### `criteria_input`<sup>Optional</sup> <a name="criteria_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.criteriaInput"></a>

```python
criteria_input: DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria</a>

---

##### `life_cycle_input`<sup>Optional</sup> <a name="life_cycle_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.lifeCycleInput"></a>

```python
life_cycle_input: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataProtectionBackupPolicyKubernetesClusterRetentionRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule">DataProtectionBackupPolicyKubernetesClusterRetentionRule</a>]

---


### DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference <a name="DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_kubernetes_cluster

dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts">DataProtectionBackupPolicyKubernetesClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataProtectionBackupPolicyKubernetesClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts">DataProtectionBackupPolicyKubernetesClusterTimeouts</a>]

---



