# `netappSnapshotPolicy` Submodule <a name="`netappSnapshotPolicy` Submodule" id="@cdktf/provider-azurerm.netappSnapshotPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappSnapshotPolicy <a name="NetappSnapshotPolicy" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy azurerm_netapp_snapshot_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_snapshot_policy

netappSnapshotPolicy.NetappSnapshotPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_name: str,
  enabled: bool | IResolvable,
  location: str,
  name: str,
  resource_group_name: str,
  daily_schedule: NetappSnapshotPolicyDailySchedule = None,
  hourly_schedule: NetappSnapshotPolicyHourlySchedule = None,
  id: str = None,
  monthly_schedule: NetappSnapshotPolicyMonthlySchedule = None,
  tags: typing.Mapping[str] = None,
  timeouts: NetappSnapshotPolicyTimeouts = None,
  weekly_schedule: NetappSnapshotPolicyWeeklySchedule = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#account_name NetappSnapshotPolicy#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#enabled NetappSnapshotPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#location NetappSnapshotPolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#name NetappSnapshotPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#resource_group_name NetappSnapshotPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.dailySchedule">daily_schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule">NetappSnapshotPolicyDailySchedule</a></code> | daily_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.hourlySchedule">hourly_schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule">NetappSnapshotPolicyHourlySchedule</a></code> | hourly_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#id NetappSnapshotPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.monthlySchedule">monthly_schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule">NetappSnapshotPolicyMonthlySchedule</a></code> | monthly_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#tags NetappSnapshotPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts">NetappSnapshotPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.weeklySchedule">weekly_schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule">NetappSnapshotPolicyWeeklySchedule</a></code> | weekly_schedule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.accountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#account_name NetappSnapshotPolicy#account_name}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#enabled NetappSnapshotPolicy#enabled}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#location NetappSnapshotPolicy#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#name NetappSnapshotPolicy#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#resource_group_name NetappSnapshotPolicy#resource_group_name}.

---

##### `daily_schedule`<sup>Optional</sup> <a name="daily_schedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.dailySchedule"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule">NetappSnapshotPolicyDailySchedule</a>

daily_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#daily_schedule NetappSnapshotPolicy#daily_schedule}

---

##### `hourly_schedule`<sup>Optional</sup> <a name="hourly_schedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.hourlySchedule"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule">NetappSnapshotPolicyHourlySchedule</a>

hourly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#hourly_schedule NetappSnapshotPolicy#hourly_schedule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#id NetappSnapshotPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monthly_schedule`<sup>Optional</sup> <a name="monthly_schedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.monthlySchedule"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule">NetappSnapshotPolicyMonthlySchedule</a>

monthly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#monthly_schedule NetappSnapshotPolicy#monthly_schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#tags NetappSnapshotPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts">NetappSnapshotPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#timeouts NetappSnapshotPolicy#timeouts}

---

##### `weekly_schedule`<sup>Optional</sup> <a name="weekly_schedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.weeklySchedule"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule">NetappSnapshotPolicyWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#weekly_schedule NetappSnapshotPolicy#weekly_schedule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putDailySchedule">put_daily_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putHourlySchedule">put_hourly_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putMonthlySchedule">put_monthly_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putWeeklySchedule">put_weekly_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetDailySchedule">reset_daily_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetHourlySchedule">reset_hourly_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetMonthlySchedule">reset_monthly_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetWeeklySchedule">reset_weekly_schedule</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_daily_schedule` <a name="put_daily_schedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putDailySchedule"></a>

```python
def put_daily_schedule(
  hour: typing.Union[int, float],
  minute: typing.Union[int, float],
  snapshots_to_keep: typing.Union[int, float]
) -> None
```

###### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putDailySchedule.parameter.hour"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#hour NetappSnapshotPolicy#hour}.

---

###### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putDailySchedule.parameter.minute"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}.

---

###### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putDailySchedule.parameter.snapshotsToKeep"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}.

