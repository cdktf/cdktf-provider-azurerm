# `monitorActivityLogAlert` Submodule <a name="`monitorActivityLogAlert` Submodule" id="@cdktf/provider-azurerm.monitorActivityLogAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorActivityLogAlert <a name="MonitorActivityLogAlert" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert azurerm_monitor_activity_log_alert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_activity_log_alert.MonitorActivityLogAlert;

MonitorActivityLogAlert.Builder.create(Construct scope, java.lang.String id)
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
    .criteria(MonitorActivityLogAlertCriteria)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .scopes(java.util.List<java.lang.String>)
//  .action(IResolvable)
//  .action(java.util.List<MonitorActivityLogAlertAction>)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MonitorActivityLogAlertTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria">MonitorActivityLogAlertCriteria</a></code> | criteria block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#name MonitorActivityLogAlert#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#resource_group_name MonitorActivityLogAlert#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#scopes MonitorActivityLogAlert#scopes}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.action">action</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertAction">MonitorActivityLogAlertAction</a>></code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#description MonitorActivityLogAlert#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#enabled MonitorActivityLogAlert#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#id MonitorActivityLogAlert#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#location MonitorActivityLogAlert#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#tags MonitorActivityLogAlert#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts">MonitorActivityLogAlertTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.criteria"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria">MonitorActivityLogAlertCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#criteria MonitorActivityLogAlert#criteria}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#name MonitorActivityLogAlert#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#resource_group_name MonitorActivityLogAlert#resource_group_name}.

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.scopes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#scopes MonitorActivityLogAlert#scopes}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.action"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertAction">MonitorActivityLogAlertAction</a>>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#action MonitorActivityLogAlert#action}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#description MonitorActivityLogAlert#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#enabled MonitorActivityLogAlert#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#id MonitorActivityLogAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#location MonitorActivityLogAlert#location}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#tags MonitorActivityLogAlert#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts">MonitorActivityLogAlertTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#timeouts MonitorActivityLogAlert#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.putCriteria">putCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.putAction"></a>

