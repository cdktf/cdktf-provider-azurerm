# `devTestSchedule` Submodule <a name="`devTestSchedule` Submodule" id="@cdktf/provider-azurerm.devTestSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevTestSchedule <a name="DevTestSchedule" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule azurerm_dev_test_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_schedule

devTestSchedule.DevTestSchedule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  lab_name: str,
  location: str,
  name: str,
  notification_settings: DevTestScheduleNotificationSettings,
  resource_group_name: str,
  task_type: str,
  time_zone_id: str,
  daily_recurrence: DevTestScheduleDailyRecurrence = None,
  hourly_recurrence: DevTestScheduleHourlyRecurrence = None,
  id: str = None,
  status: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DevTestScheduleTimeouts = None,
  weekly_recurrence: DevTestScheduleWeeklyRecurrence = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.labName">lab_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#lab_name DevTestSchedule#lab_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#location DevTestSchedule#location}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#name DevTestSchedule#name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.notificationSettings">notification_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings">DevTestScheduleNotificationSettings</a></code> | notification_settings block. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#resource_group_name DevTestSchedule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.taskType">task_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#task_type DevTestSchedule#task_type}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.timeZoneId">time_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#time_zone_id DevTestSchedule#time_zone_id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.dailyRecurrence">daily_recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence">DevTestScheduleDailyRecurrence</a></code> | daily_recurrence block. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.hourlyRecurrence">hourly_recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence">DevTestScheduleHourlyRecurrence</a></code> | hourly_recurrence block. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#id DevTestSchedule#id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#status DevTestSchedule#status}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#tags DevTestSchedule#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts">DevTestScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.weeklyRecurrence">weekly_recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence">DevTestScheduleWeeklyRecurrence</a></code> | weekly_recurrence block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lab_name`<sup>Required</sup> <a name="lab_name" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.labName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#lab_name DevTestSchedule#lab_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#location DevTestSchedule#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#name DevTestSchedule#name}.

---

##### `notification_settings`<sup>Required</sup> <a name="notification_settings" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.notificationSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings">DevTestScheduleNotificationSettings</a>

notification_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#notification_settings DevTestSchedule#notification_settings}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#resource_group_name DevTestSchedule#resource_group_name}.

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.taskType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#task_type DevTestSchedule#task_type}.

---

##### `time_zone_id`<sup>Required</sup> <a name="time_zone_id" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.timeZoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#time_zone_id DevTestSchedule#time_zone_id}.

---

##### `daily_recurrence`<sup>Optional</sup> <a name="daily_recurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.dailyRecurrence"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence">DevTestScheduleDailyRecurrence</a>

daily_recurrence block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#daily_recurrence DevTestSchedule#daily_recurrence}

---

##### `hourly_recurrence`<sup>Optional</sup> <a name="hourly_recurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.hourlyRecurrence"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence">DevTestScheduleHourlyRecurrence</a>

hourly_recurrence block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#hourly_recurrence DevTestSchedule#hourly_recurrence}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#id DevTestSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#status DevTestSchedule#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#tags DevTestSchedule#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts">DevTestScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#timeouts DevTestSchedule#timeouts}

---

##### `weekly_recurrence`<sup>Optional</sup> <a name="weekly_recurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.weeklyRecurrence"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence">DevTestScheduleWeeklyRecurrence</a>

weekly_recurrence block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#weekly_recurrence DevTestSchedule#weekly_recurrence}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putDailyRecurrence">put_daily_recurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putHourlyRecurrence">put_hourly_recurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putNotificationSettings">put_notification_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putWeeklyRecurrence">put_weekly_recurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetDailyRecurrence">reset_daily_recurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetHourlyRecurrence">reset_hourly_recurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetWeeklyRecurrence">reset_weekly_recurrence</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_daily_recurrence` <a name="put_daily_recurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putDailyRecurrence"></a>

```python
def put_daily_recurrence(
  time: str
) -> None
```

###### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putDailyRecurrence.parameter.time"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#time DevTestSchedule#time}.

---

##### `put_hourly_recurrence` <a name="put_hourly_recurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putHourlyRecurrence"></a>

```python
def put_hourly_recurrence(
  minute: typing.Union[int, float]
) -> None
```

###### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putHourlyRecurrence.parameter.minute"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#minute DevTestSchedule#minute}.

---

##### `put_notification_settings` <a name="put_notification_settings" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putNotificationSettings"></a>

```python
def put_notification_settings(
  status: str = None,
  time_in_minutes: typing.Union[int, float] = None,
  webhook_url: str = None
) -> None
```

###### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putNotificationSettings.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#status DevTestSchedule#status}.

---

###### `time_in_minutes`<sup>Optional</sup> <a name="time_in_minutes" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putNotificationSettings.parameter.timeInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#time_in_minutes DevTestSchedule#time_in_minutes}.

---

###### `webhook_url`<sup>Optional</sup> <a name="webhook_url" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putNotificationSettings.parameter.webhookUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#webhook_url DevTestSchedule#webhook_url}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#create DevTestSchedule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#delete DevTestSchedule#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#read DevTestSchedule#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#update DevTestSchedule#update}.

---

##### `put_weekly_recurrence` <a name="put_weekly_recurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putWeeklyRecurrence"></a>

```python
def put_weekly_recurrence(
  time: str,
  week_days: typing.List[str] = None
) -> None
```

###### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putWeeklyRecurrence.parameter.time"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#time DevTestSchedule#time}.

---

###### `week_days`<sup>Optional</sup> <a name="week_days" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putWeeklyRecurrence.parameter.weekDays"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#week_days DevTestSchedule#week_days}.

---

##### `reset_daily_recurrence` <a name="reset_daily_recurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetDailyRecurrence"></a>

```python
def reset_daily_recurrence() -> None
```

##### `reset_hourly_recurrence` <a name="reset_hourly_recurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetHourlyRecurrence"></a>

```python
def reset_hourly_recurrence() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_weekly_recurrence` <a name="reset_weekly_recurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetWeeklyRecurrence"></a>

```python
def reset_weekly_recurrence() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_schedule

devTestSchedule.DevTestSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_schedule

devTestSchedule.DevTestSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_schedule

devTestSchedule.DevTestSchedule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.dailyRecurrence">daily_recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference">DevTestScheduleDailyRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.hourlyRecurrence">hourly_recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference">DevTestScheduleHourlyRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.notificationSettings">notification_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference">DevTestScheduleNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference">DevTestScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.weeklyRecurrence">weekly_recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference">DevTestScheduleWeeklyRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.dailyRecurrenceInput">daily_recurrence_input</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence">DevTestScheduleDailyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.hourlyRecurrenceInput">hourly_recurrence_input</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence">DevTestScheduleHourlyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.labNameInput">lab_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.notificationSettingsInput">notification_settings_input</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings">DevTestScheduleNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.taskTypeInput">task_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts">DevTestScheduleTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.timeZoneIdInput">time_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.weeklyRecurrenceInput">weekly_recurrence_input</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence">DevTestScheduleWeeklyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.labName">lab_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.taskType">task_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.timeZoneId">time_zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `daily_recurrence`<sup>Required</sup> <a name="daily_recurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.dailyRecurrence"></a>

```python
daily_recurrence: DevTestScheduleDailyRecurrenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference">DevTestScheduleDailyRecurrenceOutputReference</a>

---

##### `hourly_recurrence`<sup>Required</sup> <a name="hourly_recurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.hourlyRecurrence"></a>

```python
hourly_recurrence: DevTestScheduleHourlyRecurrenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference">DevTestScheduleHourlyRecurrenceOutputReference</a>

---

##### `notification_settings`<sup>Required</sup> <a name="notification_settings" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.notificationSettings"></a>

```python
notification_settings: DevTestScheduleNotificationSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference">DevTestScheduleNotificationSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.timeouts"></a>

