# `netappBackupPolicy` Submodule <a name="`netappBackupPolicy` Submodule" id="@cdktf/provider-azurerm.netappBackupPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappBackupPolicy <a name="NetappBackupPolicy" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy azurerm_netapp_backup_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_backup_policy

netappBackupPolicy.NetappBackupPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_name: str,
  location: str,
  name: str,
  resource_group_name: str,
  daily_backups_to_keep: typing.Union[int, float] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  monthly_backups_to_keep: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: NetappBackupPolicyTimeouts = None,
  weekly_backups_to_keep: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#account_name NetappBackupPolicy#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#location NetappBackupPolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#name NetappBackupPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#resource_group_name NetappBackupPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.dailyBackupsToKeep">daily_backups_to_keep</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#daily_backups_to_keep NetappBackupPolicy#daily_backups_to_keep}. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#enabled NetappBackupPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#id NetappBackupPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.monthlyBackupsToKeep">monthly_backups_to_keep</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#monthly_backups_to_keep NetappBackupPolicy#monthly_backups_to_keep}. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#tags NetappBackupPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeouts">NetappBackupPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.weeklyBackupsToKeep">weekly_backups_to_keep</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#weekly_backups_to_keep NetappBackupPolicy#weekly_backups_to_keep}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.accountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#account_name NetappBackupPolicy#account_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#location NetappBackupPolicy#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#name NetappBackupPolicy#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#resource_group_name NetappBackupPolicy#resource_group_name}.

---

##### `daily_backups_to_keep`<sup>Optional</sup> <a name="daily_backups_to_keep" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.dailyBackupsToKeep"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#daily_backups_to_keep NetappBackupPolicy#daily_backups_to_keep}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#enabled NetappBackupPolicy#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#id NetappBackupPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monthly_backups_to_keep`<sup>Optional</sup> <a name="monthly_backups_to_keep" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.monthlyBackupsToKeep"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#monthly_backups_to_keep NetappBackupPolicy#monthly_backups_to_keep}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#tags NetappBackupPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeouts">NetappBackupPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#timeouts NetappBackupPolicy#timeouts}

---

##### `weekly_backups_to_keep`<sup>Optional</sup> <a name="weekly_backups_to_keep" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.Initializer.parameter.weeklyBackupsToKeep"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#weekly_backups_to_keep NetappBackupPolicy#weekly_backups_to_keep}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.resetDailyBackupsToKeep">reset_daily_backups_to_keep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.resetMonthlyBackupsToKeep">reset_monthly_backups_to_keep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.resetWeeklyBackupsToKeep">reset_weekly_backups_to_keep</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#create NetappBackupPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#delete NetappBackupPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#read NetappBackupPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#update NetappBackupPolicy#update}.

---

##### `reset_daily_backups_to_keep` <a name="reset_daily_backups_to_keep" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.resetDailyBackupsToKeep"></a>

```python
def reset_daily_backups_to_keep() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_monthly_backups_to_keep` <a name="reset_monthly_backups_to_keep" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.resetMonthlyBackupsToKeep"></a>

```python
def reset_monthly_backups_to_keep() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_weekly_backups_to_keep` <a name="reset_weekly_backups_to_keep" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.resetWeeklyBackupsToKeep"></a>

```python
def reset_weekly_backups_to_keep() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetappBackupPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_backup_policy

netappBackupPolicy.NetappBackupPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_backup_policy

netappBackupPolicy.NetappBackupPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_backup_policy

netappBackupPolicy.NetappBackupPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_backup_policy

netappBackupPolicy.NetappBackupPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetappBackupPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetappBackupPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetappBackupPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetappBackupPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference">NetappBackupPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.accountNameInput">account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.dailyBackupsToKeepInput">daily_backups_to_keep_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.monthlyBackupsToKeepInput">monthly_backups_to_keep_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeouts">NetappBackupPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.weeklyBackupsToKeepInput">weekly_backups_to_keep_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.dailyBackupsToKeep">daily_backups_to_keep</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.monthlyBackupsToKeep">monthly_backups_to_keep</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.weeklyBackupsToKeep">weekly_backups_to_keep</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.timeouts"></a>

```python
timeouts: NetappBackupPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference">NetappBackupPolicyTimeoutsOutputReference</a>

---

##### `account_name_input`<sup>Optional</sup> <a name="account_name_input" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.accountNameInput"></a>

