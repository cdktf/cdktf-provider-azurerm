# `netappSnapshotPolicy` Submodule <a name="`netappSnapshotPolicy` Submodule" id="@cdktf/provider-azurerm.netappSnapshotPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappSnapshotPolicy <a name="NetappSnapshotPolicy" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy azurerm_netapp_snapshot_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_snapshot_policy.NetappSnapshotPolicy;

NetappSnapshotPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountName(java.lang.String)
    .enabled(java.lang.Boolean|IResolvable)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .dailySchedule(NetappSnapshotPolicyDailySchedule)
//  .hourlySchedule(NetappSnapshotPolicyHourlySchedule)
//  .id(java.lang.String)
//  .monthlySchedule(NetappSnapshotPolicyMonthlySchedule)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(NetappSnapshotPolicyTimeouts)
//  .weeklySchedule(NetappSnapshotPolicyWeeklySchedule)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#account_name NetappSnapshotPolicy#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#enabled NetappSnapshotPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#location NetappSnapshotPolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#name NetappSnapshotPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#resource_group_name NetappSnapshotPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.dailySchedule">dailySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule">NetappSnapshotPolicyDailySchedule</a></code> | daily_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.hourlySchedule">hourlySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule">NetappSnapshotPolicyHourlySchedule</a></code> | hourly_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#id NetappSnapshotPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.monthlySchedule">monthlySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule">NetappSnapshotPolicyMonthlySchedule</a></code> | monthly_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#tags NetappSnapshotPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts">NetappSnapshotPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule">NetappSnapshotPolicyWeeklySchedule</a></code> | weekly_schedule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.accountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#account_name NetappSnapshotPolicy#account_name}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#enabled NetappSnapshotPolicy#enabled}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#location NetappSnapshotPolicy#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#name NetappSnapshotPolicy#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#resource_group_name NetappSnapshotPolicy#resource_group_name}.

---

##### `dailySchedule`<sup>Optional</sup> <a name="dailySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.dailySchedule"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule">NetappSnapshotPolicyDailySchedule</a>

daily_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#daily_schedule NetappSnapshotPolicy#daily_schedule}

---

##### `hourlySchedule`<sup>Optional</sup> <a name="hourlySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.hourlySchedule"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule">NetappSnapshotPolicyHourlySchedule</a>

hourly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#hourly_schedule NetappSnapshotPolicy#hourly_schedule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#id NetappSnapshotPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monthlySchedule`<sup>Optional</sup> <a name="monthlySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.monthlySchedule"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule">NetappSnapshotPolicyMonthlySchedule</a>

monthly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#monthly_schedule NetappSnapshotPolicy#monthly_schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#tags NetappSnapshotPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts">NetappSnapshotPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#timeouts NetappSnapshotPolicy#timeouts}

---

##### `weeklySchedule`<sup>Optional</sup> <a name="weeklySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.weeklySchedule"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule">NetappSnapshotPolicyWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#weekly_schedule NetappSnapshotPolicy#weekly_schedule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putDailySchedule">putDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putHourlySchedule">putHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putMonthlySchedule">putMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putWeeklySchedule">putWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetDailySchedule">resetDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetHourlySchedule">resetHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetMonthlySchedule">resetMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetWeeklySchedule">resetWeeklySchedule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDailySchedule` <a name="putDailySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putDailySchedule"></a>