---

##### `put_hourly_schedule` <a name="put_hourly_schedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putHourlySchedule"></a>

```python
def put_hourly_schedule(
  minute: typing.Union[int, float],
  snapshots_to_keep: typing.Union[int, float]
) -> None
```

###### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putHourlySchedule.parameter.minute"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}.

---

###### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putHourlySchedule.parameter.snapshotsToKeep"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}.

---

##### `put_monthly_schedule` <a name="put_monthly_schedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putMonthlySchedule"></a>

```python
def put_monthly_schedule(
  days_of_month: typing.List[typing.Union[int, float]],
  hour: typing.Union[int, float],
  minute: typing.Union[int, float],
  snapshots_to_keep: typing.Union[int, float]
) -> None
```

###### `days_of_month`<sup>Required</sup> <a name="days_of_month" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putMonthlySchedule.parameter.daysOfMonth"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#days_of_month NetappSnapshotPolicy#days_of_month}.

---

###### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putMonthlySchedule.parameter.hour"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#hour NetappSnapshotPolicy#hour}.

---

###### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putMonthlySchedule.parameter.minute"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}.

---

###### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putMonthlySchedule.parameter.snapshotsToKeep"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#create NetappSnapshotPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#delete NetappSnapshotPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#read NetappSnapshotPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#update NetappSnapshotPolicy#update}.

---

##### `put_weekly_schedule` <a name="put_weekly_schedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putWeeklySchedule"></a>

```python
def put_weekly_schedule(
  days_of_week: typing.List[str],
  hour: typing.Union[int, float],
  minute: typing.Union[int, float],
  snapshots_to_keep: typing.Union[int, float]
) -> None
```

###### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putWeeklySchedule.parameter.daysOfWeek"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#days_of_week NetappSnapshotPolicy#days_of_week}.

---

###### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putWeeklySchedule.parameter.hour"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#hour NetappSnapshotPolicy#hour}.

---

###### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putWeeklySchedule.parameter.minute"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}.

---

###### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putWeeklySchedule.parameter.snapshotsToKeep"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}.

---

##### `reset_daily_schedule` <a name="reset_daily_schedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetDailySchedule"></a>

```python
def reset_daily_schedule() -> None
```

##### `reset_hourly_schedule` <a name="reset_hourly_schedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetHourlySchedule"></a>

```python
def reset_hourly_schedule() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_monthly_schedule` <a name="reset_monthly_schedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetMonthlySchedule"></a>

```python
def reset_monthly_schedule() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_weekly_schedule` <a name="reset_weekly_schedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetWeeklySchedule"></a>

```python
def reset_weekly_schedule() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetappSnapshotPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_snapshot_policy

netappSnapshotPolicy.NetappSnapshotPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_snapshot_policy

netappSnapshotPolicy.NetappSnapshotPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_snapshot_policy

netappSnapshotPolicy.NetappSnapshotPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_snapshot_policy

netappSnapshotPolicy.NetappSnapshotPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetappSnapshotPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetappSnapshotPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetappSnapshotPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetappSnapshotPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.dailySchedule">daily_schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference">NetappSnapshotPolicyDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.hourlySchedule">hourly_schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference">NetappSnapshotPolicyHourlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.monthlySchedule">monthly_schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference">NetappSnapshotPolicyMonthlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference">NetappSnapshotPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.weeklySchedule">weekly_schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference">NetappSnapshotPolicyWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.accountNameInput">account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.dailyScheduleInput">daily_schedule_input</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule">NetappSnapshotPolicyDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.hourlyScheduleInput">hourly_schedule_input</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule">NetappSnapshotPolicyHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.monthlyScheduleInput">monthly_schedule_input</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule">NetappSnapshotPolicyMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts">NetappSnapshotPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.weeklyScheduleInput">weekly_schedule_input</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule">NetappSnapshotPolicyWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `daily_schedule`<sup>Required</sup> <a name="daily_schedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.dailySchedule"></a>

```python
daily_schedule: NetappSnapshotPolicyDailyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference">NetappSnapshotPolicyDailyScheduleOutputReference</a>

