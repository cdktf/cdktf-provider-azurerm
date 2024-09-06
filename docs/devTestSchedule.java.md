# `devTestSchedule` Submodule <a name="`devTestSchedule` Submodule" id="@cdktf/provider-azurerm.devTestSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevTestSchedule <a name="DevTestSchedule" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule azurerm_dev_test_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_schedule.DevTestSchedule;

DevTestSchedule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .labName(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .notificationSettings(DevTestScheduleNotificationSettings)
    .resourceGroupName(java.lang.String)
    .taskType(java.lang.String)
    .timeZoneId(java.lang.String)
//  .dailyRecurrence(DevTestScheduleDailyRecurrence)
//  .hourlyRecurrence(DevTestScheduleHourlyRecurrence)
//  .id(java.lang.String)
//  .status(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DevTestScheduleTimeouts)
//  .weeklyRecurrence(DevTestScheduleWeeklyRecurrence)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.labName">labName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#lab_name DevTestSchedule#lab_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#location DevTestSchedule#location}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#name DevTestSchedule#name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.notificationSettings">notificationSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings">DevTestScheduleNotificationSettings</a></code> | notification_settings block. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#resource_group_name DevTestSchedule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.taskType">taskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#task_type DevTestSchedule#task_type}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.timeZoneId">timeZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#time_zone_id DevTestSchedule#time_zone_id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.dailyRecurrence">dailyRecurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence">DevTestScheduleDailyRecurrence</a></code> | daily_recurrence block. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.hourlyRecurrence">hourlyRecurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence">DevTestScheduleHourlyRecurrence</a></code> | hourly_recurrence block. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#id DevTestSchedule#id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#status DevTestSchedule#status}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#tags DevTestSchedule#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts">DevTestScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.weeklyRecurrence">weeklyRecurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence">DevTestScheduleWeeklyRecurrence</a></code> | weekly_recurrence block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `labName`<sup>Required</sup> <a name="labName" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.labName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#lab_name DevTestSchedule#lab_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#location DevTestSchedule#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#name DevTestSchedule#name}.

---

##### `notificationSettings`<sup>Required</sup> <a name="notificationSettings" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.notificationSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings">DevTestScheduleNotificationSettings</a>

notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#notification_settings DevTestSchedule#notification_settings}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#resource_group_name DevTestSchedule#resource_group_name}.

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.taskType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#task_type DevTestSchedule#task_type}.

---

##### `timeZoneId`<sup>Required</sup> <a name="timeZoneId" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.timeZoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#time_zone_id DevTestSchedule#time_zone_id}.

---

##### `dailyRecurrence`<sup>Optional</sup> <a name="dailyRecurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.dailyRecurrence"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence">DevTestScheduleDailyRecurrence</a>

daily_recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#daily_recurrence DevTestSchedule#daily_recurrence}

---

##### `hourlyRecurrence`<sup>Optional</sup> <a name="hourlyRecurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.hourlyRecurrence"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence">DevTestScheduleHourlyRecurrence</a>

hourly_recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#hourly_recurrence DevTestSchedule#hourly_recurrence}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#id DevTestSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#status DevTestSchedule#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#tags DevTestSchedule#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts">DevTestScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#timeouts DevTestSchedule#timeouts}

---

##### `weeklyRecurrence`<sup>Optional</sup> <a name="weeklyRecurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.weeklyRecurrence"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence">DevTestScheduleWeeklyRecurrence</a>

weekly_recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#weekly_recurrence DevTestSchedule#weekly_recurrence}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putDailyRecurrence">putDailyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putHourlyRecurrence">putHourlyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putNotificationSettings">putNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putWeeklyRecurrence">putWeeklyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetDailyRecurrence">resetDailyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetHourlyRecurrence">resetHourlyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetWeeklyRecurrence">resetWeeklyRecurrence</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDailyRecurrence` <a name="putDailyRecurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putDailyRecurrence"></a>

```java
public void putDailyRecurrence(DevTestScheduleDailyRecurrence value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putDailyRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence">DevTestScheduleDailyRecurrence</a>

---

##### `putHourlyRecurrence` <a name="putHourlyRecurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putHourlyRecurrence"></a>

```java
public void putHourlyRecurrence(DevTestScheduleHourlyRecurrence value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putHourlyRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence">DevTestScheduleHourlyRecurrence</a>

---

##### `putNotificationSettings` <a name="putNotificationSettings" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putNotificationSettings"></a>

```java
public void putNotificationSettings(DevTestScheduleNotificationSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putNotificationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings">DevTestScheduleNotificationSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putTimeouts"></a>

```java
public void putTimeouts(DevTestScheduleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts">DevTestScheduleTimeouts</a>

---

##### `putWeeklyRecurrence` <a name="putWeeklyRecurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putWeeklyRecurrence"></a>

```java
public void putWeeklyRecurrence(DevTestScheduleWeeklyRecurrence value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.putWeeklyRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence">DevTestScheduleWeeklyRecurrence</a>

---

##### `resetDailyRecurrence` <a name="resetDailyRecurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetDailyRecurrence"></a>

```java
public void resetDailyRecurrence()
```

##### `resetHourlyRecurrence` <a name="resetHourlyRecurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetHourlyRecurrence"></a>

```java
public void resetHourlyRecurrence()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetId"></a>

```java
public void resetId()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWeeklyRecurrence` <a name="resetWeeklyRecurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.resetWeeklyRecurrence"></a>

```java
public void resetWeeklyRecurrence()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevTestSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_schedule.DevTestSchedule;

DevTestSchedule.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_schedule.DevTestSchedule;

DevTestSchedule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_schedule.DevTestSchedule;

DevTestSchedule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_schedule.DevTestSchedule;

DevTestSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DevTestSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DevTestSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DevTestSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DevTestSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DevTestSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.dailyRecurrence">dailyRecurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference">DevTestScheduleDailyRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.hourlyRecurrence">hourlyRecurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference">DevTestScheduleHourlyRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.notificationSettings">notificationSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference">DevTestScheduleNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference">DevTestScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.weeklyRecurrence">weeklyRecurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference">DevTestScheduleWeeklyRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.dailyRecurrenceInput">dailyRecurrenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence">DevTestScheduleDailyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.hourlyRecurrenceInput">hourlyRecurrenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence">DevTestScheduleHourlyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.labNameInput">labNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.notificationSettingsInput">notificationSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings">DevTestScheduleNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.taskTypeInput">taskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts">DevTestScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.timeZoneIdInput">timeZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.weeklyRecurrenceInput">weeklyRecurrenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence">DevTestScheduleWeeklyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.labName">labName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.taskType">taskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.timeZoneId">timeZoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dailyRecurrence`<sup>Required</sup> <a name="dailyRecurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.dailyRecurrence"></a>

```java
public DevTestScheduleDailyRecurrenceOutputReference getDailyRecurrence();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference">DevTestScheduleDailyRecurrenceOutputReference</a>

---

##### `hourlyRecurrence`<sup>Required</sup> <a name="hourlyRecurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.hourlyRecurrence"></a>

```java
public DevTestScheduleHourlyRecurrenceOutputReference getHourlyRecurrence();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference">DevTestScheduleHourlyRecurrenceOutputReference</a>

---

##### `notificationSettings`<sup>Required</sup> <a name="notificationSettings" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.notificationSettings"></a>

```java
public DevTestScheduleNotificationSettingsOutputReference getNotificationSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference">DevTestScheduleNotificationSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.timeouts"></a>

```java
public DevTestScheduleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference">DevTestScheduleTimeoutsOutputReference</a>

---

##### `weeklyRecurrence`<sup>Required</sup> <a name="weeklyRecurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.weeklyRecurrence"></a>

```java
public DevTestScheduleWeeklyRecurrenceOutputReference getWeeklyRecurrence();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference">DevTestScheduleWeeklyRecurrenceOutputReference</a>

---

##### `dailyRecurrenceInput`<sup>Optional</sup> <a name="dailyRecurrenceInput" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.dailyRecurrenceInput"></a>

```java
public DevTestScheduleDailyRecurrence getDailyRecurrenceInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence">DevTestScheduleDailyRecurrence</a>

---

##### `hourlyRecurrenceInput`<sup>Optional</sup> <a name="hourlyRecurrenceInput" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.hourlyRecurrenceInput"></a>

```java
public DevTestScheduleHourlyRecurrence getHourlyRecurrenceInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence">DevTestScheduleHourlyRecurrence</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labNameInput`<sup>Optional</sup> <a name="labNameInput" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.labNameInput"></a>

```java
public java.lang.String getLabNameInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notificationSettingsInput`<sup>Optional</sup> <a name="notificationSettingsInput" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.notificationSettingsInput"></a>

```java
public DevTestScheduleNotificationSettings getNotificationSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings">DevTestScheduleNotificationSettings</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `taskTypeInput`<sup>Optional</sup> <a name="taskTypeInput" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.taskTypeInput"></a>

```java
public java.lang.String getTaskTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts">DevTestScheduleTimeouts</a>

---

##### `timeZoneIdInput`<sup>Optional</sup> <a name="timeZoneIdInput" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.timeZoneIdInput"></a>

```java
public java.lang.String getTimeZoneIdInput();
```

- *Type:* java.lang.String

---

##### `weeklyRecurrenceInput`<sup>Optional</sup> <a name="weeklyRecurrenceInput" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.weeklyRecurrenceInput"></a>

```java
public DevTestScheduleWeeklyRecurrence getWeeklyRecurrenceInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence">DevTestScheduleWeeklyRecurrence</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labName`<sup>Required</sup> <a name="labName" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.labName"></a>

```java
public java.lang.String getLabName();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.taskType"></a>

```java
public java.lang.String getTaskType();
```

- *Type:* java.lang.String

---

##### `timeZoneId`<sup>Required</sup> <a name="timeZoneId" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.timeZoneId"></a>

```java
public java.lang.String getTimeZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.devTestSchedule.DevTestSchedule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevTestScheduleConfig <a name="DevTestScheduleConfig" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_schedule.DevTestScheduleConfig;

DevTestScheduleConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .labName(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .notificationSettings(DevTestScheduleNotificationSettings)
    .resourceGroupName(java.lang.String)
    .taskType(java.lang.String)
    .timeZoneId(java.lang.String)
//  .dailyRecurrence(DevTestScheduleDailyRecurrence)
//  .hourlyRecurrence(DevTestScheduleHourlyRecurrence)
//  .id(java.lang.String)
//  .status(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DevTestScheduleTimeouts)
//  .weeklyRecurrence(DevTestScheduleWeeklyRecurrence)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.labName">labName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#lab_name DevTestSchedule#lab_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#location DevTestSchedule#location}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#name DevTestSchedule#name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.notificationSettings">notificationSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings">DevTestScheduleNotificationSettings</a></code> | notification_settings block. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#resource_group_name DevTestSchedule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.taskType">taskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#task_type DevTestSchedule#task_type}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.timeZoneId">timeZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#time_zone_id DevTestSchedule#time_zone_id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.dailyRecurrence">dailyRecurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence">DevTestScheduleDailyRecurrence</a></code> | daily_recurrence block. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.hourlyRecurrence">hourlyRecurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence">DevTestScheduleHourlyRecurrence</a></code> | hourly_recurrence block. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#id DevTestSchedule#id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#status DevTestSchedule#status}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#tags DevTestSchedule#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts">DevTestScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.weeklyRecurrence">weeklyRecurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence">DevTestScheduleWeeklyRecurrence</a></code> | weekly_recurrence block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `labName`<sup>Required</sup> <a name="labName" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.labName"></a>

```java
public java.lang.String getLabName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#lab_name DevTestSchedule#lab_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#location DevTestSchedule#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#name DevTestSchedule#name}.

---

##### `notificationSettings`<sup>Required</sup> <a name="notificationSettings" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.notificationSettings"></a>

```java
public DevTestScheduleNotificationSettings getNotificationSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings">DevTestScheduleNotificationSettings</a>

notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#notification_settings DevTestSchedule#notification_settings}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#resource_group_name DevTestSchedule#resource_group_name}.

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.taskType"></a>

```java
public java.lang.String getTaskType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#task_type DevTestSchedule#task_type}.

---

##### `timeZoneId`<sup>Required</sup> <a name="timeZoneId" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.timeZoneId"></a>

```java
public java.lang.String getTimeZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#time_zone_id DevTestSchedule#time_zone_id}.

---

##### `dailyRecurrence`<sup>Optional</sup> <a name="dailyRecurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.dailyRecurrence"></a>

```java
public DevTestScheduleDailyRecurrence getDailyRecurrence();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence">DevTestScheduleDailyRecurrence</a>

daily_recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#daily_recurrence DevTestSchedule#daily_recurrence}

---

##### `hourlyRecurrence`<sup>Optional</sup> <a name="hourlyRecurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.hourlyRecurrence"></a>

```java
public DevTestScheduleHourlyRecurrence getHourlyRecurrence();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence">DevTestScheduleHourlyRecurrence</a>

hourly_recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#hourly_recurrence DevTestSchedule#hourly_recurrence}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#id DevTestSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#status DevTestSchedule#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#tags DevTestSchedule#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.timeouts"></a>

```java
public DevTestScheduleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts">DevTestScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#timeouts DevTestSchedule#timeouts}

---

##### `weeklyRecurrence`<sup>Optional</sup> <a name="weeklyRecurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.weeklyRecurrence"></a>

```java
public DevTestScheduleWeeklyRecurrence getWeeklyRecurrence();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence">DevTestScheduleWeeklyRecurrence</a>

weekly_recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#weekly_recurrence DevTestSchedule#weekly_recurrence}

---

### DevTestScheduleDailyRecurrence <a name="DevTestScheduleDailyRecurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_schedule.DevTestScheduleDailyRecurrence;

DevTestScheduleDailyRecurrence.builder()
    .time(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence.property.time">time</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#time DevTestSchedule#time}. |

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#time DevTestSchedule#time}.

---

### DevTestScheduleHourlyRecurrence <a name="DevTestScheduleHourlyRecurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_schedule.DevTestScheduleHourlyRecurrence;

DevTestScheduleHourlyRecurrence.builder()
    .minute(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence.property.minute">minute</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#minute DevTestSchedule#minute}. |

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence.property.minute"></a>

```java
public java.lang.Number getMinute();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#minute DevTestSchedule#minute}.

---

### DevTestScheduleNotificationSettings <a name="DevTestScheduleNotificationSettings" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_schedule.DevTestScheduleNotificationSettings;

DevTestScheduleNotificationSettings.builder()
//  .status(java.lang.String)
//  .timeInMinutes(java.lang.Number)
//  .webhookUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#status DevTestSchedule#status}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings.property.timeInMinutes">timeInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#time_in_minutes DevTestSchedule#time_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings.property.webhookUrl">webhookUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#webhook_url DevTestSchedule#webhook_url}. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#status DevTestSchedule#status}.

---

##### `timeInMinutes`<sup>Optional</sup> <a name="timeInMinutes" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings.property.timeInMinutes"></a>

```java
public java.lang.Number getTimeInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#time_in_minutes DevTestSchedule#time_in_minutes}.

---

##### `webhookUrl`<sup>Optional</sup> <a name="webhookUrl" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings.property.webhookUrl"></a>

```java
public java.lang.String getWebhookUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#webhook_url DevTestSchedule#webhook_url}.

---

### DevTestScheduleTimeouts <a name="DevTestScheduleTimeouts" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_schedule.DevTestScheduleTimeouts;

DevTestScheduleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#create DevTestSchedule#create}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#delete DevTestSchedule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#read DevTestSchedule#read}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#update DevTestSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#create DevTestSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#delete DevTestSchedule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#read DevTestSchedule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#update DevTestSchedule#update}.

---

### DevTestScheduleWeeklyRecurrence <a name="DevTestScheduleWeeklyRecurrence" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_schedule.DevTestScheduleWeeklyRecurrence;

DevTestScheduleWeeklyRecurrence.builder()
    .time(java.lang.String)
//  .weekDays(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence.property.time">time</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#time DevTestSchedule#time}. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence.property.weekDays">weekDays</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#week_days DevTestSchedule#week_days}. |

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#time DevTestSchedule#time}.

---

##### `weekDays`<sup>Optional</sup> <a name="weekDays" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence.property.weekDays"></a>

```java
public java.util.List<java.lang.String> getWeekDays();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/dev_test_schedule#week_days DevTestSchedule#week_days}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevTestScheduleDailyRecurrenceOutputReference <a name="DevTestScheduleDailyRecurrenceOutputReference" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_schedule.DevTestScheduleDailyRecurrenceOutputReference;

new DevTestScheduleDailyRecurrenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.timeInput">timeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.time">time</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence">DevTestScheduleDailyRecurrence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.timeInput"></a>

```java
public java.lang.String getTimeInput();
```

- *Type:* java.lang.String

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.internalValue"></a>

```java
public DevTestScheduleDailyRecurrence getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence">DevTestScheduleDailyRecurrence</a>

---


### DevTestScheduleHourlyRecurrenceOutputReference <a name="DevTestScheduleHourlyRecurrenceOutputReference" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_schedule.DevTestScheduleHourlyRecurrenceOutputReference;

new DevTestScheduleHourlyRecurrenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.minuteInput">minuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.minute">minute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence">DevTestScheduleHourlyRecurrence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `minuteInput`<sup>Optional</sup> <a name="minuteInput" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.minuteInput"></a>

```java
public java.lang.Number getMinuteInput();
```

- *Type:* java.lang.Number

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.minute"></a>

```java
public java.lang.Number getMinute();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.internalValue"></a>

```java
public DevTestScheduleHourlyRecurrence getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence">DevTestScheduleHourlyRecurrence</a>

---


### DevTestScheduleNotificationSettingsOutputReference <a name="DevTestScheduleNotificationSettingsOutputReference" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_schedule.DevTestScheduleNotificationSettingsOutputReference;

new DevTestScheduleNotificationSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resetTimeInMinutes">resetTimeInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resetWebhookUrl">resetWebhookUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTimeInMinutes` <a name="resetTimeInMinutes" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resetTimeInMinutes"></a>

```java
public void resetTimeInMinutes()
```

##### `resetWebhookUrl` <a name="resetWebhookUrl" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resetWebhookUrl"></a>

```java
public void resetWebhookUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.timeInMinutesInput">timeInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.webhookUrlInput">webhookUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.timeInMinutes">timeInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.webhookUrl">webhookUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings">DevTestScheduleNotificationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `timeInMinutesInput`<sup>Optional</sup> <a name="timeInMinutesInput" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.timeInMinutesInput"></a>

```java
public java.lang.Number getTimeInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `webhookUrlInput`<sup>Optional</sup> <a name="webhookUrlInput" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.webhookUrlInput"></a>

```java
public java.lang.String getWebhookUrlInput();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeInMinutes`<sup>Required</sup> <a name="timeInMinutes" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.timeInMinutes"></a>

```java
public java.lang.Number getTimeInMinutes();
```

- *Type:* java.lang.Number

---

##### `webhookUrl`<sup>Required</sup> <a name="webhookUrl" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.webhookUrl"></a>

```java
public java.lang.String getWebhookUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.internalValue"></a>

```java
public DevTestScheduleNotificationSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings">DevTestScheduleNotificationSettings</a>

---


### DevTestScheduleTimeoutsOutputReference <a name="DevTestScheduleTimeoutsOutputReference" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_schedule.DevTestScheduleTimeoutsOutputReference;

new DevTestScheduleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts">DevTestScheduleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts">DevTestScheduleTimeouts</a>

---


### DevTestScheduleWeeklyRecurrenceOutputReference <a name="DevTestScheduleWeeklyRecurrenceOutputReference" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_schedule.DevTestScheduleWeeklyRecurrenceOutputReference;

new DevTestScheduleWeeklyRecurrenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.resetWeekDays">resetWeekDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWeekDays` <a name="resetWeekDays" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.resetWeekDays"></a>

```java
public void resetWeekDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.timeInput">timeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.weekDaysInput">weekDaysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.time">time</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.weekDays">weekDays</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence">DevTestScheduleWeeklyRecurrence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.timeInput"></a>

```java
public java.lang.String getTimeInput();
```

- *Type:* java.lang.String

---

##### `weekDaysInput`<sup>Optional</sup> <a name="weekDaysInput" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.weekDaysInput"></a>

```java
public java.util.List<java.lang.String> getWeekDaysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

---

##### `weekDays`<sup>Required</sup> <a name="weekDays" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.weekDays"></a>

```java
public java.util.List<java.lang.String> getWeekDays();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.internalValue"></a>

```java
public DevTestScheduleWeeklyRecurrence getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence">DevTestScheduleWeeklyRecurrence</a>

---