```python
timeouts: DevTestScheduleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference">DevTestScheduleTimeoutsOutputReference</a>

---

##### `weekly_recurrence`<sup>Required</sup> <a name="weekly_recurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.weeklyRecurrence"></a>

```python
weekly_recurrence: DevTestScheduleWeeklyRecurrenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference">DevTestScheduleWeeklyRecurrenceOutputReference</a>

---

##### `daily_recurrence_input`<sup>Optional</sup> <a name="daily_recurrence_input" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.dailyRecurrenceInput"></a>

```python
daily_recurrence_input: DevTestScheduleDailyRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence">DevTestScheduleDailyRecurrence</a>

---

##### `hourly_recurrence_input`<sup>Optional</sup> <a name="hourly_recurrence_input" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.hourlyRecurrenceInput"></a>

```python
hourly_recurrence_input: DevTestScheduleHourlyRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence">DevTestScheduleHourlyRecurrence</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lab_name_input`<sup>Optional</sup> <a name="lab_name_input" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.labNameInput"></a>

```python
lab_name_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_settings_input`<sup>Optional</sup> <a name="notification_settings_input" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.notificationSettingsInput"></a>

```python
notification_settings_input: DevTestScheduleNotificationSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings">DevTestScheduleNotificationSettings</a>

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `task_type_input`<sup>Optional</sup> <a name="task_type_input" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.taskTypeInput"></a>

```python
task_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DevTestScheduleTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts">DevTestScheduleTimeouts</a>, cdktf.IResolvable]

---

##### `time_zone_id_input`<sup>Optional</sup> <a name="time_zone_id_input" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.timeZoneIdInput"></a>

```python
time_zone_id_input: str
```

- *Type:* str

---

##### `weekly_recurrence_input`<sup>Optional</sup> <a name="weekly_recurrence_input" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.weeklyRecurrenceInput"></a>

```python
weekly_recurrence_input: DevTestScheduleWeeklyRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence">DevTestScheduleWeeklyRecurrence</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lab_name`<sup>Required</sup> <a name="lab_name" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.labName"></a>

```python
lab_name: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

---

##### `time_zone_id`<sup>Required</sup> <a name="time_zone_id" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.timeZoneId"></a>

```python
time_zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DevTestScheduleConfig <a name="DevTestScheduleConfig" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_schedule

devTestSchedule.DevTestScheduleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  lab_name: str,
  location: str,
  name: str,
  notification_settings: DevTestScheduleNotificationSettings,
  resource_group_name: str,
  task_type: str,
  time_zone_id: str,
  daily_recurrence: DevTestScheduleDailyRecurrence = None,
  hourly_recurrence: DevTestScheduleHourlyRecurrence = None,
  id: str = None,
  status: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DevTestScheduleTimeouts = None,
  weekly_recurrence: DevTestScheduleWeeklyRecurrence = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.labName">lab_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#lab_name DevTestSchedule#lab_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#location DevTestSchedule#location}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#name DevTestSchedule#name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.notificationSettings">notification_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings">DevTestScheduleNotificationSettings</a></code> | notification_settings block. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#resource_group_name DevTestSchedule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.taskType">task_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#task_type DevTestSchedule#task_type}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.timeZoneId">time_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#time_zone_id DevTestSchedule#time_zone_id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.dailyRecurrence">daily_recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence">DevTestScheduleDailyRecurrence</a></code> | daily_recurrence block. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.hourlyRecurrence">hourly_recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence">DevTestScheduleHourlyRecurrence</a></code> | hourly_recurrence block. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#id DevTestSchedule#id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#status DevTestSchedule#status}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#tags DevTestSchedule#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts">DevTestScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.weeklyRecurrence">weekly_recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence">DevTestScheduleWeeklyRecurrence</a></code> | weekly_recurrence block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lab_name`<sup>Required</sup> <a name="lab_name" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.labName"></a>

