# `sentinelAlertRuleMachineLearningBehaviorAnalytics` Submodule <a name="`sentinelAlertRuleMachineLearningBehaviorAnalytics` Submodule" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelAlertRuleMachineLearningBehaviorAnalytics <a name="SentinelAlertRuleMachineLearningBehaviorAnalytics" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics azurerm_sentinel_alert_rule_machine_learning_behavior_analytics}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_machine_learning_behavior_analytics.SentinelAlertRuleMachineLearningBehaviorAnalytics;

SentinelAlertRuleMachineLearningBehaviorAnalytics.Builder.create(Construct scope, java.lang.String id)
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
    .alertRuleTemplateGuid(java.lang.String)
    .logAnalyticsWorkspaceId(java.lang.String)
    .name(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .timeouts(SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.alertRuleTemplateGuid">alertRuleTemplateGuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#alert_rule_template_guid SentinelAlertRuleMachineLearningBehaviorAnalytics#alert_rule_template_guid}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#log_analytics_workspace_id SentinelAlertRuleMachineLearningBehaviorAnalytics#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#name SentinelAlertRuleMachineLearningBehaviorAnalytics#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#enabled SentinelAlertRuleMachineLearningBehaviorAnalytics#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#id SentinelAlertRuleMachineLearningBehaviorAnalytics#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts">SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alertRuleTemplateGuid`<sup>Required</sup> <a name="alertRuleTemplateGuid" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.alertRuleTemplateGuid"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#alert_rule_template_guid SentinelAlertRuleMachineLearningBehaviorAnalytics#alert_rule_template_guid}.

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#log_analytics_workspace_id SentinelAlertRuleMachineLearningBehaviorAnalytics#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#name SentinelAlertRuleMachineLearningBehaviorAnalytics#name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#enabled SentinelAlertRuleMachineLearningBehaviorAnalytics#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#id SentinelAlertRuleMachineLearningBehaviorAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts">SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#timeouts SentinelAlertRuleMachineLearningBehaviorAnalytics#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.putTimeouts"></a>

```java
public void putTimeouts(SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts">SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelAlertRuleMachineLearningBehaviorAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_machine_learning_behavior_analytics.SentinelAlertRuleMachineLearningBehaviorAnalytics;

SentinelAlertRuleMachineLearningBehaviorAnalytics.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_machine_learning_behavior_analytics.SentinelAlertRuleMachineLearningBehaviorAnalytics;

SentinelAlertRuleMachineLearningBehaviorAnalytics.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_machine_learning_behavior_analytics.SentinelAlertRuleMachineLearningBehaviorAnalytics;

SentinelAlertRuleMachineLearningBehaviorAnalytics.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_machine_learning_behavior_analytics.SentinelAlertRuleMachineLearningBehaviorAnalytics;

SentinelAlertRuleMachineLearningBehaviorAnalytics.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SentinelAlertRuleMachineLearningBehaviorAnalytics.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SentinelAlertRuleMachineLearningBehaviorAnalytics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SentinelAlertRuleMachineLearningBehaviorAnalytics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SentinelAlertRuleMachineLearningBehaviorAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SentinelAlertRuleMachineLearningBehaviorAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference">SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.alertRuleTemplateGuidInput">alertRuleTemplateGuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts">SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.alertRuleTemplateGuid">alertRuleTemplateGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.timeouts"></a>

```java
public SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference">SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference</a>

---

##### `alertRuleTemplateGuidInput`<sup>Optional</sup> <a name="alertRuleTemplateGuidInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.alertRuleTemplateGuidInput"></a>

```java
public java.lang.String getAlertRuleTemplateGuidInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.logAnalyticsWorkspaceIdInput"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts">SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts</a>

---

##### `alertRuleTemplateGuid`<sup>Required</sup> <a name="alertRuleTemplateGuid" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.alertRuleTemplateGuid"></a>

```java
public java.lang.String getAlertRuleTemplateGuid();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig <a name="SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_machine_learning_behavior_analytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig;

SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.builder()
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
    .alertRuleTemplateGuid(java.lang.String)
    .logAnalyticsWorkspaceId(java.lang.String)
    .name(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .timeouts(SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.alertRuleTemplateGuid">alertRuleTemplateGuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#alert_rule_template_guid SentinelAlertRuleMachineLearningBehaviorAnalytics#alert_rule_template_guid}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#log_analytics_workspace_id SentinelAlertRuleMachineLearningBehaviorAnalytics#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#name SentinelAlertRuleMachineLearningBehaviorAnalytics#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#enabled SentinelAlertRuleMachineLearningBehaviorAnalytics#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#id SentinelAlertRuleMachineLearningBehaviorAnalytics#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts">SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alertRuleTemplateGuid`<sup>Required</sup> <a name="alertRuleTemplateGuid" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.alertRuleTemplateGuid"></a>

```java
public java.lang.String getAlertRuleTemplateGuid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#alert_rule_template_guid SentinelAlertRuleMachineLearningBehaviorAnalytics#alert_rule_template_guid}.

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#log_analytics_workspace_id SentinelAlertRuleMachineLearningBehaviorAnalytics#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#name SentinelAlertRuleMachineLearningBehaviorAnalytics#name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#enabled SentinelAlertRuleMachineLearningBehaviorAnalytics#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#id SentinelAlertRuleMachineLearningBehaviorAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.timeouts"></a>

```java
public SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts">SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#timeouts SentinelAlertRuleMachineLearningBehaviorAnalytics#timeouts}

---

### SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts <a name="SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_machine_learning_behavior_analytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts;

SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#create SentinelAlertRuleMachineLearningBehaviorAnalytics#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#delete SentinelAlertRuleMachineLearningBehaviorAnalytics#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#read SentinelAlertRuleMachineLearningBehaviorAnalytics#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#update SentinelAlertRuleMachineLearningBehaviorAnalytics#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#create SentinelAlertRuleMachineLearningBehaviorAnalytics#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#delete SentinelAlertRuleMachineLearningBehaviorAnalytics#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#read SentinelAlertRuleMachineLearningBehaviorAnalytics#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sentinel_alert_rule_machine_learning_behavior_analytics#update SentinelAlertRuleMachineLearningBehaviorAnalytics#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference <a name="SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_machine_learning_behavior_analytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference;

new SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts">SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts">SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts</a>

---



