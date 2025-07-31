# `monitorAlertProcessingRuleSuppression` Submodule <a name="`monitorAlertProcessingRuleSuppression` Submodule" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorAlertProcessingRuleSuppression <a name="MonitorAlertProcessingRuleSuppression" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression azurerm_monitor_alert_processing_rule_suppression}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppression;

MonitorAlertProcessingRuleSuppression.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .scopes(java.util.List<java.lang.String>)
//  .condition(MonitorAlertProcessingRuleSuppressionCondition)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .schedule(MonitorAlertProcessingRuleSuppressionSchedule)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MonitorAlertProcessingRuleSuppressionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#name MonitorAlertProcessingRuleSuppression#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#resource_group_name MonitorAlertProcessingRuleSuppression#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#scopes MonitorAlertProcessingRuleSuppression#scopes}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition">MonitorAlertProcessingRuleSuppressionCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#description MonitorAlertProcessingRuleSuppression#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#enabled MonitorAlertProcessingRuleSuppression#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#id MonitorAlertProcessingRuleSuppression#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule">MonitorAlertProcessingRuleSuppressionSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#tags MonitorAlertProcessingRuleSuppression#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts">MonitorAlertProcessingRuleSuppressionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#name MonitorAlertProcessingRuleSuppression#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#resource_group_name MonitorAlertProcessingRuleSuppression#resource_group_name}.

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.scopes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#scopes MonitorAlertProcessingRuleSuppression#scopes}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition">MonitorAlertProcessingRuleSuppressionCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#condition MonitorAlertProcessingRuleSuppression#condition}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#description MonitorAlertProcessingRuleSuppression#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#enabled MonitorAlertProcessingRuleSuppression#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#id MonitorAlertProcessingRuleSuppression#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule">MonitorAlertProcessingRuleSuppressionSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#schedule MonitorAlertProcessingRuleSuppression#schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#tags MonitorAlertProcessingRuleSuppression#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts">MonitorAlertProcessingRuleSuppressionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#timeouts MonitorAlertProcessingRuleSuppression#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.putCondition"></a>

