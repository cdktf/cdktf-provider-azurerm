# `mssqlManagedInstanceStartStopSchedule` Submodule <a name="`mssqlManagedInstanceStartStopSchedule` Submodule" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlManagedInstanceStartStopSchedule <a name="MssqlManagedInstanceStartStopSchedule" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule azurerm_mssql_managed_instance_start_stop_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_start_stop_schedule.MssqlManagedInstanceStartStopSchedule;

MssqlManagedInstanceStartStopSchedule.Builder.create(Construct scope, java.lang.String id)
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
    .managedInstanceId(java.lang.String)
    .schedule(IResolvable)
    .schedule(java.util.List<MssqlManagedInstanceStartStopScheduleSchedule>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(MssqlManagedInstanceStartStopScheduleTimeouts)
//  .timezoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#managed_instance_id MssqlManagedInstanceStartStopSchedule#managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.schedule">schedule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule">MssqlManagedInstanceStartStopScheduleSchedule</a>></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#description MssqlManagedInstanceStartStopSchedule#description}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#id MssqlManagedInstanceStartStopSchedule#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts">MssqlManagedInstanceStartStopScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.timezoneId">timezoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#timezone_id MssqlManagedInstanceStartStopSchedule#timezone_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.managedInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#managed_instance_id MssqlManagedInstanceStartStopSchedule#managed_instance_id}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.schedule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule">MssqlManagedInstanceStartStopScheduleSchedule</a>>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#schedule MssqlManagedInstanceStartStopSchedule#schedule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#description MssqlManagedInstanceStartStopSchedule#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#id MssqlManagedInstanceStartStopSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts">MssqlManagedInstanceStartStopScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#timeouts MssqlManagedInstanceStartStopSchedule#timeouts}

---

##### `timezoneId`<sup>Optional</sup> <a name="timezoneId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.timezoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#timezone_id MssqlManagedInstanceStartStopSchedule#timezone_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetTimezoneId">resetTimezoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.putSchedule"></a>

```java
public void putSchedule(IResolvable OR java.util.List<MssqlManagedInstanceStartStopScheduleSchedule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.putSchedule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule">MssqlManagedInstanceStartStopScheduleSchedule</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.putTimeouts"></a>

```java
public void putTimeouts(MssqlManagedInstanceStartStopScheduleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts">MssqlManagedInstanceStartStopScheduleTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimezoneId` <a name="resetTimezoneId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetTimezoneId"></a>

```java
public void resetTimezoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlManagedInstanceStartStopSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_start_stop_schedule.MssqlManagedInstanceStartStopSchedule;

MssqlManagedInstanceStartStopSchedule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_start_stop_schedule.MssqlManagedInstanceStartStopSchedule;

MssqlManagedInstanceStartStopSchedule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_start_stop_schedule.MssqlManagedInstanceStartStopSchedule;

MssqlManagedInstanceStartStopSchedule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_start_stop_schedule.MssqlManagedInstanceStartStopSchedule;

MssqlManagedInstanceStartStopSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MssqlManagedInstanceStartStopSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MssqlManagedInstanceStartStopSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MssqlManagedInstanceStartStopSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MssqlManagedInstanceStartStopSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MssqlManagedInstanceStartStopSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.nextExecutionTime">nextExecutionTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.nextRunAction">nextRunAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList">MssqlManagedInstanceStartStopScheduleScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference">MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.scheduleInput">scheduleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule">MssqlManagedInstanceStartStopScheduleSchedule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts">MssqlManagedInstanceStartStopScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timezoneIdInput">timezoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timezoneId">timezoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `nextExecutionTime`<sup>Required</sup> <a name="nextExecutionTime" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.nextExecutionTime"></a>

```java
public java.lang.String getNextExecutionTime();
```

- *Type:* java.lang.String

---

##### `nextRunAction`<sup>Required</sup> <a name="nextRunAction" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.nextRunAction"></a>

```java
public java.lang.String getNextRunAction();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.schedule"></a>

```java
public MssqlManagedInstanceStartStopScheduleScheduleList getSchedule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList">MssqlManagedInstanceStartStopScheduleScheduleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timeouts"></a>

```java
public MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference">MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.managedInstanceIdInput"></a>

```java
public java.lang.String getManagedInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.scheduleInput"></a>

```java
public java.lang.Object getScheduleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule">MssqlManagedInstanceStartStopScheduleSchedule</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts">MssqlManagedInstanceStartStopScheduleTimeouts</a>

---

##### `timezoneIdInput`<sup>Optional</sup> <a name="timezoneIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timezoneIdInput"></a>

```java
public java.lang.String getTimezoneIdInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.managedInstanceId"></a>

```java
public java.lang.String getManagedInstanceId();
```

- *Type:* java.lang.String

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timezoneId"></a>

```java
public java.lang.String getTimezoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlManagedInstanceStartStopScheduleConfig <a name="MssqlManagedInstanceStartStopScheduleConfig" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_start_stop_schedule.MssqlManagedInstanceStartStopScheduleConfig;

MssqlManagedInstanceStartStopScheduleConfig.builder()
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
    .managedInstanceId(java.lang.String)
    .schedule(IResolvable)
    .schedule(java.util.List<MssqlManagedInstanceStartStopScheduleSchedule>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(MssqlManagedInstanceStartStopScheduleTimeouts)
//  .timezoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#managed_instance_id MssqlManagedInstanceStartStopSchedule#managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.schedule">schedule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule">MssqlManagedInstanceStartStopScheduleSchedule</a>></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#description MssqlManagedInstanceStartStopSchedule#description}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#id MssqlManagedInstanceStartStopSchedule#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts">MssqlManagedInstanceStartStopScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.timezoneId">timezoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#timezone_id MssqlManagedInstanceStartStopSchedule#timezone_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.managedInstanceId"></a>

```java
public java.lang.String getManagedInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#managed_instance_id MssqlManagedInstanceStartStopSchedule#managed_instance_id}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.schedule"></a>

```java
public java.lang.Object getSchedule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule">MssqlManagedInstanceStartStopScheduleSchedule</a>>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#schedule MssqlManagedInstanceStartStopSchedule#schedule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#description MssqlManagedInstanceStartStopSchedule#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#id MssqlManagedInstanceStartStopSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.timeouts"></a>

```java
public MssqlManagedInstanceStartStopScheduleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts">MssqlManagedInstanceStartStopScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#timeouts MssqlManagedInstanceStartStopSchedule#timeouts}

---

##### `timezoneId`<sup>Optional</sup> <a name="timezoneId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.timezoneId"></a>

```java
public java.lang.String getTimezoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#timezone_id MssqlManagedInstanceStartStopSchedule#timezone_id}.

---

### MssqlManagedInstanceStartStopScheduleSchedule <a name="MssqlManagedInstanceStartStopScheduleSchedule" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_start_stop_schedule.MssqlManagedInstanceStartStopScheduleSchedule;

MssqlManagedInstanceStartStopScheduleSchedule.builder()
    .startDay(java.lang.String)
    .startTime(java.lang.String)
    .stopDay(java.lang.String)
    .stopTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.startDay">startDay</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#start_day MssqlManagedInstanceStartStopSchedule#start_day}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#start_time MssqlManagedInstanceStartStopSchedule#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.stopDay">stopDay</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#stop_day MssqlManagedInstanceStartStopSchedule#stop_day}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.stopTime">stopTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#stop_time MssqlManagedInstanceStartStopSchedule#stop_time}. |

---

##### `startDay`<sup>Required</sup> <a name="startDay" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.startDay"></a>

```java
public java.lang.String getStartDay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#start_day MssqlManagedInstanceStartStopSchedule#start_day}.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#start_time MssqlManagedInstanceStartStopSchedule#start_time}.

---

##### `stopDay`<sup>Required</sup> <a name="stopDay" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.stopDay"></a>

```java
public java.lang.String getStopDay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#stop_day MssqlManagedInstanceStartStopSchedule#stop_day}.

---

##### `stopTime`<sup>Required</sup> <a name="stopTime" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.stopTime"></a>

```java
public java.lang.String getStopTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#stop_time MssqlManagedInstanceStartStopSchedule#stop_time}.

---

### MssqlManagedInstanceStartStopScheduleTimeouts <a name="MssqlManagedInstanceStartStopScheduleTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_start_stop_schedule.MssqlManagedInstanceStartStopScheduleTimeouts;

MssqlManagedInstanceStartStopScheduleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#create MssqlManagedInstanceStartStopSchedule#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#delete MssqlManagedInstanceStartStopSchedule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#read MssqlManagedInstanceStartStopSchedule#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#update MssqlManagedInstanceStartStopSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#create MssqlManagedInstanceStartStopSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#delete MssqlManagedInstanceStartStopSchedule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#read MssqlManagedInstanceStartStopSchedule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_managed_instance_start_stop_schedule#update MssqlManagedInstanceStartStopSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlManagedInstanceStartStopScheduleScheduleList <a name="MssqlManagedInstanceStartStopScheduleScheduleList" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_start_stop_schedule.MssqlManagedInstanceStartStopScheduleScheduleList;

new MssqlManagedInstanceStartStopScheduleScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.get"></a>

```java
public MssqlManagedInstanceStartStopScheduleScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule">MssqlManagedInstanceStartStopScheduleSchedule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule">MssqlManagedInstanceStartStopScheduleSchedule</a>>

---


### MssqlManagedInstanceStartStopScheduleScheduleOutputReference <a name="MssqlManagedInstanceStartStopScheduleScheduleOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_start_stop_schedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference;

new MssqlManagedInstanceStartStopScheduleScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startDayInput">startDayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopDayInput">stopDayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopTimeInput">stopTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startDay">startDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopDay">stopDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopTime">stopTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule">MssqlManagedInstanceStartStopScheduleSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `startDayInput`<sup>Optional</sup> <a name="startDayInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startDayInput"></a>

```java
public java.lang.String getStartDayInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `stopDayInput`<sup>Optional</sup> <a name="stopDayInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopDayInput"></a>

```java
public java.lang.String getStopDayInput();
```

- *Type:* java.lang.String

---

##### `stopTimeInput`<sup>Optional</sup> <a name="stopTimeInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopTimeInput"></a>

```java
public java.lang.String getStopTimeInput();
```

- *Type:* java.lang.String

---

##### `startDay`<sup>Required</sup> <a name="startDay" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startDay"></a>

```java
public java.lang.String getStartDay();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `stopDay`<sup>Required</sup> <a name="stopDay" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopDay"></a>

```java
public java.lang.String getStopDay();
```

- *Type:* java.lang.String

---

##### `stopTime`<sup>Required</sup> <a name="stopTime" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopTime"></a>

```java
public java.lang.String getStopTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule">MssqlManagedInstanceStartStopScheduleSchedule</a>

---


### MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference <a name="MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_start_stop_schedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference;

new MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts">MssqlManagedInstanceStartStopScheduleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts">MssqlManagedInstanceStartStopScheduleTimeouts</a>

---