```java
public void putDailySchedule(NetappSnapshotPolicyDailySchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putDailySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule">NetappSnapshotPolicyDailySchedule</a>

---

##### `putHourlySchedule` <a name="putHourlySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putHourlySchedule"></a>

```java
public void putHourlySchedule(NetappSnapshotPolicyHourlySchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putHourlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule">NetappSnapshotPolicyHourlySchedule</a>

---

##### `putMonthlySchedule` <a name="putMonthlySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putMonthlySchedule"></a>

```java
public void putMonthlySchedule(NetappSnapshotPolicyMonthlySchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putMonthlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule">NetappSnapshotPolicyMonthlySchedule</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putTimeouts"></a>

```java
public void putTimeouts(NetappSnapshotPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts">NetappSnapshotPolicyTimeouts</a>

---

##### `putWeeklySchedule` <a name="putWeeklySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putWeeklySchedule"></a>

```java
public void putWeeklySchedule(NetappSnapshotPolicyWeeklySchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putWeeklySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule">NetappSnapshotPolicyWeeklySchedule</a>

---

##### `resetDailySchedule` <a name="resetDailySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetDailySchedule"></a>

```java
public void resetDailySchedule()
```

##### `resetHourlySchedule` <a name="resetHourlySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetHourlySchedule"></a>

```java
public void resetHourlySchedule()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetMonthlySchedule` <a name="resetMonthlySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetMonthlySchedule"></a>

```java
public void resetMonthlySchedule()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWeeklySchedule` <a name="resetWeeklySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetWeeklySchedule"></a>

```java
public void resetWeeklySchedule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetappSnapshotPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_snapshot_policy.NetappSnapshotPolicy;

NetappSnapshotPolicy.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_snapshot_policy.NetappSnapshotPolicy;

NetappSnapshotPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_snapshot_policy.NetappSnapshotPolicy;

NetappSnapshotPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_snapshot_policy.NetappSnapshotPolicy;

NetappSnapshotPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetappSnapshotPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetappSnapshotPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetappSnapshotPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetappSnapshotPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetappSnapshotPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.dailySchedule">dailySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference">NetappSnapshotPolicyDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.hourlySchedule">hourlySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference">NetappSnapshotPolicyHourlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.monthlySchedule">monthlySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference">NetappSnapshotPolicyMonthlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference">NetappSnapshotPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference">NetappSnapshotPolicyWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.accountNameInput">accountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.dailyScheduleInput">dailyScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule">NetappSnapshotPolicyDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.hourlyScheduleInput">hourlyScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule">NetappSnapshotPolicyHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.monthlyScheduleInput">monthlyScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule">NetappSnapshotPolicyMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts">NetappSnapshotPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.weeklyScheduleInput">weeklyScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule">NetappSnapshotPolicyWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dailySchedule`<sup>Required</sup> <a name="dailySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.dailySchedule"></a>

```java
public NetappSnapshotPolicyDailyScheduleOutputReference getDailySchedule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference">NetappSnapshotPolicyDailyScheduleOutputReference</a>

---

##### `hourlySchedule`<sup>Required</sup> <a name="hourlySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.hourlySchedule"></a>

```java
public NetappSnapshotPolicyHourlyScheduleOutputReference getHourlySchedule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference">NetappSnapshotPolicyHourlyScheduleOutputReference</a>

---

##### `monthlySchedule`<sup>Required</sup> <a name="monthlySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.monthlySchedule"></a>

```java
public NetappSnapshotPolicyMonthlyScheduleOutputReference getMonthlySchedule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference">NetappSnapshotPolicyMonthlyScheduleOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.timeouts"></a>

```java
public NetappSnapshotPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference">NetappSnapshotPolicyTimeoutsOutputReference</a>

---

##### `weeklySchedule`<sup>Required</sup> <a name="weeklySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.weeklySchedule"></a>

```java
public NetappSnapshotPolicyWeeklyScheduleOutputReference getWeeklySchedule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference">NetappSnapshotPolicyWeeklyScheduleOutputReference</a>

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.accountNameInput"></a>

```java
public java.lang.String getAccountNameInput();
```

- *Type:* java.lang.String

---

##### `dailyScheduleInput`<sup>Optional</sup> <a name="dailyScheduleInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.dailyScheduleInput"></a>

```java
public NetappSnapshotPolicyDailySchedule getDailyScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule">NetappSnapshotPolicyDailySchedule</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `hourlyScheduleInput`<sup>Optional</sup> <a name="hourlyScheduleInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.hourlyScheduleInput"></a>

```java
public NetappSnapshotPolicyHourlySchedule getHourlyScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule">NetappSnapshotPolicyHourlySchedule</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `monthlyScheduleInput`<sup>Optional</sup> <a name="monthlyScheduleInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.monthlyScheduleInput"></a>

```java
public NetappSnapshotPolicyMonthlySchedule getMonthlyScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule">NetappSnapshotPolicyMonthlySchedule</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.timeoutsInput"></a>

```java
public IResolvable|NetappSnapshotPolicyTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts">NetappSnapshotPolicyTimeouts</a>

---

##### `weeklyScheduleInput`<sup>Optional</sup> <a name="weeklyScheduleInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.weeklyScheduleInput"></a>

```java
public NetappSnapshotPolicyWeeklySchedule getWeeklyScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule">NetappSnapshotPolicyWeeklySchedule</a>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetappSnapshotPolicyConfig <a name="NetappSnapshotPolicyConfig" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_snapshot_policy.NetappSnapshotPolicyConfig;

NetappSnapshotPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountName(java.lang.String)
    .enabled(java.lang.Boolean|IResolvable)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .dailySchedule(NetappSnapshotPolicyDailySchedule)
//  .hourlySchedule(NetappSnapshotPolicyHourlySchedule)
//  .id(java.lang.String)
//  .monthlySchedule(NetappSnapshotPolicyMonthlySchedule)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(NetappSnapshotPolicyTimeouts)
//  .weeklySchedule(NetappSnapshotPolicyWeeklySchedule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#account_name NetappSnapshotPolicy#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#enabled NetappSnapshotPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#location NetappSnapshotPolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#name NetappSnapshotPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#resource_group_name NetappSnapshotPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.dailySchedule">dailySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule">NetappSnapshotPolicyDailySchedule</a></code> | daily_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.hourlySchedule">hourlySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule">NetappSnapshotPolicyHourlySchedule</a></code> | hourly_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#id NetappSnapshotPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.monthlySchedule">monthlySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule">NetappSnapshotPolicyMonthlySchedule</a></code> | monthly_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#tags NetappSnapshotPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts">NetappSnapshotPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule">NetappSnapshotPolicyWeeklySchedule</a></code> | weekly_schedule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#account_name NetappSnapshotPolicy#account_name}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#enabled NetappSnapshotPolicy#enabled}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#location NetappSnapshotPolicy#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#name NetappSnapshotPolicy#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#resource_group_name NetappSnapshotPolicy#resource_group_name}.

---

##### `dailySchedule`<sup>Optional</sup> <a name="dailySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.dailySchedule"></a>

```java
public NetappSnapshotPolicyDailySchedule getDailySchedule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule">NetappSnapshotPolicyDailySchedule</a>

daily_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#daily_schedule NetappSnapshotPolicy#daily_schedule}

---

##### `hourlySchedule`<sup>Optional</sup> <a name="hourlySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.hourlySchedule"></a>

```java
public NetappSnapshotPolicyHourlySchedule getHourlySchedule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule">NetappSnapshotPolicyHourlySchedule</a>

hourly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#hourly_schedule NetappSnapshotPolicy#hourly_schedule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#id NetappSnapshotPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monthlySchedule`<sup>Optional</sup> <a name="monthlySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.monthlySchedule"></a>

```java
public NetappSnapshotPolicyMonthlySchedule getMonthlySchedule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule">NetappSnapshotPolicyMonthlySchedule</a>

monthly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#monthly_schedule NetappSnapshotPolicy#monthly_schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#tags NetappSnapshotPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.timeouts"></a>

```java
public NetappSnapshotPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts">NetappSnapshotPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#timeouts NetappSnapshotPolicy#timeouts}

---

##### `weeklySchedule`<sup>Optional</sup> <a name="weeklySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.weeklySchedule"></a>

```java
public NetappSnapshotPolicyWeeklySchedule getWeeklySchedule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule">NetappSnapshotPolicyWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#weekly_schedule NetappSnapshotPolicy#weekly_schedule}

---

### NetappSnapshotPolicyDailySchedule <a name="NetappSnapshotPolicyDailySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_snapshot_policy.NetappSnapshotPolicyDailySchedule;

NetappSnapshotPolicyDailySchedule.builder()
    .hour(java.lang.Number)
    .minute(java.lang.Number)
    .snapshotsToKeep(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule.property.hour">hour</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#hour NetappSnapshotPolicy#hour}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule.property.minute">minute</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}. |

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#hour NetappSnapshotPolicy#hour}.

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule.property.minute"></a>

```java
public java.lang.Number getMinute();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}.

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule.property.snapshotsToKeep"></a>

```java
public java.lang.Number getSnapshotsToKeep();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}.

---

### NetappSnapshotPolicyHourlySchedule <a name="NetappSnapshotPolicyHourlySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_snapshot_policy.NetappSnapshotPolicyHourlySchedule;

NetappSnapshotPolicyHourlySchedule.builder()
    .minute(java.lang.Number)
    .snapshotsToKeep(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule.property.minute">minute</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}. |

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule.property.minute"></a>

```java
public java.lang.Number getMinute();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}.

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule.property.snapshotsToKeep"></a>