```java
public void putCondition(MonitorAlertProcessingRuleSuppressionCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition">MonitorAlertProcessingRuleSuppressionCondition</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.putSchedule"></a>

```java
public void putSchedule(MonitorAlertProcessingRuleSuppressionSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule">MonitorAlertProcessingRuleSuppressionSchedule</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.putTimeouts"></a>

```java
public void putTimeouts(MonitorAlertProcessingRuleSuppressionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts">MonitorAlertProcessingRuleSuppressionTimeouts</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetId"></a>

```java
public void resetId()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetSchedule"></a>

```java
public void resetSchedule()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorAlertProcessingRuleSuppression resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppression;

MonitorAlertProcessingRuleSuppression.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppression;

MonitorAlertProcessingRuleSuppression.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppression;

MonitorAlertProcessingRuleSuppression.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppression;

MonitorAlertProcessingRuleSuppression.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MonitorAlertProcessingRuleSuppression.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MonitorAlertProcessingRuleSuppression resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MonitorAlertProcessingRuleSuppression to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MonitorAlertProcessingRuleSuppression that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MonitorAlertProcessingRuleSuppression to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference">MonitorAlertProcessingRuleSuppressionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference">MonitorAlertProcessingRuleSuppressionScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference">MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition">MonitorAlertProcessingRuleSuppressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule">MonitorAlertProcessingRuleSuppressionSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts">MonitorAlertProcessingRuleSuppressionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.condition"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference">MonitorAlertProcessingRuleSuppressionConditionOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.schedule"></a>

```java
public MonitorAlertProcessingRuleSuppressionScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference">MonitorAlertProcessingRuleSuppressionScheduleOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.timeouts"></a>

```java
public MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference">MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.conditionInput"></a>

```java
public MonitorAlertProcessingRuleSuppressionCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition">MonitorAlertProcessingRuleSuppressionCondition</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.scheduleInput"></a>

```java
public MonitorAlertProcessingRuleSuppressionSchedule getScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule">MonitorAlertProcessingRuleSuppressionSchedule</a>

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts">MonitorAlertProcessingRuleSuppressionTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorAlertProcessingRuleSuppressionCondition <a name="MonitorAlertProcessingRuleSuppressionCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionCondition;

MonitorAlertProcessingRuleSuppressionCondition.builder()
//  .alertContext(MonitorAlertProcessingRuleSuppressionConditionAlertContext)
//  .alertRuleId(MonitorAlertProcessingRuleSuppressionConditionAlertRuleId)
//  .alertRuleName(MonitorAlertProcessingRuleSuppressionConditionAlertRuleName)
//  .description(MonitorAlertProcessingRuleSuppressionConditionDescription)
//  .monitorCondition(MonitorAlertProcessingRuleSuppressionConditionMonitorCondition)
//  .monitorService(MonitorAlertProcessingRuleSuppressionConditionMonitorService)
//  .severity(MonitorAlertProcessingRuleSuppressionConditionSeverity)
//  .signalType(MonitorAlertProcessingRuleSuppressionConditionSignalType)
//  .targetResource(MonitorAlertProcessingRuleSuppressionConditionTargetResource)
//  .targetResourceGroup(MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup)
//  .targetResourceType(MonitorAlertProcessingRuleSuppressionConditionTargetResourceType)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.alertContext">alertContext</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext">MonitorAlertProcessingRuleSuppressionConditionAlertContext</a></code> | alert_context block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.alertRuleId">alertRuleId</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId">MonitorAlertProcessingRuleSuppressionConditionAlertRuleId</a></code> | alert_rule_id block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.alertRuleName">alertRuleName</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName">MonitorAlertProcessingRuleSuppressionConditionAlertRuleName</a></code> | alert_rule_name block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.description">description</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription">MonitorAlertProcessingRuleSuppressionConditionDescription</a></code> | description block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.monitorCondition">monitorCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition">MonitorAlertProcessingRuleSuppressionConditionMonitorCondition</a></code> | monitor_condition block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.monitorService">monitorService</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService">MonitorAlertProcessingRuleSuppressionConditionMonitorService</a></code> | monitor_service block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.severity">severity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity">MonitorAlertProcessingRuleSuppressionConditionSeverity</a></code> | severity block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.signalType">signalType</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType">MonitorAlertProcessingRuleSuppressionConditionSignalType</a></code> | signal_type block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.targetResource">targetResource</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource">MonitorAlertProcessingRuleSuppressionConditionTargetResource</a></code> | target_resource block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.targetResourceGroup">targetResourceGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup">MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup</a></code> | target_resource_group block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.targetResourceType">targetResourceType</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType">MonitorAlertProcessingRuleSuppressionConditionTargetResourceType</a></code> | target_resource_type block. |

---

##### `alertContext`<sup>Optional</sup> <a name="alertContext" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.alertContext"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionAlertContext getAlertContext();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext">MonitorAlertProcessingRuleSuppressionConditionAlertContext</a>

alert_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#alert_context MonitorAlertProcessingRuleSuppression#alert_context}

---

##### `alertRuleId`<sup>Optional</sup> <a name="alertRuleId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.alertRuleId"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionAlertRuleId getAlertRuleId();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId">MonitorAlertProcessingRuleSuppressionConditionAlertRuleId</a>

alert_rule_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#alert_rule_id MonitorAlertProcessingRuleSuppression#alert_rule_id}

---

##### `alertRuleName`<sup>Optional</sup> <a name="alertRuleName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.alertRuleName"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionAlertRuleName getAlertRuleName();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName">MonitorAlertProcessingRuleSuppressionConditionAlertRuleName</a>

alert_rule_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#alert_rule_name MonitorAlertProcessingRuleSuppression#alert_rule_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.description"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionDescription getDescription();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription">MonitorAlertProcessingRuleSuppressionConditionDescription</a>

description block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#description MonitorAlertProcessingRuleSuppression#description}

---

##### `monitorCondition`<sup>Optional</sup> <a name="monitorCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.monitorCondition"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionMonitorCondition getMonitorCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition">MonitorAlertProcessingRuleSuppressionConditionMonitorCondition</a>

monitor_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#monitor_condition MonitorAlertProcessingRuleSuppression#monitor_condition}

---

##### `monitorService`<sup>Optional</sup> <a name="monitorService" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.monitorService"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionMonitorService getMonitorService();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService">MonitorAlertProcessingRuleSuppressionConditionMonitorService</a>

monitor_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#monitor_service MonitorAlertProcessingRuleSuppression#monitor_service}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.severity"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionSeverity getSeverity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity">MonitorAlertProcessingRuleSuppressionConditionSeverity</a>

severity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#severity MonitorAlertProcessingRuleSuppression#severity}

---

##### `signalType`<sup>Optional</sup> <a name="signalType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.signalType"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionSignalType getSignalType();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType">MonitorAlertProcessingRuleSuppressionConditionSignalType</a>

signal_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#signal_type MonitorAlertProcessingRuleSuppression#signal_type}

---

##### `targetResource`<sup>Optional</sup> <a name="targetResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.targetResource"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionTargetResource getTargetResource();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource">MonitorAlertProcessingRuleSuppressionConditionTargetResource</a>

target_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#target_resource MonitorAlertProcessingRuleSuppression#target_resource}

---

##### `targetResourceGroup`<sup>Optional</sup> <a name="targetResourceGroup" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.targetResourceGroup"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup getTargetResourceGroup();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup">MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup</a>

target_resource_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#target_resource_group MonitorAlertProcessingRuleSuppression#target_resource_group}

---

##### `targetResourceType`<sup>Optional</sup> <a name="targetResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.targetResourceType"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionTargetResourceType getTargetResourceType();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType">MonitorAlertProcessingRuleSuppressionConditionTargetResourceType</a>

target_resource_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#target_resource_type MonitorAlertProcessingRuleSuppression#target_resource_type}

---

### MonitorAlertProcessingRuleSuppressionConditionAlertContext <a name="MonitorAlertProcessingRuleSuppressionConditionAlertContext" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext;

MonitorAlertProcessingRuleSuppressionConditionAlertContext.builder()
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}.

---

### MonitorAlertProcessingRuleSuppressionConditionAlertRuleId <a name="MonitorAlertProcessingRuleSuppressionConditionAlertRuleId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId;

MonitorAlertProcessingRuleSuppressionConditionAlertRuleId.builder()
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}.

---

### MonitorAlertProcessingRuleSuppressionConditionAlertRuleName <a name="MonitorAlertProcessingRuleSuppressionConditionAlertRuleName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName;

MonitorAlertProcessingRuleSuppressionConditionAlertRuleName.builder()
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}.

---

### MonitorAlertProcessingRuleSuppressionConditionDescription <a name="MonitorAlertProcessingRuleSuppressionConditionDescription" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionConditionDescription;

MonitorAlertProcessingRuleSuppressionConditionDescription.builder()
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}.

---

### MonitorAlertProcessingRuleSuppressionConditionMonitorCondition <a name="MonitorAlertProcessingRuleSuppressionConditionMonitorCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition;

MonitorAlertProcessingRuleSuppressionConditionMonitorCondition.builder()
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}.

---

### MonitorAlertProcessingRuleSuppressionConditionMonitorService <a name="MonitorAlertProcessingRuleSuppressionConditionMonitorService" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService;

MonitorAlertProcessingRuleSuppressionConditionMonitorService.builder()
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}.

---

### MonitorAlertProcessingRuleSuppressionConditionSeverity <a name="MonitorAlertProcessingRuleSuppressionConditionSeverity" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionConditionSeverity;

MonitorAlertProcessingRuleSuppressionConditionSeverity.builder()
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}.

---

### MonitorAlertProcessingRuleSuppressionConditionSignalType <a name="MonitorAlertProcessingRuleSuppressionConditionSignalType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionConditionSignalType;

MonitorAlertProcessingRuleSuppressionConditionSignalType.builder()
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}.

---

### MonitorAlertProcessingRuleSuppressionConditionTargetResource <a name="MonitorAlertProcessingRuleSuppressionConditionTargetResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource;

MonitorAlertProcessingRuleSuppressionConditionTargetResource.builder()
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}.

---

### MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup <a name="MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup;

MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup.builder()
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}.

---

### MonitorAlertProcessingRuleSuppressionConditionTargetResourceType <a name="MonitorAlertProcessingRuleSuppressionConditionTargetResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType;

MonitorAlertProcessingRuleSuppressionConditionTargetResourceType.builder()
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}.

---

### MonitorAlertProcessingRuleSuppressionConfig <a name="MonitorAlertProcessingRuleSuppressionConfig" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionConfig;

MonitorAlertProcessingRuleSuppressionConfig.builder()
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
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .scopes(java.util.List<java.lang.String>)
//  .condition(MonitorAlertProcessingRuleSuppressionCondition)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .schedule(MonitorAlertProcessingRuleSuppressionSchedule)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MonitorAlertProcessingRuleSuppressionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#name MonitorAlertProcessingRuleSuppression#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#resource_group_name MonitorAlertProcessingRuleSuppression#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#scopes MonitorAlertProcessingRuleSuppression#scopes}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition">MonitorAlertProcessingRuleSuppressionCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#description MonitorAlertProcessingRuleSuppression#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#enabled MonitorAlertProcessingRuleSuppression#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#id MonitorAlertProcessingRuleSuppression#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule">MonitorAlertProcessingRuleSuppressionSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#tags MonitorAlertProcessingRuleSuppression#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts">MonitorAlertProcessingRuleSuppressionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#name MonitorAlertProcessingRuleSuppression#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#resource_group_name MonitorAlertProcessingRuleSuppression#resource_group_name}.

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#scopes MonitorAlertProcessingRuleSuppression#scopes}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.condition"></a>

```java
public MonitorAlertProcessingRuleSuppressionCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition">MonitorAlertProcessingRuleSuppressionCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#condition MonitorAlertProcessingRuleSuppression#condition}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#description MonitorAlertProcessingRuleSuppression#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#enabled MonitorAlertProcessingRuleSuppression#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#id MonitorAlertProcessingRuleSuppression#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.schedule"></a>

```java
public MonitorAlertProcessingRuleSuppressionSchedule getSchedule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule">MonitorAlertProcessingRuleSuppressionSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#schedule MonitorAlertProcessingRuleSuppression#schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#tags MonitorAlertProcessingRuleSuppression#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.timeouts"></a>

```java
public MonitorAlertProcessingRuleSuppressionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts">MonitorAlertProcessingRuleSuppressionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#timeouts MonitorAlertProcessingRuleSuppression#timeouts}

---

### MonitorAlertProcessingRuleSuppressionSchedule <a name="MonitorAlertProcessingRuleSuppressionSchedule" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionSchedule;

MonitorAlertProcessingRuleSuppressionSchedule.builder()
//  .effectiveFrom(java.lang.String)
//  .effectiveUntil(java.lang.String)
//  .recurrence(MonitorAlertProcessingRuleSuppressionScheduleRecurrence)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule.property.effectiveFrom">effectiveFrom</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#effective_from MonitorAlertProcessingRuleSuppression#effective_from}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule.property.effectiveUntil">effectiveUntil</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#effective_until MonitorAlertProcessingRuleSuppression#effective_until}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence">MonitorAlertProcessingRuleSuppressionScheduleRecurrence</a></code> | recurrence block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#time_zone MonitorAlertProcessingRuleSuppression#time_zone}. |

---

##### `effectiveFrom`<sup>Optional</sup> <a name="effectiveFrom" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule.property.effectiveFrom"></a>

```java
public java.lang.String getEffectiveFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#effective_from MonitorAlertProcessingRuleSuppression#effective_from}.

---

##### `effectiveUntil`<sup>Optional</sup> <a name="effectiveUntil" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule.property.effectiveUntil"></a>

```java
public java.lang.String getEffectiveUntil();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#effective_until MonitorAlertProcessingRuleSuppression#effective_until}.

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule.property.recurrence"></a>

```java
public MonitorAlertProcessingRuleSuppressionScheduleRecurrence getRecurrence();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence">MonitorAlertProcessingRuleSuppressionScheduleRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#recurrence MonitorAlertProcessingRuleSuppression#recurrence}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#time_zone MonitorAlertProcessingRuleSuppression#time_zone}.

---

### MonitorAlertProcessingRuleSuppressionScheduleRecurrence <a name="MonitorAlertProcessingRuleSuppressionScheduleRecurrence" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence;

MonitorAlertProcessingRuleSuppressionScheduleRecurrence.builder()
//  .daily(IResolvable)
//  .daily(java.util.List<MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily>)
//  .monthly(IResolvable)
//  .monthly(java.util.List<MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly>)
//  .weekly(IResolvable)
//  .weekly(java.util.List<MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence.property.daily">daily</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily</a>></code> | daily block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence.property.monthly">monthly</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly</a>></code> | monthly block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence.property.weekly">weekly</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly</a>></code> | weekly block. |

---

##### `daily`<sup>Optional</sup> <a name="daily" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence.property.daily"></a>

```java
public java.lang.Object getDaily();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily</a>>

daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#daily MonitorAlertProcessingRuleSuppression#daily}

---

##### `monthly`<sup>Optional</sup> <a name="monthly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence.property.monthly"></a>

```java
public java.lang.Object getMonthly();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly</a>>

monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#monthly MonitorAlertProcessingRuleSuppression#monthly}

---

##### `weekly`<sup>Optional</sup> <a name="weekly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence.property.weekly"></a>

```java
public java.lang.Object getWeekly();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly</a>>

weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#weekly MonitorAlertProcessingRuleSuppression#weekly}

---

### MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily <a name="MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily;

MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily.builder()
    .endTime(java.lang.String)
    .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily.property.endTime">endTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#end_time MonitorAlertProcessingRuleSuppression#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#start_time MonitorAlertProcessingRuleSuppression#start_time}. |

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#end_time MonitorAlertProcessingRuleSuppression#end_time}.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#start_time MonitorAlertProcessingRuleSuppression#start_time}.

---

### MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly <a name="MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly;

MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly.builder()
    .daysOfMonth(java.util.List<java.lang.Number>)
//  .endTime(java.lang.String)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly.property.daysOfMonth">daysOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#days_of_month MonitorAlertProcessingRuleSuppression#days_of_month}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly.property.endTime">endTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#end_time MonitorAlertProcessingRuleSuppression#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#start_time MonitorAlertProcessingRuleSuppression#start_time}. |

---

##### `daysOfMonth`<sup>Required</sup> <a name="daysOfMonth" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly.property.daysOfMonth"></a>

```java
public java.util.List<java.lang.Number> getDaysOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#days_of_month MonitorAlertProcessingRuleSuppression#days_of_month}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#end_time MonitorAlertProcessingRuleSuppression#end_time}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#start_time MonitorAlertProcessingRuleSuppression#start_time}.

---

### MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly <a name="MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly;

MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly.builder()
    .daysOfWeek(java.util.List<java.lang.String>)
//  .endTime(java.lang.String)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#days_of_week MonitorAlertProcessingRuleSuppression#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly.property.endTime">endTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#end_time MonitorAlertProcessingRuleSuppression#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#start_time MonitorAlertProcessingRuleSuppression#start_time}. |

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#days_of_week MonitorAlertProcessingRuleSuppression#days_of_week}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#end_time MonitorAlertProcessingRuleSuppression#end_time}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#start_time MonitorAlertProcessingRuleSuppression#start_time}.

---

### MonitorAlertProcessingRuleSuppressionTimeouts <a name="MonitorAlertProcessingRuleSuppressionTimeouts" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionTimeouts;

MonitorAlertProcessingRuleSuppressionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#create MonitorAlertProcessingRuleSuppression#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#delete MonitorAlertProcessingRuleSuppression#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#read MonitorAlertProcessingRuleSuppression#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#update MonitorAlertProcessingRuleSuppression#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#create MonitorAlertProcessingRuleSuppression#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#delete MonitorAlertProcessingRuleSuppression#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#read MonitorAlertProcessingRuleSuppression#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/monitor_alert_processing_rule_suppression#update MonitorAlertProcessingRuleSuppression#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference <a name="MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference;

new MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext">MonitorAlertProcessingRuleSuppressionConditionAlertContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.internalValue"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionAlertContext getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext">MonitorAlertProcessingRuleSuppressionConditionAlertContext</a>

---


### MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference <a name="MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference;

new MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId">MonitorAlertProcessingRuleSuppressionConditionAlertRuleId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.internalValue"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionAlertRuleId getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId">MonitorAlertProcessingRuleSuppressionConditionAlertRuleId</a>

---


### MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference <a name="MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference;

new MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName">MonitorAlertProcessingRuleSuppressionConditionAlertRuleName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.internalValue"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionAlertRuleName getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName">MonitorAlertProcessingRuleSuppressionConditionAlertRuleName</a>

---


### MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference <a name="MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference;

new MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription">MonitorAlertProcessingRuleSuppressionConditionDescription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.internalValue"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionDescription getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription">MonitorAlertProcessingRuleSuppressionConditionDescription</a>

---


### MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference <a name="MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference;

new MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition">MonitorAlertProcessingRuleSuppressionConditionMonitorCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.internalValue"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionMonitorCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition">MonitorAlertProcessingRuleSuppressionConditionMonitorCondition</a>

---


### MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference <a name="MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference;

new MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService">MonitorAlertProcessingRuleSuppressionConditionMonitorService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.internalValue"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionMonitorService getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService">MonitorAlertProcessingRuleSuppressionConditionMonitorService</a>

---


### MonitorAlertProcessingRuleSuppressionConditionOutputReference <a name="MonitorAlertProcessingRuleSuppressionConditionOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference;

new MonitorAlertProcessingRuleSuppressionConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putAlertContext">putAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putAlertRuleId">putAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putAlertRuleName">putAlertRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putDescription">putDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putMonitorCondition">putMonitorCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putMonitorService">putMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putSeverity">putSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putSignalType">putSignalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putTargetResource">putTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putTargetResourceGroup">putTargetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putTargetResourceType">putTargetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetAlertContext">resetAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetAlertRuleId">resetAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetAlertRuleName">resetAlertRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetMonitorCondition">resetMonitorCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetMonitorService">resetMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetSignalType">resetSignalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetTargetResource">resetTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetTargetResourceGroup">resetTargetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetTargetResourceType">resetTargetResourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlertContext` <a name="putAlertContext" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putAlertContext"></a>

```java
public void putAlertContext(MonitorAlertProcessingRuleSuppressionConditionAlertContext value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putAlertContext.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext">MonitorAlertProcessingRuleSuppressionConditionAlertContext</a>

---

##### `putAlertRuleId` <a name="putAlertRuleId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putAlertRuleId"></a>

```java
public void putAlertRuleId(MonitorAlertProcessingRuleSuppressionConditionAlertRuleId value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putAlertRuleId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId">MonitorAlertProcessingRuleSuppressionConditionAlertRuleId</a>

---

##### `putAlertRuleName` <a name="putAlertRuleName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putAlertRuleName"></a>

```java
public void putAlertRuleName(MonitorAlertProcessingRuleSuppressionConditionAlertRuleName value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putAlertRuleName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName">MonitorAlertProcessingRuleSuppressionConditionAlertRuleName</a>

---

##### `putDescription` <a name="putDescription" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putDescription"></a>

```java
public void putDescription(MonitorAlertProcessingRuleSuppressionConditionDescription value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putDescription.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription">MonitorAlertProcessingRuleSuppressionConditionDescription</a>

---

##### `putMonitorCondition` <a name="putMonitorCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putMonitorCondition"></a>

```java
public void putMonitorCondition(MonitorAlertProcessingRuleSuppressionConditionMonitorCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putMonitorCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition">MonitorAlertProcessingRuleSuppressionConditionMonitorCondition</a>

---

##### `putMonitorService` <a name="putMonitorService" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putMonitorService"></a>

```java
public void putMonitorService(MonitorAlertProcessingRuleSuppressionConditionMonitorService value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putMonitorService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService">MonitorAlertProcessingRuleSuppressionConditionMonitorService</a>

---

##### `putSeverity` <a name="putSeverity" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putSeverity"></a>

```java
public void putSeverity(MonitorAlertProcessingRuleSuppressionConditionSeverity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putSeverity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity">MonitorAlertProcessingRuleSuppressionConditionSeverity</a>

---

##### `putSignalType` <a name="putSignalType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putSignalType"></a>

```java
public void putSignalType(MonitorAlertProcessingRuleSuppressionConditionSignalType value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putSignalType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType">MonitorAlertProcessingRuleSuppressionConditionSignalType</a>

---

##### `putTargetResource` <a name="putTargetResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putTargetResource"></a>

```java
public void putTargetResource(MonitorAlertProcessingRuleSuppressionConditionTargetResource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putTargetResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource">MonitorAlertProcessingRuleSuppressionConditionTargetResource</a>

---

##### `putTargetResourceGroup` <a name="putTargetResourceGroup" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putTargetResourceGroup"></a>

```java
public void putTargetResourceGroup(MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putTargetResourceGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup">MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup</a>

---

##### `putTargetResourceType` <a name="putTargetResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putTargetResourceType"></a>

```java
public void putTargetResourceType(MonitorAlertProcessingRuleSuppressionConditionTargetResourceType value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putTargetResourceType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType">MonitorAlertProcessingRuleSuppressionConditionTargetResourceType</a>

---

##### `resetAlertContext` <a name="resetAlertContext" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetAlertContext"></a>

```java
public void resetAlertContext()
```

##### `resetAlertRuleId` <a name="resetAlertRuleId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetAlertRuleId"></a>

```java
public void resetAlertRuleId()
```

##### `resetAlertRuleName` <a name="resetAlertRuleName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetAlertRuleName"></a>

```java
public void resetAlertRuleName()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetMonitorCondition` <a name="resetMonitorCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetMonitorCondition"></a>

```java
public void resetMonitorCondition()
```

##### `resetMonitorService` <a name="resetMonitorService" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetMonitorService"></a>

```java
public void resetMonitorService()
```

##### `resetSeverity` <a name="resetSeverity" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetSeverity"></a>

```java
public void resetSeverity()
```

##### `resetSignalType` <a name="resetSignalType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetSignalType"></a>

```java
public void resetSignalType()
```

##### `resetTargetResource` <a name="resetTargetResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetTargetResource"></a>

```java
public void resetTargetResource()
```

##### `resetTargetResourceGroup` <a name="resetTargetResourceGroup" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetTargetResourceGroup"></a>

```java
public void resetTargetResourceGroup()
```

##### `resetTargetResourceType` <a name="resetTargetResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetTargetResourceType"></a>

```java
public void resetTargetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.alertContext">alertContext</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference">MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.alertRuleId">alertRuleId</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference">MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.alertRuleName">alertRuleName</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference">MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.description">description</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference">MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.monitorCondition">monitorCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference">MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.monitorService">monitorService</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference">MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.severity">severity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference">MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.signalType">signalType</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference">MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.targetResource">targetResource</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference">MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.targetResourceGroup">targetResourceGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference">MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.targetResourceType">targetResourceType</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference">MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.alertContextInput">alertContextInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext">MonitorAlertProcessingRuleSuppressionConditionAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.alertRuleIdInput">alertRuleIdInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId">MonitorAlertProcessingRuleSuppressionConditionAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.alertRuleNameInput">alertRuleNameInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName">MonitorAlertProcessingRuleSuppressionConditionAlertRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription">MonitorAlertProcessingRuleSuppressionConditionDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.monitorConditionInput">monitorConditionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition">MonitorAlertProcessingRuleSuppressionConditionMonitorCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.monitorServiceInput">monitorServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService">MonitorAlertProcessingRuleSuppressionConditionMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.severityInput">severityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity">MonitorAlertProcessingRuleSuppressionConditionSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.signalTypeInput">signalTypeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType">MonitorAlertProcessingRuleSuppressionConditionSignalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.targetResourceGroupInput">targetResourceGroupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup">MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.targetResourceInput">targetResourceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource">MonitorAlertProcessingRuleSuppressionConditionTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.targetResourceTypeInput">targetResourceTypeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType">MonitorAlertProcessingRuleSuppressionConditionTargetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition">MonitorAlertProcessingRuleSuppressionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alertContext`<sup>Required</sup> <a name="alertContext" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.alertContext"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference getAlertContext();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference">MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference</a>

---

##### `alertRuleId`<sup>Required</sup> <a name="alertRuleId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.alertRuleId"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference getAlertRuleId();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference">MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference</a>

---

##### `alertRuleName`<sup>Required</sup> <a name="alertRuleName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.alertRuleName"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference getAlertRuleName();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference">MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.description"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference getDescription();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference">MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference</a>

---

##### `monitorCondition`<sup>Required</sup> <a name="monitorCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.monitorCondition"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference getMonitorCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference">MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference</a>

---

##### `monitorService`<sup>Required</sup> <a name="monitorService" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.monitorService"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference getMonitorService();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference">MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference</a>

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.severity"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference getSeverity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference">MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference</a>

---

##### `signalType`<sup>Required</sup> <a name="signalType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.signalType"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference getSignalType();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference">MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference</a>

---

##### `targetResource`<sup>Required</sup> <a name="targetResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.targetResource"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference getTargetResource();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference">MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference</a>

---

##### `targetResourceGroup`<sup>Required</sup> <a name="targetResourceGroup" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.targetResourceGroup"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference getTargetResourceGroup();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference">MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference</a>

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.targetResourceType"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference getTargetResourceType();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference">MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference</a>

---

##### `alertContextInput`<sup>Optional</sup> <a name="alertContextInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.alertContextInput"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionAlertContext getAlertContextInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext">MonitorAlertProcessingRuleSuppressionConditionAlertContext</a>

---

##### `alertRuleIdInput`<sup>Optional</sup> <a name="alertRuleIdInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.alertRuleIdInput"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionAlertRuleId getAlertRuleIdInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId">MonitorAlertProcessingRuleSuppressionConditionAlertRuleId</a>

---

##### `alertRuleNameInput`<sup>Optional</sup> <a name="alertRuleNameInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.alertRuleNameInput"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionAlertRuleName getAlertRuleNameInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName">MonitorAlertProcessingRuleSuppressionConditionAlertRuleName</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.descriptionInput"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionDescription getDescriptionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription">MonitorAlertProcessingRuleSuppressionConditionDescription</a>

---

##### `monitorConditionInput`<sup>Optional</sup> <a name="monitorConditionInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.monitorConditionInput"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionMonitorCondition getMonitorConditionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition">MonitorAlertProcessingRuleSuppressionConditionMonitorCondition</a>

---

##### `monitorServiceInput`<sup>Optional</sup> <a name="monitorServiceInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.monitorServiceInput"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionMonitorService getMonitorServiceInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService">MonitorAlertProcessingRuleSuppressionConditionMonitorService</a>

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.severityInput"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionSeverity getSeverityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity">MonitorAlertProcessingRuleSuppressionConditionSeverity</a>

---

##### `signalTypeInput`<sup>Optional</sup> <a name="signalTypeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.signalTypeInput"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionSignalType getSignalTypeInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType">MonitorAlertProcessingRuleSuppressionConditionSignalType</a>

---

##### `targetResourceGroupInput`<sup>Optional</sup> <a name="targetResourceGroupInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.targetResourceGroupInput"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup getTargetResourceGroupInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup">MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup</a>

---

##### `targetResourceInput`<sup>Optional</sup> <a name="targetResourceInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.targetResourceInput"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionTargetResource getTargetResourceInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource">MonitorAlertProcessingRuleSuppressionConditionTargetResource</a>

---

##### `targetResourceTypeInput`<sup>Optional</sup> <a name="targetResourceTypeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.targetResourceTypeInput"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionTargetResourceType getTargetResourceTypeInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType">MonitorAlertProcessingRuleSuppressionConditionTargetResourceType</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.internalValue"></a>

```java
public MonitorAlertProcessingRuleSuppressionCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition">MonitorAlertProcessingRuleSuppressionCondition</a>

---


### MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference <a name="MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference;

new MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity">MonitorAlertProcessingRuleSuppressionConditionSeverity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.internalValue"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionSeverity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity">MonitorAlertProcessingRuleSuppressionConditionSeverity</a>

---


### MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference <a name="MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference;

new MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType">MonitorAlertProcessingRuleSuppressionConditionSignalType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.internalValue"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionSignalType getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType">MonitorAlertProcessingRuleSuppressionConditionSignalType</a>

---


### MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference <a name="MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference;

new MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup">MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.internalValue"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup">MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup</a>

---


### MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference <a name="MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference;

new MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource">MonitorAlertProcessingRuleSuppressionConditionTargetResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.internalValue"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionTargetResource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource">MonitorAlertProcessingRuleSuppressionConditionTargetResource</a>

---


### MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference <a name="MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference;

new MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType">MonitorAlertProcessingRuleSuppressionConditionTargetResourceType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.internalValue"></a>

```java
public MonitorAlertProcessingRuleSuppressionConditionTargetResourceType getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType">MonitorAlertProcessingRuleSuppressionConditionTargetResourceType</a>

---


### MonitorAlertProcessingRuleSuppressionScheduleOutputReference <a name="MonitorAlertProcessingRuleSuppressionScheduleOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference;

new MonitorAlertProcessingRuleSuppressionScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.putRecurrence">putRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.resetEffectiveFrom">resetEffectiveFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.resetEffectiveUntil">resetEffectiveUntil</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.resetRecurrence">resetRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecurrence` <a name="putRecurrence" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.putRecurrence"></a>

```java
public void putRecurrence(MonitorAlertProcessingRuleSuppressionScheduleRecurrence value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.putRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence">MonitorAlertProcessingRuleSuppressionScheduleRecurrence</a>

---

##### `resetEffectiveFrom` <a name="resetEffectiveFrom" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.resetEffectiveFrom"></a>

```java
public void resetEffectiveFrom()
```

##### `resetEffectiveUntil` <a name="resetEffectiveUntil" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.resetEffectiveUntil"></a>

```java
public void resetEffectiveUntil()
```

##### `resetRecurrence` <a name="resetRecurrence" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.resetRecurrence"></a>

```java
public void resetRecurrence()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.effectiveFromInput">effectiveFromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.effectiveUntilInput">effectiveUntilInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.recurrenceInput">recurrenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence">MonitorAlertProcessingRuleSuppressionScheduleRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.effectiveFrom">effectiveFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.effectiveUntil">effectiveUntil</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule">MonitorAlertProcessingRuleSuppressionSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.recurrence"></a>

```java
public MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference getRecurrence();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference</a>

---

##### `effectiveFromInput`<sup>Optional</sup> <a name="effectiveFromInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.effectiveFromInput"></a>

```java
public java.lang.String getEffectiveFromInput();
```

- *Type:* java.lang.String

---

##### `effectiveUntilInput`<sup>Optional</sup> <a name="effectiveUntilInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.effectiveUntilInput"></a>

```java
public java.lang.String getEffectiveUntilInput();
```

- *Type:* java.lang.String

---

##### `recurrenceInput`<sup>Optional</sup> <a name="recurrenceInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.recurrenceInput"></a>

```java
public MonitorAlertProcessingRuleSuppressionScheduleRecurrence getRecurrenceInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence">MonitorAlertProcessingRuleSuppressionScheduleRecurrence</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `effectiveFrom`<sup>Required</sup> <a name="effectiveFrom" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.effectiveFrom"></a>

```java
public java.lang.String getEffectiveFrom();
```

- *Type:* java.lang.String

---

##### `effectiveUntil`<sup>Required</sup> <a name="effectiveUntil" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.effectiveUntil"></a>

```java
public java.lang.String getEffectiveUntil();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.internalValue"></a>

```java
public MonitorAlertProcessingRuleSuppressionSchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule">MonitorAlertProcessingRuleSuppressionSchedule</a>

---


### MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList <a name="MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList;

new MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.get"></a>

```java
public MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily</a>>

---


### MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference <a name="MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference;

new MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily</a>

---


### MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList <a name="MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList;

new MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.get"></a>

```java
public MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly</a>>

---


### MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference <a name="MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference;

new MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.daysOfMonthInput">daysOfMonthInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.daysOfMonth">daysOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysOfMonthInput`<sup>Optional</sup> <a name="daysOfMonthInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.daysOfMonthInput"></a>

```java
public java.util.List<java.lang.Number> getDaysOfMonthInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `daysOfMonth`<sup>Required</sup> <a name="daysOfMonth" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.daysOfMonth"></a>

```java
public java.util.List<java.lang.Number> getDaysOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly</a>

---


### MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference <a name="MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference;

new MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.putDaily">putDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.putMonthly">putMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.putWeekly">putWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.resetDaily">resetDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.resetMonthly">resetMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.resetWeekly">resetWeekly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDaily` <a name="putDaily" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.putDaily"></a>

```java
public void putDaily(IResolvable OR java.util.List<MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.putDaily.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily</a>>

---

##### `putMonthly` <a name="putMonthly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.putMonthly"></a>

```java
public void putMonthly(IResolvable OR java.util.List<MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.putMonthly.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly</a>>

---

##### `putWeekly` <a name="putWeekly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.putWeekly"></a>

```java
public void putWeekly(IResolvable OR java.util.List<MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.putWeekly.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly</a>>

---

##### `resetDaily` <a name="resetDaily" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.resetDaily"></a>

```java
public void resetDaily()
```

##### `resetMonthly` <a name="resetMonthly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.resetMonthly"></a>

```java
public void resetMonthly()
```

##### `resetWeekly` <a name="resetWeekly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.resetWeekly"></a>

```java
public void resetWeekly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.daily">daily</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.monthly">monthly</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.weekly">weekly</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.dailyInput">dailyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.monthlyInput">monthlyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.weeklyInput">weeklyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence">MonitorAlertProcessingRuleSuppressionScheduleRecurrence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daily`<sup>Required</sup> <a name="daily" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.daily"></a>

```java
public MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList getDaily();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList</a>

---

##### `monthly`<sup>Required</sup> <a name="monthly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.monthly"></a>

```java
public MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList getMonthly();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList</a>

---

##### `weekly`<sup>Required</sup> <a name="weekly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.weekly"></a>

```java
public MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList getWeekly();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList</a>

---

##### `dailyInput`<sup>Optional</sup> <a name="dailyInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.dailyInput"></a>

```java
public java.lang.Object getDailyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily</a>>

---

##### `monthlyInput`<sup>Optional</sup> <a name="monthlyInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.monthlyInput"></a>

```java
public java.lang.Object getMonthlyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly</a>>

---

##### `weeklyInput`<sup>Optional</sup> <a name="weeklyInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.weeklyInput"></a>

```java
public java.lang.Object getWeeklyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.internalValue"></a>

```java
public MonitorAlertProcessingRuleSuppressionScheduleRecurrence getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence">MonitorAlertProcessingRuleSuppressionScheduleRecurrence</a>

---


### MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList <a name="MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList;

new MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.get"></a>

```java
public MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly</a>>

---


### MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference <a name="MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference;

new MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.daysOfWeekInput"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeekInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly</a>

---


### MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference <a name="MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_alert_processing_rule_suppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference;

new MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts">MonitorAlertProcessingRuleSuppressionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts">MonitorAlertProcessingRuleSuppressionTimeouts</a>

---