```java
public void putAction(IResolvable OR java.util.List<MonitorActivityLogAlertAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.putAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertAction">MonitorActivityLogAlertAction</a>>

---

##### `putCriteria` <a name="putCriteria" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.putCriteria"></a>

```java
public void putCriteria(MonitorActivityLogAlertCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria">MonitorActivityLogAlertCriteria</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.putTimeouts"></a>

```java
public void putTimeouts(MonitorActivityLogAlertTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts">MonitorActivityLogAlertTimeouts</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetAction"></a>

```java
public void resetAction()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorActivityLogAlert resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_activity_log_alert.MonitorActivityLogAlert;

MonitorActivityLogAlert.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_activity_log_alert.MonitorActivityLogAlert;

MonitorActivityLogAlert.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_activity_log_alert.MonitorActivityLogAlert;

MonitorActivityLogAlert.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_activity_log_alert.MonitorActivityLogAlert;

MonitorActivityLogAlert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MonitorActivityLogAlert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MonitorActivityLogAlert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MonitorActivityLogAlert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MonitorActivityLogAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MonitorActivityLogAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.action">action</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList">MonitorActivityLogAlertActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference">MonitorActivityLogAlertCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference">MonitorActivityLogAlertTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.actionInput">actionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertAction">MonitorActivityLogAlertAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.criteriaInput">criteriaInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria">MonitorActivityLogAlertCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts">MonitorActivityLogAlertTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.action"></a>

```java
public MonitorActivityLogAlertActionList getAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList">MonitorActivityLogAlertActionList</a>

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.criteria"></a>

```java
public MonitorActivityLogAlertCriteriaOutputReference getCriteria();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference">MonitorActivityLogAlertCriteriaOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.timeouts"></a>

```java
public MonitorActivityLogAlertTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference">MonitorActivityLogAlertTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.actionInput"></a>

```java
public java.lang.Object getActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertAction">MonitorActivityLogAlertAction</a>>

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.criteriaInput"></a>

```java
public MonitorActivityLogAlertCriteria getCriteriaInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria">MonitorActivityLogAlertCriteria</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts">MonitorActivityLogAlertTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlert.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorActivityLogAlertAction <a name="MonitorActivityLogAlertAction" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_activity_log_alert.MonitorActivityLogAlertAction;

MonitorActivityLogAlertAction.builder()
    .actionGroupId(java.lang.String)
//  .webhookProperties(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertAction.property.actionGroupId">actionGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#action_group_id MonitorActivityLogAlert#action_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertAction.property.webhookProperties">webhookProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#webhook_properties MonitorActivityLogAlert#webhook_properties}. |

---

##### `actionGroupId`<sup>Required</sup> <a name="actionGroupId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertAction.property.actionGroupId"></a>

```java
public java.lang.String getActionGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#action_group_id MonitorActivityLogAlert#action_group_id}.

---

##### `webhookProperties`<sup>Optional</sup> <a name="webhookProperties" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertAction.property.webhookProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getWebhookProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#webhook_properties MonitorActivityLogAlert#webhook_properties}.

---

### MonitorActivityLogAlertConfig <a name="MonitorActivityLogAlertConfig" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_activity_log_alert.MonitorActivityLogAlertConfig;

MonitorActivityLogAlertConfig.builder()
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
    .criteria(MonitorActivityLogAlertCriteria)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .scopes(java.util.List<java.lang.String>)
//  .action(IResolvable)
//  .action(java.util.List<MonitorActivityLogAlertAction>)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MonitorActivityLogAlertTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria">MonitorActivityLogAlertCriteria</a></code> | criteria block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#name MonitorActivityLogAlert#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#resource_group_name MonitorActivityLogAlert#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#scopes MonitorActivityLogAlert#scopes}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.action">action</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertAction">MonitorActivityLogAlertAction</a>></code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#description MonitorActivityLogAlert#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#enabled MonitorActivityLogAlert#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#id MonitorActivityLogAlert#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#location MonitorActivityLogAlert#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#tags MonitorActivityLogAlert#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts">MonitorActivityLogAlertTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.criteria"></a>

```java
public MonitorActivityLogAlertCriteria getCriteria();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria">MonitorActivityLogAlertCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#criteria MonitorActivityLogAlert#criteria}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#name MonitorActivityLogAlert#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#resource_group_name MonitorActivityLogAlert#resource_group_name}.

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#scopes MonitorActivityLogAlert#scopes}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.action"></a>

```java
public java.lang.Object getAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertAction">MonitorActivityLogAlertAction</a>>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#action MonitorActivityLogAlert#action}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#description MonitorActivityLogAlert#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#enabled MonitorActivityLogAlert#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#id MonitorActivityLogAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#location MonitorActivityLogAlert#location}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#tags MonitorActivityLogAlert#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertConfig.property.timeouts"></a>

```java
public MonitorActivityLogAlertTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts">MonitorActivityLogAlertTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#timeouts MonitorActivityLogAlert#timeouts}

---

### MonitorActivityLogAlertCriteria <a name="MonitorActivityLogAlertCriteria" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_activity_log_alert.MonitorActivityLogAlertCriteria;

MonitorActivityLogAlertCriteria.builder()
    .category(java.lang.String)
//  .caller(java.lang.String)
//  .level(java.lang.String)
//  .levels(java.util.List<java.lang.String>)
//  .operationName(java.lang.String)
//  .recommendationCategory(java.lang.String)
//  .recommendationImpact(java.lang.String)
//  .recommendationType(java.lang.String)
//  .resourceGroup(java.lang.String)
//  .resourceGroups(java.util.List<java.lang.String>)
//  .resourceHealth(MonitorActivityLogAlertCriteriaResourceHealth)
//  .resourceId(java.lang.String)
//  .resourceIds(java.util.List<java.lang.String>)
//  .resourceProvider(java.lang.String)
//  .resourceProviders(java.util.List<java.lang.String>)
//  .resourceType(java.lang.String)
//  .resourceTypes(java.util.List<java.lang.String>)
//  .serviceHealth(MonitorActivityLogAlertCriteriaServiceHealth)
//  .status(java.lang.String)
//  .statuses(java.util.List<java.lang.String>)
//  .subStatus(java.lang.String)
//  .subStatuses(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.category">category</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#category MonitorActivityLogAlert#category}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.caller">caller</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#caller MonitorActivityLogAlert#caller}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.level">level</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#level MonitorActivityLogAlert#level}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.levels">levels</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#levels MonitorActivityLogAlert#levels}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.operationName">operationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#operation_name MonitorActivityLogAlert#operation_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.recommendationCategory">recommendationCategory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#recommendation_category MonitorActivityLogAlert#recommendation_category}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.recommendationImpact">recommendationImpact</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#recommendation_impact MonitorActivityLogAlert#recommendation_impact}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.recommendationType">recommendationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#recommendation_type MonitorActivityLogAlert#recommendation_type}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceGroup">resourceGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#resource_group MonitorActivityLogAlert#resource_group}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceGroups">resourceGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#resource_groups MonitorActivityLogAlert#resource_groups}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceHealth">resourceHealth</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth">MonitorActivityLogAlertCriteriaResourceHealth</a></code> | resource_health block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#resource_id MonitorActivityLogAlert#resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceIds">resourceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#resource_ids MonitorActivityLogAlert#resource_ids}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceProvider">resourceProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#resource_provider MonitorActivityLogAlert#resource_provider}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceProviders">resourceProviders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#resource_providers MonitorActivityLogAlert#resource_providers}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#resource_type MonitorActivityLogAlert#resource_type}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#resource_types MonitorActivityLogAlert#resource_types}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.serviceHealth">serviceHealth</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth">MonitorActivityLogAlertCriteriaServiceHealth</a></code> | service_health block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#status MonitorActivityLogAlert#status}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.statuses">statuses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#statuses MonitorActivityLogAlert#statuses}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.subStatus">subStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#sub_status MonitorActivityLogAlert#sub_status}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.subStatuses">subStatuses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#sub_statuses MonitorActivityLogAlert#sub_statuses}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#category MonitorActivityLogAlert#category}.

---

##### `caller`<sup>Optional</sup> <a name="caller" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.caller"></a>

```java
public java.lang.String getCaller();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#caller MonitorActivityLogAlert#caller}.

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#level MonitorActivityLogAlert#level}.

---

##### `levels`<sup>Optional</sup> <a name="levels" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.levels"></a>

```java
public java.util.List<java.lang.String> getLevels();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#levels MonitorActivityLogAlert#levels}.

---

##### `operationName`<sup>Optional</sup> <a name="operationName" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.operationName"></a>

```java
public java.lang.String getOperationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#operation_name MonitorActivityLogAlert#operation_name}.

---

##### `recommendationCategory`<sup>Optional</sup> <a name="recommendationCategory" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.recommendationCategory"></a>

```java
public java.lang.String getRecommendationCategory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#recommendation_category MonitorActivityLogAlert#recommendation_category}.

---

##### `recommendationImpact`<sup>Optional</sup> <a name="recommendationImpact" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.recommendationImpact"></a>

```java
public java.lang.String getRecommendationImpact();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#recommendation_impact MonitorActivityLogAlert#recommendation_impact}.

---

##### `recommendationType`<sup>Optional</sup> <a name="recommendationType" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.recommendationType"></a>

```java
public java.lang.String getRecommendationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#recommendation_type MonitorActivityLogAlert#recommendation_type}.

---

##### `resourceGroup`<sup>Optional</sup> <a name="resourceGroup" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceGroup"></a>

```java
public java.lang.String getResourceGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#resource_group MonitorActivityLogAlert#resource_group}.

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceGroups"></a>

```java
public java.util.List<java.lang.String> getResourceGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#resource_groups MonitorActivityLogAlert#resource_groups}.

---

##### `resourceHealth`<sup>Optional</sup> <a name="resourceHealth" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceHealth"></a>

```java
public MonitorActivityLogAlertCriteriaResourceHealth getResourceHealth();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth">MonitorActivityLogAlertCriteriaResourceHealth</a>

resource_health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#resource_health MonitorActivityLogAlert#resource_health}

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#resource_id MonitorActivityLogAlert#resource_id}.

---

##### `resourceIds`<sup>Optional</sup> <a name="resourceIds" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceIds"></a>

```java
public java.util.List<java.lang.String> getResourceIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#resource_ids MonitorActivityLogAlert#resource_ids}.

---

##### `resourceProvider`<sup>Optional</sup> <a name="resourceProvider" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceProvider"></a>

```java
public java.lang.String getResourceProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#resource_provider MonitorActivityLogAlert#resource_provider}.

---

##### `resourceProviders`<sup>Optional</sup> <a name="resourceProviders" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceProviders"></a>

```java
public java.util.List<java.lang.String> getResourceProviders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#resource_providers MonitorActivityLogAlert#resource_providers}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#resource_type MonitorActivityLogAlert#resource_type}.

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#resource_types MonitorActivityLogAlert#resource_types}.

---

##### `serviceHealth`<sup>Optional</sup> <a name="serviceHealth" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.serviceHealth"></a>

```java
public MonitorActivityLogAlertCriteriaServiceHealth getServiceHealth();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth">MonitorActivityLogAlertCriteriaServiceHealth</a>

service_health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#service_health MonitorActivityLogAlert#service_health}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#status MonitorActivityLogAlert#status}.

---

##### `statuses`<sup>Optional</sup> <a name="statuses" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.statuses"></a>

```java
public java.util.List<java.lang.String> getStatuses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#statuses MonitorActivityLogAlert#statuses}.

---

##### `subStatus`<sup>Optional</sup> <a name="subStatus" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.subStatus"></a>

```java
public java.lang.String getSubStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#sub_status MonitorActivityLogAlert#sub_status}.

---

##### `subStatuses`<sup>Optional</sup> <a name="subStatuses" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria.property.subStatuses"></a>

```java
public java.util.List<java.lang.String> getSubStatuses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#sub_statuses MonitorActivityLogAlert#sub_statuses}.

---

### MonitorActivityLogAlertCriteriaResourceHealth <a name="MonitorActivityLogAlertCriteriaResourceHealth" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_activity_log_alert.MonitorActivityLogAlertCriteriaResourceHealth;

MonitorActivityLogAlertCriteriaResourceHealth.builder()
//  .current(java.util.List<java.lang.String>)
//  .previous(java.util.List<java.lang.String>)
//  .reason(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth.property.current">current</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#current MonitorActivityLogAlert#current}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth.property.previous">previous</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#previous MonitorActivityLogAlert#previous}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth.property.reason">reason</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#reason MonitorActivityLogAlert#reason}. |

---

##### `current`<sup>Optional</sup> <a name="current" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth.property.current"></a>

```java
public java.util.List<java.lang.String> getCurrent();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#current MonitorActivityLogAlert#current}.

---

##### `previous`<sup>Optional</sup> <a name="previous" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth.property.previous"></a>

```java
public java.util.List<java.lang.String> getPrevious();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#previous MonitorActivityLogAlert#previous}.

---

##### `reason`<sup>Optional</sup> <a name="reason" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth.property.reason"></a>

```java
public java.util.List<java.lang.String> getReason();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#reason MonitorActivityLogAlert#reason}.

---

### MonitorActivityLogAlertCriteriaServiceHealth <a name="MonitorActivityLogAlertCriteriaServiceHealth" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_activity_log_alert.MonitorActivityLogAlertCriteriaServiceHealth;

MonitorActivityLogAlertCriteriaServiceHealth.builder()
//  .events(java.util.List<java.lang.String>)
//  .locations(java.util.List<java.lang.String>)
//  .services(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#events MonitorActivityLogAlert#events}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#locations MonitorActivityLogAlert#locations}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth.property.services">services</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#services MonitorActivityLogAlert#services}. |

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#events MonitorActivityLogAlert#events}.

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#locations MonitorActivityLogAlert#locations}.

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth.property.services"></a>

```java
public java.util.List<java.lang.String> getServices();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#services MonitorActivityLogAlert#services}.

---

### MonitorActivityLogAlertTimeouts <a name="MonitorActivityLogAlertTimeouts" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_activity_log_alert.MonitorActivityLogAlertTimeouts;

MonitorActivityLogAlertTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#create MonitorActivityLogAlert#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#delete MonitorActivityLogAlert#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#read MonitorActivityLogAlert#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#update MonitorActivityLogAlert#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#create MonitorActivityLogAlert#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#delete MonitorActivityLogAlert#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#read MonitorActivityLogAlert#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/monitor_activity_log_alert#update MonitorActivityLogAlert#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorActivityLogAlertActionList <a name="MonitorActivityLogAlertActionList" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_activity_log_alert.MonitorActivityLogAlertActionList;

new MonitorActivityLogAlertActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.get"></a>

```java
public MonitorActivityLogAlertActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertAction">MonitorActivityLogAlertAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertAction">MonitorActivityLogAlertAction</a>>

---


### MonitorActivityLogAlertActionOutputReference <a name="MonitorActivityLogAlertActionOutputReference" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_activity_log_alert.MonitorActivityLogAlertActionOutputReference;

new MonitorActivityLogAlertActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.resetWebhookProperties">resetWebhookProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWebhookProperties` <a name="resetWebhookProperties" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.resetWebhookProperties"></a>

```java
public void resetWebhookProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.actionGroupIdInput">actionGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.webhookPropertiesInput">webhookPropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.actionGroupId">actionGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.webhookProperties">webhookProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertAction">MonitorActivityLogAlertAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionGroupIdInput`<sup>Optional</sup> <a name="actionGroupIdInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.actionGroupIdInput"></a>

```java
public java.lang.String getActionGroupIdInput();
```

- *Type:* java.lang.String

---

##### `webhookPropertiesInput`<sup>Optional</sup> <a name="webhookPropertiesInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.webhookPropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getWebhookPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `actionGroupId`<sup>Required</sup> <a name="actionGroupId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.actionGroupId"></a>

```java
public java.lang.String getActionGroupId();
```

- *Type:* java.lang.String

---

##### `webhookProperties`<sup>Required</sup> <a name="webhookProperties" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.webhookProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getWebhookProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertAction">MonitorActivityLogAlertAction</a>

---


### MonitorActivityLogAlertCriteriaOutputReference <a name="MonitorActivityLogAlertCriteriaOutputReference" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_activity_log_alert.MonitorActivityLogAlertCriteriaOutputReference;

new MonitorActivityLogAlertCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.putResourceHealth">putResourceHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.putServiceHealth">putServiceHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetCaller">resetCaller</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetLevel">resetLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetLevels">resetLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetOperationName">resetOperationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetRecommendationCategory">resetRecommendationCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetRecommendationImpact">resetRecommendationImpact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetRecommendationType">resetRecommendationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceGroup">resetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceHealth">resetResourceHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceIds">resetResourceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceProvider">resetResourceProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceProviders">resetResourceProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetServiceHealth">resetServiceHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetStatuses">resetStatuses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetSubStatus">resetSubStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetSubStatuses">resetSubStatuses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResourceHealth` <a name="putResourceHealth" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.putResourceHealth"></a>

```java
public void putResourceHealth(MonitorActivityLogAlertCriteriaResourceHealth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.putResourceHealth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth">MonitorActivityLogAlertCriteriaResourceHealth</a>

---

##### `putServiceHealth` <a name="putServiceHealth" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.putServiceHealth"></a>

```java
public void putServiceHealth(MonitorActivityLogAlertCriteriaServiceHealth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.putServiceHealth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth">MonitorActivityLogAlertCriteriaServiceHealth</a>

---

##### `resetCaller` <a name="resetCaller" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetCaller"></a>

```java
public void resetCaller()
```

##### `resetLevel` <a name="resetLevel" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetLevel"></a>

```java
public void resetLevel()
```

##### `resetLevels` <a name="resetLevels" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetLevels"></a>

```java
public void resetLevels()
```

##### `resetOperationName` <a name="resetOperationName" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetOperationName"></a>

```java
public void resetOperationName()
```

##### `resetRecommendationCategory` <a name="resetRecommendationCategory" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetRecommendationCategory"></a>

```java
public void resetRecommendationCategory()
```

##### `resetRecommendationImpact` <a name="resetRecommendationImpact" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetRecommendationImpact"></a>

```java
public void resetRecommendationImpact()
```

##### `resetRecommendationType` <a name="resetRecommendationType" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetRecommendationType"></a>

```java
public void resetRecommendationType()
```

##### `resetResourceGroup` <a name="resetResourceGroup" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceGroup"></a>

```java
public void resetResourceGroup()
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceGroups"></a>

```java
public void resetResourceGroups()
```

##### `resetResourceHealth` <a name="resetResourceHealth" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceHealth"></a>

```java
public void resetResourceHealth()
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceId"></a>

```java
public void resetResourceId()
```

##### `resetResourceIds` <a name="resetResourceIds" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceIds"></a>

```java
public void resetResourceIds()
```

##### `resetResourceProvider` <a name="resetResourceProvider" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceProvider"></a>

```java
public void resetResourceProvider()
```

##### `resetResourceProviders` <a name="resetResourceProviders" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceProviders"></a>

```java
public void resetResourceProviders()
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceType"></a>

```java
public void resetResourceType()
```

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetResourceTypes"></a>

```java
public void resetResourceTypes()
```

##### `resetServiceHealth` <a name="resetServiceHealth" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetServiceHealth"></a>

```java
public void resetServiceHealth()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetStatuses` <a name="resetStatuses" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetStatuses"></a>

```java
public void resetStatuses()
```

##### `resetSubStatus` <a name="resetSubStatus" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetSubStatus"></a>

```java
public void resetSubStatus()
```

##### `resetSubStatuses` <a name="resetSubStatuses" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.resetSubStatuses"></a>

```java
public void resetSubStatuses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceHealth">resourceHealth</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference">MonitorActivityLogAlertCriteriaResourceHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.serviceHealth">serviceHealth</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference">MonitorActivityLogAlertCriteriaServiceHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.callerInput">callerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.levelInput">levelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.levelsInput">levelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.operationNameInput">operationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.recommendationCategoryInput">recommendationCategoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.recommendationImpactInput">recommendationImpactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.recommendationTypeInput">recommendationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceGroupInput">resourceGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceHealthInput">resourceHealthInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth">MonitorActivityLogAlertCriteriaResourceHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceIdsInput">resourceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceProviderInput">resourceProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceProvidersInput">resourceProvidersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.serviceHealthInput">serviceHealthInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth">MonitorActivityLogAlertCriteriaServiceHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.statusesInput">statusesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.subStatusesInput">subStatusesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.subStatusInput">subStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.caller">caller</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.levels">levels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.operationName">operationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.recommendationCategory">recommendationCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.recommendationImpact">recommendationImpact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.recommendationType">recommendationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceGroup">resourceGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceIds">resourceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceProvider">resourceProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceProviders">resourceProviders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.statuses">statuses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.subStatus">subStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.subStatuses">subStatuses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria">MonitorActivityLogAlertCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceHealth`<sup>Required</sup> <a name="resourceHealth" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceHealth"></a>

```java
public MonitorActivityLogAlertCriteriaResourceHealthOutputReference getResourceHealth();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference">MonitorActivityLogAlertCriteriaResourceHealthOutputReference</a>

---

##### `serviceHealth`<sup>Required</sup> <a name="serviceHealth" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.serviceHealth"></a>

```java
public MonitorActivityLogAlertCriteriaServiceHealthOutputReference getServiceHealth();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference">MonitorActivityLogAlertCriteriaServiceHealthOutputReference</a>

---

##### `callerInput`<sup>Optional</sup> <a name="callerInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.callerInput"></a>

```java
public java.lang.String getCallerInput();
```

- *Type:* java.lang.String

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.levelInput"></a>

```java
public java.lang.String getLevelInput();
```

- *Type:* java.lang.String

---

##### `levelsInput`<sup>Optional</sup> <a name="levelsInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.levelsInput"></a>

```java
public java.util.List<java.lang.String> getLevelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operationNameInput`<sup>Optional</sup> <a name="operationNameInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.operationNameInput"></a>

```java
public java.lang.String getOperationNameInput();
```

- *Type:* java.lang.String

---

##### `recommendationCategoryInput`<sup>Optional</sup> <a name="recommendationCategoryInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.recommendationCategoryInput"></a>

```java
public java.lang.String getRecommendationCategoryInput();
```

- *Type:* java.lang.String

---

##### `recommendationImpactInput`<sup>Optional</sup> <a name="recommendationImpactInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.recommendationImpactInput"></a>

```java
public java.lang.String getRecommendationImpactInput();
```

- *Type:* java.lang.String

---

##### `recommendationTypeInput`<sup>Optional</sup> <a name="recommendationTypeInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.recommendationTypeInput"></a>

```java
public java.lang.String getRecommendationTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupInput`<sup>Optional</sup> <a name="resourceGroupInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceGroupInput"></a>

```java
public java.lang.String getResourceGroupInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceGroupsInput"></a>

```java
public java.util.List<java.lang.String> getResourceGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceHealthInput`<sup>Optional</sup> <a name="resourceHealthInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceHealthInput"></a>

```java
public MonitorActivityLogAlertCriteriaResourceHealth getResourceHealthInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth">MonitorActivityLogAlertCriteriaResourceHealth</a>

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `resourceIdsInput`<sup>Optional</sup> <a name="resourceIdsInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceIdsInput"></a>

```java
public java.util.List<java.lang.String> getResourceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceProviderInput`<sup>Optional</sup> <a name="resourceProviderInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceProviderInput"></a>

```java
public java.lang.String getResourceProviderInput();
```

- *Type:* java.lang.String

---

##### `resourceProvidersInput`<sup>Optional</sup> <a name="resourceProvidersInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceProvidersInput"></a>

```java
public java.util.List<java.lang.String> getResourceProvidersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceHealthInput`<sup>Optional</sup> <a name="serviceHealthInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.serviceHealthInput"></a>

```java
public MonitorActivityLogAlertCriteriaServiceHealth getServiceHealthInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth">MonitorActivityLogAlertCriteriaServiceHealth</a>

---

##### `statusesInput`<sup>Optional</sup> <a name="statusesInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.statusesInput"></a>

```java
public java.util.List<java.lang.String> getStatusesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `subStatusesInput`<sup>Optional</sup> <a name="subStatusesInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.subStatusesInput"></a>

```java
public java.util.List<java.lang.String> getSubStatusesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subStatusInput`<sup>Optional</sup> <a name="subStatusInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.subStatusInput"></a>

```java
public java.lang.String getSubStatusInput();
```

- *Type:* java.lang.String

---

##### `caller`<sup>Required</sup> <a name="caller" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.caller"></a>

```java
public java.lang.String getCaller();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `levels`<sup>Required</sup> <a name="levels" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.levels"></a>

```java
public java.util.List<java.lang.String> getLevels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operationName`<sup>Required</sup> <a name="operationName" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.operationName"></a>

```java
public java.lang.String getOperationName();
```

- *Type:* java.lang.String

---

##### `recommendationCategory`<sup>Required</sup> <a name="recommendationCategory" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.recommendationCategory"></a>

```java
public java.lang.String getRecommendationCategory();
```

- *Type:* java.lang.String

---

##### `recommendationImpact`<sup>Required</sup> <a name="recommendationImpact" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.recommendationImpact"></a>

```java
public java.lang.String getRecommendationImpact();
```

- *Type:* java.lang.String

---

##### `recommendationType`<sup>Required</sup> <a name="recommendationType" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.recommendationType"></a>

```java
public java.lang.String getRecommendationType();
```

- *Type:* java.lang.String

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceGroup"></a>

```java
public java.lang.String getResourceGroup();
```

- *Type:* java.lang.String

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceGroups"></a>

```java
public java.util.List<java.lang.String> getResourceGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceIds"></a>

```java
public java.util.List<java.lang.String> getResourceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceProvider`<sup>Required</sup> <a name="resourceProvider" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceProvider"></a>

```java
public java.lang.String getResourceProvider();
```

- *Type:* java.lang.String

---

##### `resourceProviders`<sup>Required</sup> <a name="resourceProviders" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceProviders"></a>

```java
public java.util.List<java.lang.String> getResourceProviders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statuses`<sup>Required</sup> <a name="statuses" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.statuses"></a>

```java
public java.util.List<java.lang.String> getStatuses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subStatus`<sup>Required</sup> <a name="subStatus" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.subStatus"></a>

```java
public java.lang.String getSubStatus();
```

- *Type:* java.lang.String

---

##### `subStatuses`<sup>Required</sup> <a name="subStatuses" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.subStatuses"></a>

```java
public java.util.List<java.lang.String> getSubStatuses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaOutputReference.property.internalValue"></a>

```java
public MonitorActivityLogAlertCriteria getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteria">MonitorActivityLogAlertCriteria</a>

---


### MonitorActivityLogAlertCriteriaResourceHealthOutputReference <a name="MonitorActivityLogAlertCriteriaResourceHealthOutputReference" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_activity_log_alert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference;

new MonitorActivityLogAlertCriteriaResourceHealthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.resetCurrent">resetCurrent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.resetPrevious">resetPrevious</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.resetReason">resetReason</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCurrent` <a name="resetCurrent" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.resetCurrent"></a>

```java
public void resetCurrent()
```

##### `resetPrevious` <a name="resetPrevious" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.resetPrevious"></a>

```java
public void resetPrevious()
```

##### `resetReason` <a name="resetReason" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.resetReason"></a>

```java
public void resetReason()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.currentInput">currentInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.previousInput">previousInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.reasonInput">reasonInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.current">current</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.previous">previous</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.reason">reason</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth">MonitorActivityLogAlertCriteriaResourceHealth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currentInput`<sup>Optional</sup> <a name="currentInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.currentInput"></a>

```java
public java.util.List<java.lang.String> getCurrentInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `previousInput`<sup>Optional</sup> <a name="previousInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.previousInput"></a>

```java
public java.util.List<java.lang.String> getPreviousInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `reasonInput`<sup>Optional</sup> <a name="reasonInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.reasonInput"></a>

```java
public java.util.List<java.lang.String> getReasonInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `current`<sup>Required</sup> <a name="current" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.current"></a>

```java
public java.util.List<java.lang.String> getCurrent();
```

- *Type:* java.util.List<java.lang.String>

---

##### `previous`<sup>Required</sup> <a name="previous" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.previous"></a>

```java
public java.util.List<java.lang.String> getPrevious();
```

- *Type:* java.util.List<java.lang.String>

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.reason"></a>

```java
public java.util.List<java.lang.String> getReason();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealthOutputReference.property.internalValue"></a>

```java
public MonitorActivityLogAlertCriteriaResourceHealth getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaResourceHealth">MonitorActivityLogAlertCriteriaResourceHealth</a>

---


### MonitorActivityLogAlertCriteriaServiceHealthOutputReference <a name="MonitorActivityLogAlertCriteriaServiceHealthOutputReference" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_activity_log_alert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference;

new MonitorActivityLogAlertCriteriaServiceHealthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.resetEvents">resetEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.resetLocations">resetLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.resetServices">resetServices</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvents` <a name="resetEvents" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.resetEvents"></a>

```java
public void resetEvents()
```

##### `resetLocations` <a name="resetLocations" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.resetLocations"></a>

```java
public void resetLocations()
```

##### `resetServices` <a name="resetServices" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.resetServices"></a>

```java
public void resetServices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.eventsInput">eventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.locationsInput">locationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.servicesInput">servicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.services">services</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth">MonitorActivityLogAlertCriteriaServiceHealth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.eventsInput"></a>

```java
public java.util.List<java.lang.String> getEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.locationsInput"></a>

```java
public java.util.List<java.lang.String> getLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `servicesInput`<sup>Optional</sup> <a name="servicesInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.servicesInput"></a>

```java
public java.util.List<java.lang.String> getServicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.services"></a>

```java
public java.util.List<java.lang.String> getServices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealthOutputReference.property.internalValue"></a>

```java
public MonitorActivityLogAlertCriteriaServiceHealth getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertCriteriaServiceHealth">MonitorActivityLogAlertCriteriaServiceHealth</a>

---


### MonitorActivityLogAlertTimeoutsOutputReference <a name="MonitorActivityLogAlertTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_activity_log_alert.MonitorActivityLogAlertTimeoutsOutputReference;

new MonitorActivityLogAlertTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts">MonitorActivityLogAlertTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorActivityLogAlert.MonitorActivityLogAlertTimeouts">MonitorActivityLogAlertTimeouts</a>

---