```python
lab_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#lab_name DevTestSchedule#lab_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#location DevTestSchedule#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#name DevTestSchedule#name}.

---

##### `notification_settings`<sup>Required</sup> <a name="notification_settings" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.notificationSettings"></a>

```python
notification_settings: DevTestScheduleNotificationSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings">DevTestScheduleNotificationSettings</a>

notification_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#notification_settings DevTestSchedule#notification_settings}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#resource_group_name DevTestSchedule#resource_group_name}.

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#task_type DevTestSchedule#task_type}.

---

##### `time_zone_id`<sup>Required</sup> <a name="time_zone_id" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.timeZoneId"></a>

```python
time_zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#time_zone_id DevTestSchedule#time_zone_id}.

---

##### `daily_recurrence`<sup>Optional</sup> <a name="daily_recurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.dailyRecurrence"></a>

```python
daily_recurrence: DevTestScheduleDailyRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence">DevTestScheduleDailyRecurrence</a>

daily_recurrence block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#daily_recurrence DevTestSchedule#daily_recurrence}

---

##### `hourly_recurrence`<sup>Optional</sup> <a name="hourly_recurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.hourlyRecurrence"></a>

```python
hourly_recurrence: DevTestScheduleHourlyRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence">DevTestScheduleHourlyRecurrence</a>

hourly_recurrence block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#hourly_recurrence DevTestSchedule#hourly_recurrence}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#id DevTestSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#status DevTestSchedule#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#tags DevTestSchedule#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.timeouts"></a>

```python
timeouts: DevTestScheduleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts">DevTestScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#timeouts DevTestSchedule#timeouts}

---

##### `weekly_recurrence`<sup>Optional</sup> <a name="weekly_recurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.weeklyRecurrence"></a>

```python
weekly_recurrence: DevTestScheduleWeeklyRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence">DevTestScheduleWeeklyRecurrence</a>

weekly_recurrence block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#weekly_recurrence DevTestSchedule#weekly_recurrence}

---

### DevTestScheduleDailyRecurrence <a name="DevTestScheduleDailyRecurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_schedule

devTestSchedule.DevTestScheduleDailyRecurrence(
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence.property.time">time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#time DevTestSchedule#time}. |

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence.property.time"></a>

```python
time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#time DevTestSchedule#time}.

---

### DevTestScheduleHourlyRecurrence <a name="DevTestScheduleHourlyRecurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_schedule