---

##### `hourly_schedule`<sup>Required</sup> <a name="hourly_schedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.hourlySchedule"></a>

```python
hourly_schedule: NetappSnapshotPolicyHourlyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference">NetappSnapshotPolicyHourlyScheduleOutputReference</a>

---

##### `monthly_schedule`<sup>Required</sup> <a name="monthly_schedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.monthlySchedule"></a>

```python
monthly_schedule: NetappSnapshotPolicyMonthlyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference">NetappSnapshotPolicyMonthlyScheduleOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.timeouts"></a>

```python
timeouts: NetappSnapshotPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference">NetappSnapshotPolicyTimeoutsOutputReference</a>

---

##### `weekly_schedule`<sup>Required</sup> <a name="weekly_schedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.weeklySchedule"></a>

```python
weekly_schedule: NetappSnapshotPolicyWeeklyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference">NetappSnapshotPolicyWeeklyScheduleOutputReference</a>

---

##### `account_name_input`<sup>Optional</sup> <a name="account_name_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.accountNameInput"></a>

```python
account_name_input: str
```

- *Type:* str

---

##### `daily_schedule_input`<sup>Optional</sup> <a name="daily_schedule_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.dailyScheduleInput"></a>

```python
daily_schedule_input: NetappSnapshotPolicyDailySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule">NetappSnapshotPolicyDailySchedule</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `hourly_schedule_input`<sup>Optional</sup> <a name="hourly_schedule_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.hourlyScheduleInput"></a>

```python
hourly_schedule_input: NetappSnapshotPolicyHourlySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule">NetappSnapshotPolicyHourlySchedule</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `monthly_schedule_input`<sup>Optional</sup> <a name="monthly_schedule_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.monthlyScheduleInput"></a>

```python
monthly_schedule_input: NetappSnapshotPolicyMonthlySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule">NetappSnapshotPolicyMonthlySchedule</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | NetappSnapshotPolicyTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts">NetappSnapshotPolicyTimeouts</a>

---

##### `weekly_schedule_input`<sup>Optional</sup> <a name="weekly_schedule_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.weeklyScheduleInput"></a>

```python
weekly_schedule_input: NetappSnapshotPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule">NetappSnapshotPolicyWeeklySchedule</a>

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetappSnapshotPolicyConfig <a name="NetappSnapshotPolicyConfig" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_snapshot_policy

netappSnapshotPolicy.NetappSnapshotPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_name: str,
  enabled: bool | IResolvable,
  location: str,
  name: str,
  resource_group_name: str,
  daily_schedule: NetappSnapshotPolicyDailySchedule = None,
  hourly_schedule: NetappSnapshotPolicyHourlySchedule = None,
  id: str = None,
  monthly_schedule: NetappSnapshotPolicyMonthlySchedule = None,
  tags: typing.Mapping[str] = None,
  timeouts: NetappSnapshotPolicyTimeouts = None,
  weekly_schedule: NetappSnapshotPolicyWeeklySchedule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#account_name NetappSnapshotPolicy#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#enabled NetappSnapshotPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#location NetappSnapshotPolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#name NetappSnapshotPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#resource_group_name NetappSnapshotPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.dailySchedule">daily_schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule">NetappSnapshotPolicyDailySchedule</a></code> | daily_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.hourlySchedule">hourly_schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule">NetappSnapshotPolicyHourlySchedule</a></code> | hourly_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#id NetappSnapshotPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.monthlySchedule">monthly_schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule">NetappSnapshotPolicyMonthlySchedule</a></code> | monthly_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#tags NetappSnapshotPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts">NetappSnapshotPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.weeklySchedule">weekly_schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule">NetappSnapshotPolicyWeeklySchedule</a></code> | weekly_schedule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#account_name NetappSnapshotPolicy#account_name}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#enabled NetappSnapshotPolicy#enabled}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#location NetappSnapshotPolicy#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#name NetappSnapshotPolicy#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#resource_group_name NetappSnapshotPolicy#resource_group_name}.