```python
account_name_input: str
```

- *Type:* str

---

##### `daily_backups_to_keep_input`<sup>Optional</sup> <a name="daily_backups_to_keep_input" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.dailyBackupsToKeepInput"></a>

```python
daily_backups_to_keep_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `monthly_backups_to_keep_input`<sup>Optional</sup> <a name="monthly_backups_to_keep_input" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.monthlyBackupsToKeepInput"></a>

```python
monthly_backups_to_keep_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetappBackupPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeouts">NetappBackupPolicyTimeouts</a>]

---

##### `weekly_backups_to_keep_input`<sup>Optional</sup> <a name="weekly_backups_to_keep_input" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.weeklyBackupsToKeepInput"></a>

```python
weekly_backups_to_keep_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `daily_backups_to_keep`<sup>Required</sup> <a name="daily_backups_to_keep" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.dailyBackupsToKeep"></a>

```python
daily_backups_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `monthly_backups_to_keep`<sup>Required</sup> <a name="monthly_backups_to_keep" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.monthlyBackupsToKeep"></a>

```python
monthly_backups_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `weekly_backups_to_keep`<sup>Required</sup> <a name="weekly_backups_to_keep" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.weeklyBackupsToKeep"></a>

```python
weekly_backups_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetappBackupPolicyConfig <a name="NetappBackupPolicyConfig" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_backup_policy

netappBackupPolicy.NetappBackupPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_name: str,
  location: str,
  name: str,
  resource_group_name: str,
  daily_backups_to_keep: typing.Union[int, float] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  monthly_backups_to_keep: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: NetappBackupPolicyTimeouts = None,
  weekly_backups_to_keep: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#account_name NetappBackupPolicy#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#location NetappBackupPolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#name NetappBackupPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#resource_group_name NetappBackupPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.dailyBackupsToKeep">daily_backups_to_keep</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#daily_backups_to_keep NetappBackupPolicy#daily_backups_to_keep}. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#enabled NetappBackupPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#id NetappBackupPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.monthlyBackupsToKeep">monthly_backups_to_keep</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#monthly_backups_to_keep NetappBackupPolicy#monthly_backups_to_keep}. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#tags NetappBackupPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeouts">NetappBackupPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.weeklyBackupsToKeep">weekly_backups_to_keep</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#weekly_backups_to_keep NetappBackupPolicy#weekly_backups_to_keep}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#account_name NetappBackupPolicy#account_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#location NetappBackupPolicy#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#name NetappBackupPolicy#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#resource_group_name NetappBackupPolicy#resource_group_name}.

---

##### `daily_backups_to_keep`<sup>Optional</sup> <a name="daily_backups_to_keep" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.dailyBackupsToKeep"></a>

```python
daily_backups_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#daily_backups_to_keep NetappBackupPolicy#daily_backups_to_keep}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#enabled NetappBackupPolicy#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#id NetappBackupPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monthly_backups_to_keep`<sup>Optional</sup> <a name="monthly_backups_to_keep" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.monthlyBackupsToKeep"></a>

```python
monthly_backups_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#monthly_backups_to_keep NetappBackupPolicy#monthly_backups_to_keep}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#tags NetappBackupPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.timeouts"></a>

```python
timeouts: NetappBackupPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeouts">NetappBackupPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#timeouts NetappBackupPolicy#timeouts}

---

##### `weekly_backups_to_keep`<sup>Optional</sup> <a name="weekly_backups_to_keep" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyConfig.property.weeklyBackupsToKeep"></a>

```python
weekly_backups_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#weekly_backups_to_keep NetappBackupPolicy#weekly_backups_to_keep}.

---

### NetappBackupPolicyTimeouts <a name="NetappBackupPolicyTimeouts" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_backup_policy

netappBackupPolicy.NetappBackupPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#create NetappBackupPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#delete NetappBackupPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#read NetappBackupPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#update NetappBackupPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#create NetappBackupPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#delete NetappBackupPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#read NetappBackupPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/netapp_backup_policy#update NetappBackupPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappBackupPolicyTimeoutsOutputReference <a name="NetappBackupPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_backup_policy

netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeouts">NetappBackupPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetappBackupPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.netappBackupPolicy.NetappBackupPolicyTimeouts">NetappBackupPolicyTimeouts</a>]

---