```java
public java.lang.Number getSnapshotsToKeep();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}.

---

### NetappSnapshotPolicyMonthlySchedule <a name="NetappSnapshotPolicyMonthlySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_snapshot_policy.NetappSnapshotPolicyMonthlySchedule;

NetappSnapshotPolicyMonthlySchedule.builder()
    .daysOfMonth(java.util.List<java.lang.Number>)
    .hour(java.lang.Number)
    .minute(java.lang.Number)
    .snapshotsToKeep(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.property.daysOfMonth">daysOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#days_of_month NetappSnapshotPolicy#days_of_month}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.property.hour">hour</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#hour NetappSnapshotPolicy#hour}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.property.minute">minute</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}. |

---

##### `daysOfMonth`<sup>Required</sup> <a name="daysOfMonth" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.property.daysOfMonth"></a>

```java
public java.util.List<java.lang.Number> getDaysOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#days_of_month NetappSnapshotPolicy#days_of_month}.

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#hour NetappSnapshotPolicy#hour}.

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.property.minute"></a>

```java
public java.lang.Number getMinute();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}.

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.property.snapshotsToKeep"></a>

```java
public java.lang.Number getSnapshotsToKeep();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}.

---

### NetappSnapshotPolicyTimeouts <a name="NetappSnapshotPolicyTimeouts" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_snapshot_policy.NetappSnapshotPolicyTimeouts;

NetappSnapshotPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#create NetappSnapshotPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#delete NetappSnapshotPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#read NetappSnapshotPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#update NetappSnapshotPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#create NetappSnapshotPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#delete NetappSnapshotPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#read NetappSnapshotPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#update NetappSnapshotPolicy#update}.

---

### NetappSnapshotPolicyWeeklySchedule <a name="NetappSnapshotPolicyWeeklySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_snapshot_policy.NetappSnapshotPolicyWeeklySchedule;

NetappSnapshotPolicyWeeklySchedule.builder()
    .daysOfWeek(java.util.List<java.lang.String>)
    .hour(java.lang.Number)
    .minute(java.lang.Number)
    .snapshotsToKeep(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#days_of_week NetappSnapshotPolicy#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.property.hour">hour</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#hour NetappSnapshotPolicy#hour}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.property.minute">minute</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}. |

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#days_of_week NetappSnapshotPolicy#days_of_week}.

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#hour NetappSnapshotPolicy#hour}.

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.property.minute"></a>

```java
public java.lang.Number getMinute();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}.

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.property.snapshotsToKeep"></a>

```java
public java.lang.Number getSnapshotsToKeep();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappSnapshotPolicyDailyScheduleOutputReference <a name="NetappSnapshotPolicyDailyScheduleOutputReference" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_snapshot_policy.NetappSnapshotPolicyDailyScheduleOutputReference;

new NetappSnapshotPolicyDailyScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.hourInput">hourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.minuteInput">minuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeepInput">snapshotsToKeepInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.hour">hour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.minute">minute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule">NetappSnapshotPolicyDailySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.hourInput"></a>

```java
public java.lang.Number getHourInput();
```

- *Type:* java.lang.Number

---

##### `minuteInput`<sup>Optional</sup> <a name="minuteInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.minuteInput"></a>

```java
public java.lang.Number getMinuteInput();
```

- *Type:* java.lang.Number

---

##### `snapshotsToKeepInput`<sup>Optional</sup> <a name="snapshotsToKeepInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```java
public java.lang.Number getSnapshotsToKeepInput();
```

- *Type:* java.lang.Number

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.minute"></a>

```java
public java.lang.Number getMinute();
```

- *Type:* java.lang.Number

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep"></a>

```java
public java.lang.Number getSnapshotsToKeep();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.internalValue"></a>

```java
public NetappSnapshotPolicyDailySchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule">NetappSnapshotPolicyDailySchedule</a>

---


### NetappSnapshotPolicyHourlyScheduleOutputReference <a name="NetappSnapshotPolicyHourlyScheduleOutputReference" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_snapshot_policy.NetappSnapshotPolicyHourlyScheduleOutputReference;

new NetappSnapshotPolicyHourlyScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.minuteInput">minuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeepInput">snapshotsToKeepInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.minute">minute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule">NetappSnapshotPolicyHourlySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `minuteInput`<sup>Optional</sup> <a name="minuteInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.minuteInput"></a>

```java
public java.lang.Number getMinuteInput();
```

- *Type:* java.lang.Number

---

##### `snapshotsToKeepInput`<sup>Optional</sup> <a name="snapshotsToKeepInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```java
public java.lang.Number getSnapshotsToKeepInput();
```

- *Type:* java.lang.Number

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.minute"></a>

```java
public java.lang.Number getMinute();
```

- *Type:* java.lang.Number

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep"></a>

```java
public java.lang.Number getSnapshotsToKeep();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.internalValue"></a>

```java
public NetappSnapshotPolicyHourlySchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule">NetappSnapshotPolicyHourlySchedule</a>

---


### NetappSnapshotPolicyMonthlyScheduleOutputReference <a name="NetappSnapshotPolicyMonthlyScheduleOutputReference" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_snapshot_policy.NetappSnapshotPolicyMonthlyScheduleOutputReference;

new NetappSnapshotPolicyMonthlyScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonthInput">daysOfMonthInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.hourInput">hourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.minuteInput">minuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeepInput">snapshotsToKeepInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth">daysOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.hour">hour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.minute">minute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule">NetappSnapshotPolicyMonthlySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysOfMonthInput`<sup>Optional</sup> <a name="daysOfMonthInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonthInput"></a>

```java
public java.util.List<java.lang.Number> getDaysOfMonthInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.hourInput"></a>

```java
public java.lang.Number getHourInput();
```

- *Type:* java.lang.Number

---

##### `minuteInput`<sup>Optional</sup> <a name="minuteInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.minuteInput"></a>

```java
public java.lang.Number getMinuteInput();
```

- *Type:* java.lang.Number

---

##### `snapshotsToKeepInput`<sup>Optional</sup> <a name="snapshotsToKeepInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```java
public java.lang.Number getSnapshotsToKeepInput();
```

- *Type:* java.lang.Number

---

##### `daysOfMonth`<sup>Required</sup> <a name="daysOfMonth" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth"></a>

```java
public java.util.List<java.lang.Number> getDaysOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.minute"></a>

```java
public java.lang.Number getMinute();
```

- *Type:* java.lang.Number

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep"></a>

```java
public java.lang.Number getSnapshotsToKeep();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue"></a>

```java
public NetappSnapshotPolicyMonthlySchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule">NetappSnapshotPolicyMonthlySchedule</a>

---


### NetappSnapshotPolicyTimeoutsOutputReference <a name="NetappSnapshotPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_snapshot_policy.NetappSnapshotPolicyTimeoutsOutputReference;

new NetappSnapshotPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts">NetappSnapshotPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetappSnapshotPolicyTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts">NetappSnapshotPolicyTimeouts</a>

---


### NetappSnapshotPolicyWeeklyScheduleOutputReference <a name="NetappSnapshotPolicyWeeklyScheduleOutputReference" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_snapshot_policy.NetappSnapshotPolicyWeeklyScheduleOutputReference;

new NetappSnapshotPolicyWeeklyScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.hourInput">hourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.minuteInput">minuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeepInput">snapshotsToKeepInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.hour">hour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.minute">minute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule">NetappSnapshotPolicyWeeklySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.daysOfWeekInput"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeekInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.hourInput"></a>

```java
public java.lang.Number getHourInput();
```

- *Type:* java.lang.Number

---

##### `minuteInput`<sup>Optional</sup> <a name="minuteInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.minuteInput"></a>

```java
public java.lang.Number getMinuteInput();
```

- *Type:* java.lang.Number

---

##### `snapshotsToKeepInput`<sup>Optional</sup> <a name="snapshotsToKeepInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```java
public java.lang.Number getSnapshotsToKeepInput();
```

- *Type:* java.lang.Number

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.minute"></a>

```java
public java.lang.Number getMinute();
```

- *Type:* java.lang.Number

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep"></a>

```java
public java.lang.Number getSnapshotsToKeep();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue"></a>

```java
public NetappSnapshotPolicyWeeklySchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule">NetappSnapshotPolicyWeeklySchedule</a>

---