devTestSchedule.DevTestScheduleHourlyRecurrence(
  minute: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#minute DevTestSchedule#minute}. |

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#minute DevTestSchedule#minute}.

---

### DevTestScheduleNotificationSettings <a name="DevTestScheduleNotificationSettings" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_schedule

devTestSchedule.DevTestScheduleNotificationSettings(
  status: str = None,
  time_in_minutes: typing.Union[int, float] = None,
  webhook_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#status DevTestSchedule#status}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings.property.timeInMinutes">time_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#time_in_minutes DevTestSchedule#time_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings.property.webhookUrl">webhook_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#webhook_url DevTestSchedule#webhook_url}. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#status DevTestSchedule#status}.

---

##### `time_in_minutes`<sup>Optional</sup> <a name="time_in_minutes" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings.property.timeInMinutes"></a>

```python
time_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#time_in_minutes DevTestSchedule#time_in_minutes}.

---

##### `webhook_url`<sup>Optional</sup> <a name="webhook_url" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings.property.webhookUrl"></a>

```python
webhook_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#webhook_url DevTestSchedule#webhook_url}.

---

### DevTestScheduleTimeouts <a name="DevTestScheduleTimeouts" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_schedule

devTestSchedule.DevTestScheduleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#create DevTestSchedule#create}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#delete DevTestSchedule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#read DevTestSchedule#read}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#update DevTestSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#create DevTestSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#delete DevTestSchedule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#read DevTestSchedule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#update DevTestSchedule#update}.

---

### DevTestScheduleWeeklyRecurrence <a name="DevTestScheduleWeeklyRecurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_schedule

devTestSchedule.DevTestScheduleWeeklyRecurrence(
  time: str,
  week_days: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence.property.time">time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#time DevTestSchedule#time}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence.property.weekDays">week_days</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#week_days DevTestSchedule#week_days}. |

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence.property.time"></a>

```python
time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#time DevTestSchedule#time}.

---

##### `week_days`<sup>Optional</sup> <a name="week_days" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence.property.weekDays"></a>

```python
week_days: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_schedule#week_days DevTestSchedule#week_days}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevTestScheduleDailyRecurrenceOutputReference <a name="DevTestScheduleDailyRecurrenceOutputReference" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_schedule

devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence">DevTestScheduleDailyRecurrence</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.internalValue"></a>

```python
internal_value: DevTestScheduleDailyRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence">DevTestScheduleDailyRecurrence</a>

---


### DevTestScheduleHourlyRecurrenceOutputReference <a name="DevTestScheduleHourlyRecurrenceOutputReference" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_schedule

devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.minuteInput">minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence">DevTestScheduleHourlyRecurrence</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `minute_input`<sup>Optional</sup> <a name="minute_input" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.minuteInput"></a>

```python
minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.internalValue"></a>

```python
internal_value: DevTestScheduleHourlyRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence">DevTestScheduleHourlyRecurrence</a>

---


### DevTestScheduleNotificationSettingsOutputReference <a name="DevTestScheduleNotificationSettingsOutputReference" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_schedule

devTestSchedule.DevTestScheduleNotificationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resetTimeInMinutes">reset_time_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resetWebhookUrl">reset_webhook_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_status` <a name="reset_status" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_time_in_minutes` <a name="reset_time_in_minutes" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resetTimeInMinutes"></a>

```python
def reset_time_in_minutes() -> None
```

##### `reset_webhook_url` <a name="reset_webhook_url" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resetWebhookUrl"></a>

```python
def reset_webhook_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.timeInMinutesInput">time_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.webhookUrlInput">webhook_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.timeInMinutes">time_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.webhookUrl">webhook_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings">DevTestScheduleNotificationSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `time_in_minutes_input`<sup>Optional</sup> <a name="time_in_minutes_input" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.timeInMinutesInput"></a>

```python
time_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `webhook_url_input`<sup>Optional</sup> <a name="webhook_url_input" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.webhookUrlInput"></a>

```python
webhook_url_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_in_minutes`<sup>Required</sup> <a name="time_in_minutes" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.timeInMinutes"></a>

```python
time_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `webhook_url`<sup>Required</sup> <a name="webhook_url" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.webhookUrl"></a>

```python
webhook_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DevTestScheduleNotificationSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings">DevTestScheduleNotificationSettings</a>

---


### DevTestScheduleTimeoutsOutputReference <a name="DevTestScheduleTimeoutsOutputReference" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_schedule

devTestSchedule.DevTestScheduleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts">DevTestScheduleTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DevTestScheduleTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts">DevTestScheduleTimeouts</a>, cdktf.IResolvable]

---


### DevTestScheduleWeeklyRecurrenceOutputReference <a name="DevTestScheduleWeeklyRecurrenceOutputReference" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_schedule

devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.resetWeekDays">reset_week_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_week_days` <a name="reset_week_days" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.resetWeekDays"></a>

```python
def reset_week_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.weekDaysInput">week_days_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.weekDays">week_days</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence">DevTestScheduleWeeklyRecurrence</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `week_days_input`<sup>Optional</sup> <a name="week_days_input" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.weekDaysInput"></a>

```python
week_days_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `week_days`<sup>Required</sup> <a name="week_days" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.weekDays"></a>

```python
week_days: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.internalValue"></a>

```python
internal_value: DevTestScheduleWeeklyRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence">DevTestScheduleWeeklyRecurrence</a>

---