---

##### `daily_schedule`<sup>Optional</sup> <a name="daily_schedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.dailySchedule"></a>

```python
daily_schedule: NetappSnapshotPolicyDailySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule">NetappSnapshotPolicyDailySchedule</a>

daily_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#daily_schedule NetappSnapshotPolicy#daily_schedule}

---

##### `hourly_schedule`<sup>Optional</sup> <a name="hourly_schedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.hourlySchedule"></a>

```python
hourly_schedule: NetappSnapshotPolicyHourlySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule">NetappSnapshotPolicyHourlySchedule</a>

hourly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#hourly_schedule NetappSnapshotPolicy#hourly_schedule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#id NetappSnapshotPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monthly_schedule`<sup>Optional</sup> <a name="monthly_schedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.monthlySchedule"></a>

```python
monthly_schedule: NetappSnapshotPolicyMonthlySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule">NetappSnapshotPolicyMonthlySchedule</a>

monthly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#monthly_schedule NetappSnapshotPolicy#monthly_schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#tags NetappSnapshotPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.timeouts"></a>

```python
timeouts: NetappSnapshotPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts">NetappSnapshotPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#timeouts NetappSnapshotPolicy#timeouts}

---

##### `weekly_schedule`<sup>Optional</sup> <a name="weekly_schedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.weeklySchedule"></a>

```python
weekly_schedule: NetappSnapshotPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule">NetappSnapshotPolicyWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#weekly_schedule NetappSnapshotPolicy#weekly_schedule}

---

### NetappSnapshotPolicyDailySchedule <a name="NetappSnapshotPolicyDailySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_snapshot_policy

netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule(
  hour: typing.Union[int, float],
  minute: typing.Union[int, float],
  snapshots_to_keep: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#hour NetappSnapshotPolicy#hour}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}. |

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#hour NetappSnapshotPolicy#hour}.

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}.

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}.

---

### NetappSnapshotPolicyHourlySchedule <a name="NetappSnapshotPolicyHourlySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_snapshot_policy

netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule(
  minute: typing.Union[int, float],
  snapshots_to_keep: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}. |

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}.

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}.

---

### NetappSnapshotPolicyMonthlySchedule <a name="NetappSnapshotPolicyMonthlySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_snapshot_policy

netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule(
  days_of_month: typing.List[typing.Union[int, float]],
  hour: typing.Union[int, float],
  minute: typing.Union[int, float],
  snapshots_to_keep: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.property.daysOfMonth">days_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#days_of_month NetappSnapshotPolicy#days_of_month}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#hour NetappSnapshotPolicy#hour}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}. |

---

##### `days_of_month`<sup>Required</sup> <a name="days_of_month" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.property.daysOfMonth"></a>

```python
days_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#days_of_month NetappSnapshotPolicy#days_of_month}.

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#hour NetappSnapshotPolicy#hour}.

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}.

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}.

---

### NetappSnapshotPolicyTimeouts <a name="NetappSnapshotPolicyTimeouts" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_snapshot_policy

netappSnapshotPolicy.NetappSnapshotPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#create NetappSnapshotPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#delete NetappSnapshotPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#read NetappSnapshotPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#update NetappSnapshotPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#create NetappSnapshotPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#delete NetappSnapshotPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#read NetappSnapshotPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#update NetappSnapshotPolicy#update}.

---

### NetappSnapshotPolicyWeeklySchedule <a name="NetappSnapshotPolicyWeeklySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_snapshot_policy

netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule(
  days_of_week: typing.List[str],
  hour: typing.Union[int, float],
  minute: typing.Union[int, float],
  snapshots_to_keep: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#days_of_week NetappSnapshotPolicy#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#hour NetappSnapshotPolicy#hour}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}. |

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#days_of_week NetappSnapshotPolicy#days_of_week}.

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#hour NetappSnapshotPolicy#hour}.

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}.

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappSnapshotPolicyDailyScheduleOutputReference <a name="NetappSnapshotPolicyDailyScheduleOutputReference" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_snapshot_policy

netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.hourInput">hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.minuteInput">minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeepInput">snapshots_to_keep_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule">NetappSnapshotPolicyDailySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hour_input`<sup>Optional</sup> <a name="hour_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.hourInput"></a>

```python
hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_input`<sup>Optional</sup> <a name="minute_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.minuteInput"></a>

```python
minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep_input`<sup>Optional</sup> <a name="snapshots_to_keep_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```python
snapshots_to_keep_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.internalValue"></a>

```python
internal_value: NetappSnapshotPolicyDailySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule">NetappSnapshotPolicyDailySchedule</a>

---


### NetappSnapshotPolicyHourlyScheduleOutputReference <a name="NetappSnapshotPolicyHourlyScheduleOutputReference" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_snapshot_policy

netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.minuteInput">minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeepInput">snapshots_to_keep_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule">NetappSnapshotPolicyHourlySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `minute_input`<sup>Optional</sup> <a name="minute_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.minuteInput"></a>

```python
minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep_input`<sup>Optional</sup> <a name="snapshots_to_keep_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```python
snapshots_to_keep_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.internalValue"></a>

```python
internal_value: NetappSnapshotPolicyHourlySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule">NetappSnapshotPolicyHourlySchedule</a>

---


### NetappSnapshotPolicyMonthlyScheduleOutputReference <a name="NetappSnapshotPolicyMonthlyScheduleOutputReference" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_snapshot_policy

netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonthInput">days_of_month_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.hourInput">hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.minuteInput">minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeepInput">snapshots_to_keep_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth">days_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule">NetappSnapshotPolicyMonthlySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_of_month_input`<sup>Optional</sup> <a name="days_of_month_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonthInput"></a>

```python
days_of_month_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `hour_input`<sup>Optional</sup> <a name="hour_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.hourInput"></a>

```python
hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_input`<sup>Optional</sup> <a name="minute_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.minuteInput"></a>

```python
minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep_input`<sup>Optional</sup> <a name="snapshots_to_keep_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```python
snapshots_to_keep_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_of_month`<sup>Required</sup> <a name="days_of_month" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth"></a>

```python
days_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue"></a>

```python
internal_value: NetappSnapshotPolicyMonthlySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule">NetappSnapshotPolicyMonthlySchedule</a>

---


### NetappSnapshotPolicyTimeoutsOutputReference <a name="NetappSnapshotPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_snapshot_policy

netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts">NetappSnapshotPolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetappSnapshotPolicyTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts">NetappSnapshotPolicyTimeouts</a>

---


### NetappSnapshotPolicyWeeklyScheduleOutputReference <a name="NetappSnapshotPolicyWeeklyScheduleOutputReference" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_snapshot_policy

netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.daysOfWeekInput">days_of_week_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.hourInput">hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.minuteInput">minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeepInput">snapshots_to_keep_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule">NetappSnapshotPolicyWeeklySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_of_week_input`<sup>Optional</sup> <a name="days_of_week_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.daysOfWeekInput"></a>

```python
days_of_week_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hour_input`<sup>Optional</sup> <a name="hour_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.hourInput"></a>

```python
hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_input`<sup>Optional</sup> <a name="minute_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.minuteInput"></a>

```python
minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep_input`<sup>Optional</sup> <a name="snapshots_to_keep_input" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```python
snapshots_to_keep_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue"></a>

```python
internal_value: NetappSnapshotPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule">NetappSnapshotPolicyWeeklySchedule</a>

---



