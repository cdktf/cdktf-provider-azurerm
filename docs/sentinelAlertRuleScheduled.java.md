# `sentinelAlertRuleScheduled` Submodule <a name="`sentinelAlertRuleScheduled` Submodule" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelAlertRuleScheduled <a name="SentinelAlertRuleScheduled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled azurerm_sentinel_alert_rule_scheduled}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduled;

SentinelAlertRuleScheduled.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .logAnalyticsWorkspaceId(java.lang.String)
    .name(java.lang.String)
    .query(java.lang.String)
    .severity(java.lang.String)
//  .alertDetailsOverride(IResolvable)
//  .alertDetailsOverride(java.util.List<SentinelAlertRuleScheduledAlertDetailsOverride>)
//  .alertRuleTemplateGuid(java.lang.String)
//  .alertRuleTemplateVersion(java.lang.String)
//  .customDetails(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .entityMapping(IResolvable)
//  .entityMapping(java.util.List<SentinelAlertRuleScheduledEntityMapping>)
//  .eventGrouping(SentinelAlertRuleScheduledEventGrouping)
//  .id(java.lang.String)
//  .incident(SentinelAlertRuleScheduledIncident)
//  .queryFrequency(java.lang.String)
//  .queryPeriod(java.lang.String)
//  .sentinelEntityMapping(IResolvable)
//  .sentinelEntityMapping(java.util.List<SentinelAlertRuleScheduledSentinelEntityMapping>)
//  .suppressionDuration(java.lang.String)
//  .suppressionEnabled(java.lang.Boolean)
//  .suppressionEnabled(IResolvable)
//  .tactics(java.util.List<java.lang.String>)
//  .techniques(java.util.List<java.lang.String>)
//  .timeouts(SentinelAlertRuleScheduledTimeouts)
//  .triggerOperator(java.lang.String)
//  .triggerThreshold(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#display_name SentinelAlertRuleScheduled#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#log_analytics_workspace_id SentinelAlertRuleScheduled#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#name SentinelAlertRuleScheduled#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.query">query</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#query SentinelAlertRuleScheduled#query}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.severity">severity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#severity SentinelAlertRuleScheduled#severity}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.alertDetailsOverride">alertDetailsOverride</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride">SentinelAlertRuleScheduledAlertDetailsOverride</a>></code> | alert_details_override block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.alertRuleTemplateGuid">alertRuleTemplateGuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#alert_rule_template_guid SentinelAlertRuleScheduled#alert_rule_template_guid}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.alertRuleTemplateVersion">alertRuleTemplateVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#alert_rule_template_version SentinelAlertRuleScheduled#alert_rule_template_version}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.customDetails">customDetails</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#custom_details SentinelAlertRuleScheduled#custom_details}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#description SentinelAlertRuleScheduled#description}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#enabled SentinelAlertRuleScheduled#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.entityMapping">entityMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMapping">SentinelAlertRuleScheduledEntityMapping</a>></code> | entity_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.eventGrouping">eventGrouping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGrouping">SentinelAlertRuleScheduledEventGrouping</a></code> | event_grouping block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#id SentinelAlertRuleScheduled#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.incident">incident</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident">SentinelAlertRuleScheduledIncident</a></code> | incident block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.queryFrequency">queryFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#query_frequency SentinelAlertRuleScheduled#query_frequency}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.queryPeriod">queryPeriod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#query_period SentinelAlertRuleScheduled#query_period}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.sentinelEntityMapping">sentinelEntityMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMapping">SentinelAlertRuleScheduledSentinelEntityMapping</a>></code> | sentinel_entity_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.suppressionDuration">suppressionDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#suppression_duration SentinelAlertRuleScheduled#suppression_duration}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.suppressionEnabled">suppressionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#suppression_enabled SentinelAlertRuleScheduled#suppression_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.tactics">tactics</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#tactics SentinelAlertRuleScheduled#tactics}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.techniques">techniques</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#techniques SentinelAlertRuleScheduled#techniques}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts">SentinelAlertRuleScheduledTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.triggerOperator">triggerOperator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#trigger_operator SentinelAlertRuleScheduled#trigger_operator}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.triggerThreshold">triggerThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#trigger_threshold SentinelAlertRuleScheduled#trigger_threshold}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#display_name SentinelAlertRuleScheduled#display_name}.

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#log_analytics_workspace_id SentinelAlertRuleScheduled#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#name SentinelAlertRuleScheduled#name}.

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.query"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#query SentinelAlertRuleScheduled#query}.

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.severity"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#severity SentinelAlertRuleScheduled#severity}.

---

##### `alertDetailsOverride`<sup>Optional</sup> <a name="alertDetailsOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.alertDetailsOverride"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride">SentinelAlertRuleScheduledAlertDetailsOverride</a>>

alert_details_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#alert_details_override SentinelAlertRuleScheduled#alert_details_override}

---

##### `alertRuleTemplateGuid`<sup>Optional</sup> <a name="alertRuleTemplateGuid" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.alertRuleTemplateGuid"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#alert_rule_template_guid SentinelAlertRuleScheduled#alert_rule_template_guid}.

---

##### `alertRuleTemplateVersion`<sup>Optional</sup> <a name="alertRuleTemplateVersion" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.alertRuleTemplateVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#alert_rule_template_version SentinelAlertRuleScheduled#alert_rule_template_version}.

---

##### `customDetails`<sup>Optional</sup> <a name="customDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.customDetails"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#custom_details SentinelAlertRuleScheduled#custom_details}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#description SentinelAlertRuleScheduled#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#enabled SentinelAlertRuleScheduled#enabled}.

---

##### `entityMapping`<sup>Optional</sup> <a name="entityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.entityMapping"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMapping">SentinelAlertRuleScheduledEntityMapping</a>>

entity_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#entity_mapping SentinelAlertRuleScheduled#entity_mapping}

---

##### `eventGrouping`<sup>Optional</sup> <a name="eventGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.eventGrouping"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGrouping">SentinelAlertRuleScheduledEventGrouping</a>

event_grouping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#event_grouping SentinelAlertRuleScheduled#event_grouping}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#id SentinelAlertRuleScheduled#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incident`<sup>Optional</sup> <a name="incident" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.incident"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident">SentinelAlertRuleScheduledIncident</a>

incident block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#incident SentinelAlertRuleScheduled#incident}

---

##### `queryFrequency`<sup>Optional</sup> <a name="queryFrequency" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.queryFrequency"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#query_frequency SentinelAlertRuleScheduled#query_frequency}.

---

##### `queryPeriod`<sup>Optional</sup> <a name="queryPeriod" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.queryPeriod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#query_period SentinelAlertRuleScheduled#query_period}.

---

##### `sentinelEntityMapping`<sup>Optional</sup> <a name="sentinelEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.sentinelEntityMapping"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMapping">SentinelAlertRuleScheduledSentinelEntityMapping</a>>

sentinel_entity_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#sentinel_entity_mapping SentinelAlertRuleScheduled#sentinel_entity_mapping}

---

##### `suppressionDuration`<sup>Optional</sup> <a name="suppressionDuration" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.suppressionDuration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#suppression_duration SentinelAlertRuleScheduled#suppression_duration}.

---

##### `suppressionEnabled`<sup>Optional</sup> <a name="suppressionEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.suppressionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#suppression_enabled SentinelAlertRuleScheduled#suppression_enabled}.

---

##### `tactics`<sup>Optional</sup> <a name="tactics" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.tactics"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#tactics SentinelAlertRuleScheduled#tactics}.

---

##### `techniques`<sup>Optional</sup> <a name="techniques" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.techniques"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#techniques SentinelAlertRuleScheduled#techniques}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts">SentinelAlertRuleScheduledTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#timeouts SentinelAlertRuleScheduled#timeouts}

---

##### `triggerOperator`<sup>Optional</sup> <a name="triggerOperator" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.triggerOperator"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#trigger_operator SentinelAlertRuleScheduled#trigger_operator}.

---

##### `triggerThreshold`<sup>Optional</sup> <a name="triggerThreshold" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.triggerThreshold"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#trigger_threshold SentinelAlertRuleScheduled#trigger_threshold}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putAlertDetailsOverride">putAlertDetailsOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putEntityMapping">putEntityMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putEventGrouping">putEventGrouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putIncident">putIncident</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putSentinelEntityMapping">putSentinelEntityMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetAlertDetailsOverride">resetAlertDetailsOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetAlertRuleTemplateGuid">resetAlertRuleTemplateGuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetAlertRuleTemplateVersion">resetAlertRuleTemplateVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetCustomDetails">resetCustomDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetEntityMapping">resetEntityMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetEventGrouping">resetEventGrouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetIncident">resetIncident</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetQueryFrequency">resetQueryFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetQueryPeriod">resetQueryPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetSentinelEntityMapping">resetSentinelEntityMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetSuppressionDuration">resetSuppressionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetSuppressionEnabled">resetSuppressionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetTactics">resetTactics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetTechniques">resetTechniques</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetTriggerOperator">resetTriggerOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetTriggerThreshold">resetTriggerThreshold</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlertDetailsOverride` <a name="putAlertDetailsOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putAlertDetailsOverride"></a>

```java
public void putAlertDetailsOverride(IResolvable OR java.util.List<SentinelAlertRuleScheduledAlertDetailsOverride> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putAlertDetailsOverride.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride">SentinelAlertRuleScheduledAlertDetailsOverride</a>>

---

##### `putEntityMapping` <a name="putEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putEntityMapping"></a>

```java
public void putEntityMapping(IResolvable OR java.util.List<SentinelAlertRuleScheduledEntityMapping> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putEntityMapping.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMapping">SentinelAlertRuleScheduledEntityMapping</a>>

---

##### `putEventGrouping` <a name="putEventGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putEventGrouping"></a>

```java
public void putEventGrouping(SentinelAlertRuleScheduledEventGrouping value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putEventGrouping.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGrouping">SentinelAlertRuleScheduledEventGrouping</a>

---

##### `putIncident` <a name="putIncident" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putIncident"></a>

```java
public void putIncident(SentinelAlertRuleScheduledIncident value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putIncident.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident">SentinelAlertRuleScheduledIncident</a>

---

##### `putSentinelEntityMapping` <a name="putSentinelEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putSentinelEntityMapping"></a>

```java
public void putSentinelEntityMapping(IResolvable OR java.util.List<SentinelAlertRuleScheduledSentinelEntityMapping> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putSentinelEntityMapping.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMapping">SentinelAlertRuleScheduledSentinelEntityMapping</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putTimeouts"></a>

```java
public void putTimeouts(SentinelAlertRuleScheduledTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts">SentinelAlertRuleScheduledTimeouts</a>

---

##### `resetAlertDetailsOverride` <a name="resetAlertDetailsOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetAlertDetailsOverride"></a>

```java
public void resetAlertDetailsOverride()
```

##### `resetAlertRuleTemplateGuid` <a name="resetAlertRuleTemplateGuid" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetAlertRuleTemplateGuid"></a>

```java
public void resetAlertRuleTemplateGuid()
```

##### `resetAlertRuleTemplateVersion` <a name="resetAlertRuleTemplateVersion" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetAlertRuleTemplateVersion"></a>

```java
public void resetAlertRuleTemplateVersion()
```

##### `resetCustomDetails` <a name="resetCustomDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetCustomDetails"></a>

```java
public void resetCustomDetails()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEntityMapping` <a name="resetEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetEntityMapping"></a>

```java
public void resetEntityMapping()
```

##### `resetEventGrouping` <a name="resetEventGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetEventGrouping"></a>

```java
public void resetEventGrouping()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetId"></a>

```java
public void resetId()
```

##### `resetIncident` <a name="resetIncident" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetIncident"></a>

```java
public void resetIncident()
```

##### `resetQueryFrequency` <a name="resetQueryFrequency" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetQueryFrequency"></a>

```java
public void resetQueryFrequency()
```

##### `resetQueryPeriod` <a name="resetQueryPeriod" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetQueryPeriod"></a>

```java
public void resetQueryPeriod()
```

##### `resetSentinelEntityMapping` <a name="resetSentinelEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetSentinelEntityMapping"></a>

```java
public void resetSentinelEntityMapping()
```

##### `resetSuppressionDuration` <a name="resetSuppressionDuration" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetSuppressionDuration"></a>

```java
public void resetSuppressionDuration()
```

##### `resetSuppressionEnabled` <a name="resetSuppressionEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetSuppressionEnabled"></a>

```java
public void resetSuppressionEnabled()
```

##### `resetTactics` <a name="resetTactics" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetTactics"></a>

```java
public void resetTactics()
```

##### `resetTechniques` <a name="resetTechniques" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetTechniques"></a>

```java
public void resetTechniques()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTriggerOperator` <a name="resetTriggerOperator" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetTriggerOperator"></a>

```java
public void resetTriggerOperator()
```

##### `resetTriggerThreshold` <a name="resetTriggerThreshold" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetTriggerThreshold"></a>

```java
public void resetTriggerThreshold()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelAlertRuleScheduled resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduled;

SentinelAlertRuleScheduled.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduled;

SentinelAlertRuleScheduled.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduled;

SentinelAlertRuleScheduled.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduled;

SentinelAlertRuleScheduled.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SentinelAlertRuleScheduled.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SentinelAlertRuleScheduled resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SentinelAlertRuleScheduled to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SentinelAlertRuleScheduled that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SentinelAlertRuleScheduled to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.alertDetailsOverride">alertDetailsOverride</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList">SentinelAlertRuleScheduledAlertDetailsOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.entityMapping">entityMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList">SentinelAlertRuleScheduledEntityMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.eventGrouping">eventGrouping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference">SentinelAlertRuleScheduledEventGroupingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.incident">incident</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference">SentinelAlertRuleScheduledIncidentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.sentinelEntityMapping">sentinelEntityMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList">SentinelAlertRuleScheduledSentinelEntityMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference">SentinelAlertRuleScheduledTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.alertDetailsOverrideInput">alertDetailsOverrideInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride">SentinelAlertRuleScheduledAlertDetailsOverride</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.alertRuleTemplateGuidInput">alertRuleTemplateGuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.alertRuleTemplateVersionInput">alertRuleTemplateVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.customDetailsInput">customDetailsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.entityMappingInput">entityMappingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMapping">SentinelAlertRuleScheduledEntityMapping</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.eventGroupingInput">eventGroupingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGrouping">SentinelAlertRuleScheduledEventGrouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.incidentInput">incidentInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident">SentinelAlertRuleScheduledIncident</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.queryFrequencyInput">queryFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.queryPeriodInput">queryPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.sentinelEntityMappingInput">sentinelEntityMappingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMapping">SentinelAlertRuleScheduledSentinelEntityMapping</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.suppressionDurationInput">suppressionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.suppressionEnabledInput">suppressionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.tacticsInput">tacticsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.techniquesInput">techniquesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts">SentinelAlertRuleScheduledTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.triggerOperatorInput">triggerOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.triggerThresholdInput">triggerThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.alertRuleTemplateGuid">alertRuleTemplateGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.alertRuleTemplateVersion">alertRuleTemplateVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.customDetails">customDetails</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.queryFrequency">queryFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.queryPeriod">queryPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.suppressionDuration">suppressionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.suppressionEnabled">suppressionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.tactics">tactics</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.techniques">techniques</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.triggerOperator">triggerOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.triggerThreshold">triggerThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alertDetailsOverride`<sup>Required</sup> <a name="alertDetailsOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.alertDetailsOverride"></a>

```java
public SentinelAlertRuleScheduledAlertDetailsOverrideList getAlertDetailsOverride();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList">SentinelAlertRuleScheduledAlertDetailsOverrideList</a>

---

##### `entityMapping`<sup>Required</sup> <a name="entityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.entityMapping"></a>

```java
public SentinelAlertRuleScheduledEntityMappingList getEntityMapping();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList">SentinelAlertRuleScheduledEntityMappingList</a>

---

##### `eventGrouping`<sup>Required</sup> <a name="eventGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.eventGrouping"></a>

```java
public SentinelAlertRuleScheduledEventGroupingOutputReference getEventGrouping();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference">SentinelAlertRuleScheduledEventGroupingOutputReference</a>

---

##### `incident`<sup>Required</sup> <a name="incident" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.incident"></a>

```java
public SentinelAlertRuleScheduledIncidentOutputReference getIncident();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference">SentinelAlertRuleScheduledIncidentOutputReference</a>

---

##### `sentinelEntityMapping`<sup>Required</sup> <a name="sentinelEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.sentinelEntityMapping"></a>

```java
public SentinelAlertRuleScheduledSentinelEntityMappingList getSentinelEntityMapping();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList">SentinelAlertRuleScheduledSentinelEntityMappingList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.timeouts"></a>

```java
public SentinelAlertRuleScheduledTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference">SentinelAlertRuleScheduledTimeoutsOutputReference</a>

---

##### `alertDetailsOverrideInput`<sup>Optional</sup> <a name="alertDetailsOverrideInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.alertDetailsOverrideInput"></a>

```java
public java.lang.Object getAlertDetailsOverrideInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride">SentinelAlertRuleScheduledAlertDetailsOverride</a>>

---

##### `alertRuleTemplateGuidInput`<sup>Optional</sup> <a name="alertRuleTemplateGuidInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.alertRuleTemplateGuidInput"></a>

```java
public java.lang.String getAlertRuleTemplateGuidInput();
```

- *Type:* java.lang.String

---

##### `alertRuleTemplateVersionInput`<sup>Optional</sup> <a name="alertRuleTemplateVersionInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.alertRuleTemplateVersionInput"></a>

```java
public java.lang.String getAlertRuleTemplateVersionInput();
```

- *Type:* java.lang.String

---

##### `customDetailsInput`<sup>Optional</sup> <a name="customDetailsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.customDetailsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomDetailsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `entityMappingInput`<sup>Optional</sup> <a name="entityMappingInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.entityMappingInput"></a>

```java
public java.lang.Object getEntityMappingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMapping">SentinelAlertRuleScheduledEntityMapping</a>>

---

##### `eventGroupingInput`<sup>Optional</sup> <a name="eventGroupingInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.eventGroupingInput"></a>

```java
public SentinelAlertRuleScheduledEventGrouping getEventGroupingInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGrouping">SentinelAlertRuleScheduledEventGrouping</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `incidentInput`<sup>Optional</sup> <a name="incidentInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.incidentInput"></a>

```java
public SentinelAlertRuleScheduledIncident getIncidentInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident">SentinelAlertRuleScheduledIncident</a>

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.logAnalyticsWorkspaceIdInput"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryFrequencyInput`<sup>Optional</sup> <a name="queryFrequencyInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.queryFrequencyInput"></a>

```java
public java.lang.String getQueryFrequencyInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `queryPeriodInput`<sup>Optional</sup> <a name="queryPeriodInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.queryPeriodInput"></a>

```java
public java.lang.String getQueryPeriodInput();
```

- *Type:* java.lang.String

---

##### `sentinelEntityMappingInput`<sup>Optional</sup> <a name="sentinelEntityMappingInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.sentinelEntityMappingInput"></a>

```java
public java.lang.Object getSentinelEntityMappingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMapping">SentinelAlertRuleScheduledSentinelEntityMapping</a>>

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `suppressionDurationInput`<sup>Optional</sup> <a name="suppressionDurationInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.suppressionDurationInput"></a>

```java
public java.lang.String getSuppressionDurationInput();
```

- *Type:* java.lang.String

---

##### `suppressionEnabledInput`<sup>Optional</sup> <a name="suppressionEnabledInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.suppressionEnabledInput"></a>

```java
public java.lang.Object getSuppressionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tacticsInput`<sup>Optional</sup> <a name="tacticsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.tacticsInput"></a>

```java
public java.util.List<java.lang.String> getTacticsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `techniquesInput`<sup>Optional</sup> <a name="techniquesInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.techniquesInput"></a>

```java
public java.util.List<java.lang.String> getTechniquesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts">SentinelAlertRuleScheduledTimeouts</a>

---

##### `triggerOperatorInput`<sup>Optional</sup> <a name="triggerOperatorInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.triggerOperatorInput"></a>

```java
public java.lang.String getTriggerOperatorInput();
```

- *Type:* java.lang.String

---

##### `triggerThresholdInput`<sup>Optional</sup> <a name="triggerThresholdInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.triggerThresholdInput"></a>

```java
public java.lang.Number getTriggerThresholdInput();
```

- *Type:* java.lang.Number

---

##### `alertRuleTemplateGuid`<sup>Required</sup> <a name="alertRuleTemplateGuid" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.alertRuleTemplateGuid"></a>

```java
public java.lang.String getAlertRuleTemplateGuid();
```

- *Type:* java.lang.String

---

##### `alertRuleTemplateVersion`<sup>Required</sup> <a name="alertRuleTemplateVersion" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.alertRuleTemplateVersion"></a>

```java
public java.lang.String getAlertRuleTemplateVersion();
```

- *Type:* java.lang.String

---

##### `customDetails`<sup>Required</sup> <a name="customDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.customDetails"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomDetails();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `queryFrequency`<sup>Required</sup> <a name="queryFrequency" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.queryFrequency"></a>

```java
public java.lang.String getQueryFrequency();
```

- *Type:* java.lang.String

---

##### `queryPeriod`<sup>Required</sup> <a name="queryPeriod" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.queryPeriod"></a>

```java
public java.lang.String getQueryPeriod();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `suppressionDuration`<sup>Required</sup> <a name="suppressionDuration" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.suppressionDuration"></a>

```java
public java.lang.String getSuppressionDuration();
```

- *Type:* java.lang.String

---

##### `suppressionEnabled`<sup>Required</sup> <a name="suppressionEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.suppressionEnabled"></a>

```java
public java.lang.Object getSuppressionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tactics`<sup>Required</sup> <a name="tactics" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.tactics"></a>

```java
public java.util.List<java.lang.String> getTactics();
```

- *Type:* java.util.List<java.lang.String>

---

##### `techniques`<sup>Required</sup> <a name="techniques" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.techniques"></a>

```java
public java.util.List<java.lang.String> getTechniques();
```

- *Type:* java.util.List<java.lang.String>

---

##### `triggerOperator`<sup>Required</sup> <a name="triggerOperator" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.triggerOperator"></a>

```java
public java.lang.String getTriggerOperator();
```

- *Type:* java.lang.String

---

##### `triggerThreshold`<sup>Required</sup> <a name="triggerThreshold" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.triggerThreshold"></a>

```java
public java.lang.Number getTriggerThreshold();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelAlertRuleScheduledAlertDetailsOverride <a name="SentinelAlertRuleScheduledAlertDetailsOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduledAlertDetailsOverride;

SentinelAlertRuleScheduledAlertDetailsOverride.builder()
//  .descriptionFormat(java.lang.String)
//  .displayNameFormat(java.lang.String)
//  .dynamicProperty(IResolvable)
//  .dynamicProperty(java.util.List<SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty>)
//  .severityColumnName(java.lang.String)
//  .tacticsColumnName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride.property.descriptionFormat">descriptionFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#description_format SentinelAlertRuleScheduled#description_format}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride.property.displayNameFormat">displayNameFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#display_name_format SentinelAlertRuleScheduled#display_name_format}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride.property.dynamicProperty">dynamicProperty</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty">SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty</a>></code> | dynamic_property block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride.property.severityColumnName">severityColumnName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#severity_column_name SentinelAlertRuleScheduled#severity_column_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride.property.tacticsColumnName">tacticsColumnName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#tactics_column_name SentinelAlertRuleScheduled#tactics_column_name}. |

---

##### `descriptionFormat`<sup>Optional</sup> <a name="descriptionFormat" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride.property.descriptionFormat"></a>

```java
public java.lang.String getDescriptionFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#description_format SentinelAlertRuleScheduled#description_format}.

---

##### `displayNameFormat`<sup>Optional</sup> <a name="displayNameFormat" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride.property.displayNameFormat"></a>

```java
public java.lang.String getDisplayNameFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#display_name_format SentinelAlertRuleScheduled#display_name_format}.

---

##### `dynamicProperty`<sup>Optional</sup> <a name="dynamicProperty" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride.property.dynamicProperty"></a>

```java
public java.lang.Object getDynamicProperty();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty">SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty</a>>

dynamic_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#dynamic_property SentinelAlertRuleScheduled#dynamic_property}

---

##### `severityColumnName`<sup>Optional</sup> <a name="severityColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride.property.severityColumnName"></a>

```java
public java.lang.String getSeverityColumnName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#severity_column_name SentinelAlertRuleScheduled#severity_column_name}.

---

##### `tacticsColumnName`<sup>Optional</sup> <a name="tacticsColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride.property.tacticsColumnName"></a>

```java
public java.lang.String getTacticsColumnName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#tactics_column_name SentinelAlertRuleScheduled#tactics_column_name}.

---

### SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty <a name="SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty;

SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#name SentinelAlertRuleScheduled#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#value SentinelAlertRuleScheduled#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#name SentinelAlertRuleScheduled#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#value SentinelAlertRuleScheduled#value}.

---

### SentinelAlertRuleScheduledConfig <a name="SentinelAlertRuleScheduledConfig" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduledConfig;

SentinelAlertRuleScheduledConfig.builder()
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
    .displayName(java.lang.String)
    .logAnalyticsWorkspaceId(java.lang.String)
    .name(java.lang.String)
    .query(java.lang.String)
    .severity(java.lang.String)
//  .alertDetailsOverride(IResolvable)
//  .alertDetailsOverride(java.util.List<SentinelAlertRuleScheduledAlertDetailsOverride>)
//  .alertRuleTemplateGuid(java.lang.String)
//  .alertRuleTemplateVersion(java.lang.String)
//  .customDetails(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .entityMapping(IResolvable)
//  .entityMapping(java.util.List<SentinelAlertRuleScheduledEntityMapping>)
//  .eventGrouping(SentinelAlertRuleScheduledEventGrouping)
//  .id(java.lang.String)
//  .incident(SentinelAlertRuleScheduledIncident)
//  .queryFrequency(java.lang.String)
//  .queryPeriod(java.lang.String)
//  .sentinelEntityMapping(IResolvable)
//  .sentinelEntityMapping(java.util.List<SentinelAlertRuleScheduledSentinelEntityMapping>)
//  .suppressionDuration(java.lang.String)
//  .suppressionEnabled(java.lang.Boolean)
//  .suppressionEnabled(IResolvable)
//  .tactics(java.util.List<java.lang.String>)
//  .techniques(java.util.List<java.lang.String>)
//  .timeouts(SentinelAlertRuleScheduledTimeouts)
//  .triggerOperator(java.lang.String)
//  .triggerThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#display_name SentinelAlertRuleScheduled#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#log_analytics_workspace_id SentinelAlertRuleScheduled#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#name SentinelAlertRuleScheduled#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.query">query</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#query SentinelAlertRuleScheduled#query}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.severity">severity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#severity SentinelAlertRuleScheduled#severity}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.alertDetailsOverride">alertDetailsOverride</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride">SentinelAlertRuleScheduledAlertDetailsOverride</a>></code> | alert_details_override block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.alertRuleTemplateGuid">alertRuleTemplateGuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#alert_rule_template_guid SentinelAlertRuleScheduled#alert_rule_template_guid}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.alertRuleTemplateVersion">alertRuleTemplateVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#alert_rule_template_version SentinelAlertRuleScheduled#alert_rule_template_version}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.customDetails">customDetails</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#custom_details SentinelAlertRuleScheduled#custom_details}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#description SentinelAlertRuleScheduled#description}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#enabled SentinelAlertRuleScheduled#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.entityMapping">entityMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMapping">SentinelAlertRuleScheduledEntityMapping</a>></code> | entity_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.eventGrouping">eventGrouping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGrouping">SentinelAlertRuleScheduledEventGrouping</a></code> | event_grouping block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#id SentinelAlertRuleScheduled#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.incident">incident</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident">SentinelAlertRuleScheduledIncident</a></code> | incident block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.queryFrequency">queryFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#query_frequency SentinelAlertRuleScheduled#query_frequency}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.queryPeriod">queryPeriod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#query_period SentinelAlertRuleScheduled#query_period}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.sentinelEntityMapping">sentinelEntityMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMapping">SentinelAlertRuleScheduledSentinelEntityMapping</a>></code> | sentinel_entity_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.suppressionDuration">suppressionDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#suppression_duration SentinelAlertRuleScheduled#suppression_duration}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.suppressionEnabled">suppressionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#suppression_enabled SentinelAlertRuleScheduled#suppression_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.tactics">tactics</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#tactics SentinelAlertRuleScheduled#tactics}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.techniques">techniques</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#techniques SentinelAlertRuleScheduled#techniques}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts">SentinelAlertRuleScheduledTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.triggerOperator">triggerOperator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#trigger_operator SentinelAlertRuleScheduled#trigger_operator}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.triggerThreshold">triggerThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#trigger_threshold SentinelAlertRuleScheduled#trigger_threshold}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#display_name SentinelAlertRuleScheduled#display_name}.

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#log_analytics_workspace_id SentinelAlertRuleScheduled#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#name SentinelAlertRuleScheduled#name}.

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#query SentinelAlertRuleScheduled#query}.

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#severity SentinelAlertRuleScheduled#severity}.

---

##### `alertDetailsOverride`<sup>Optional</sup> <a name="alertDetailsOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.alertDetailsOverride"></a>

```java
public java.lang.Object getAlertDetailsOverride();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride">SentinelAlertRuleScheduledAlertDetailsOverride</a>>

alert_details_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#alert_details_override SentinelAlertRuleScheduled#alert_details_override}

---

##### `alertRuleTemplateGuid`<sup>Optional</sup> <a name="alertRuleTemplateGuid" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.alertRuleTemplateGuid"></a>

```java
public java.lang.String getAlertRuleTemplateGuid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#alert_rule_template_guid SentinelAlertRuleScheduled#alert_rule_template_guid}.

---

##### `alertRuleTemplateVersion`<sup>Optional</sup> <a name="alertRuleTemplateVersion" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.alertRuleTemplateVersion"></a>

```java
public java.lang.String getAlertRuleTemplateVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#alert_rule_template_version SentinelAlertRuleScheduled#alert_rule_template_version}.

---

##### `customDetails`<sup>Optional</sup> <a name="customDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.customDetails"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomDetails();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#custom_details SentinelAlertRuleScheduled#custom_details}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#description SentinelAlertRuleScheduled#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#enabled SentinelAlertRuleScheduled#enabled}.

---

##### `entityMapping`<sup>Optional</sup> <a name="entityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.entityMapping"></a>

```java
public java.lang.Object getEntityMapping();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMapping">SentinelAlertRuleScheduledEntityMapping</a>>

entity_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#entity_mapping SentinelAlertRuleScheduled#entity_mapping}

---

##### `eventGrouping`<sup>Optional</sup> <a name="eventGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.eventGrouping"></a>

```java
public SentinelAlertRuleScheduledEventGrouping getEventGrouping();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGrouping">SentinelAlertRuleScheduledEventGrouping</a>

event_grouping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#event_grouping SentinelAlertRuleScheduled#event_grouping}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#id SentinelAlertRuleScheduled#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incident`<sup>Optional</sup> <a name="incident" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.incident"></a>

```java
public SentinelAlertRuleScheduledIncident getIncident();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident">SentinelAlertRuleScheduledIncident</a>

incident block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#incident SentinelAlertRuleScheduled#incident}

---

##### `queryFrequency`<sup>Optional</sup> <a name="queryFrequency" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.queryFrequency"></a>

```java
public java.lang.String getQueryFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#query_frequency SentinelAlertRuleScheduled#query_frequency}.

---

##### `queryPeriod`<sup>Optional</sup> <a name="queryPeriod" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.queryPeriod"></a>

```java
public java.lang.String getQueryPeriod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#query_period SentinelAlertRuleScheduled#query_period}.

---

##### `sentinelEntityMapping`<sup>Optional</sup> <a name="sentinelEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.sentinelEntityMapping"></a>

```java
public java.lang.Object getSentinelEntityMapping();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMapping">SentinelAlertRuleScheduledSentinelEntityMapping</a>>

sentinel_entity_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#sentinel_entity_mapping SentinelAlertRuleScheduled#sentinel_entity_mapping}

---

##### `suppressionDuration`<sup>Optional</sup> <a name="suppressionDuration" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.suppressionDuration"></a>

```java
public java.lang.String getSuppressionDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#suppression_duration SentinelAlertRuleScheduled#suppression_duration}.

---

##### `suppressionEnabled`<sup>Optional</sup> <a name="suppressionEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.suppressionEnabled"></a>

```java
public java.lang.Object getSuppressionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#suppression_enabled SentinelAlertRuleScheduled#suppression_enabled}.

---

##### `tactics`<sup>Optional</sup> <a name="tactics" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.tactics"></a>

```java
public java.util.List<java.lang.String> getTactics();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#tactics SentinelAlertRuleScheduled#tactics}.

---

##### `techniques`<sup>Optional</sup> <a name="techniques" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.techniques"></a>

```java
public java.util.List<java.lang.String> getTechniques();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#techniques SentinelAlertRuleScheduled#techniques}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.timeouts"></a>

```java
public SentinelAlertRuleScheduledTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts">SentinelAlertRuleScheduledTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#timeouts SentinelAlertRuleScheduled#timeouts}

---

##### `triggerOperator`<sup>Optional</sup> <a name="triggerOperator" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.triggerOperator"></a>

```java
public java.lang.String getTriggerOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#trigger_operator SentinelAlertRuleScheduled#trigger_operator}.

---

##### `triggerThreshold`<sup>Optional</sup> <a name="triggerThreshold" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.triggerThreshold"></a>

```java
public java.lang.Number getTriggerThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#trigger_threshold SentinelAlertRuleScheduled#trigger_threshold}.

---

### SentinelAlertRuleScheduledEntityMapping <a name="SentinelAlertRuleScheduledEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduledEntityMapping;

SentinelAlertRuleScheduledEntityMapping.builder()
    .entityType(java.lang.String)
    .fieldMapping(IResolvable)
    .fieldMapping(java.util.List<SentinelAlertRuleScheduledEntityMappingFieldMapping>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMapping.property.entityType">entityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#entity_type SentinelAlertRuleScheduled#entity_type}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMapping.property.fieldMapping">fieldMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMapping">SentinelAlertRuleScheduledEntityMappingFieldMapping</a>></code> | field_mapping block. |

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMapping.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#entity_type SentinelAlertRuleScheduled#entity_type}.

---

##### `fieldMapping`<sup>Required</sup> <a name="fieldMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMapping.property.fieldMapping"></a>

```java
public java.lang.Object getFieldMapping();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMapping">SentinelAlertRuleScheduledEntityMappingFieldMapping</a>>

field_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#field_mapping SentinelAlertRuleScheduled#field_mapping}

---

### SentinelAlertRuleScheduledEntityMappingFieldMapping <a name="SentinelAlertRuleScheduledEntityMappingFieldMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduledEntityMappingFieldMapping;

SentinelAlertRuleScheduledEntityMappingFieldMapping.builder()
    .columnName(java.lang.String)
    .identifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMapping.property.columnName">columnName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#column_name SentinelAlertRuleScheduled#column_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMapping.property.identifier">identifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#identifier SentinelAlertRuleScheduled#identifier}. |

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMapping.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#column_name SentinelAlertRuleScheduled#column_name}.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMapping.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#identifier SentinelAlertRuleScheduled#identifier}.

---

### SentinelAlertRuleScheduledEventGrouping <a name="SentinelAlertRuleScheduledEventGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGrouping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGrouping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduledEventGrouping;

SentinelAlertRuleScheduledEventGrouping.builder()
    .aggregationMethod(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGrouping.property.aggregationMethod">aggregationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#aggregation_method SentinelAlertRuleScheduled#aggregation_method}. |

---

##### `aggregationMethod`<sup>Required</sup> <a name="aggregationMethod" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGrouping.property.aggregationMethod"></a>

```java
public java.lang.String getAggregationMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#aggregation_method SentinelAlertRuleScheduled#aggregation_method}.

---

### SentinelAlertRuleScheduledIncident <a name="SentinelAlertRuleScheduledIncident" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduledIncident;

SentinelAlertRuleScheduledIncident.builder()
    .createIncidentEnabled(java.lang.Boolean)
    .createIncidentEnabled(IResolvable)
    .grouping(SentinelAlertRuleScheduledIncidentGrouping)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident.property.createIncidentEnabled">createIncidentEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#create_incident_enabled SentinelAlertRuleScheduled#create_incident_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident.property.grouping">grouping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping">SentinelAlertRuleScheduledIncidentGrouping</a></code> | grouping block. |

---

##### `createIncidentEnabled`<sup>Required</sup> <a name="createIncidentEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident.property.createIncidentEnabled"></a>

```java
public java.lang.Object getCreateIncidentEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#create_incident_enabled SentinelAlertRuleScheduled#create_incident_enabled}.

---

##### `grouping`<sup>Required</sup> <a name="grouping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident.property.grouping"></a>

```java
public SentinelAlertRuleScheduledIncidentGrouping getGrouping();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping">SentinelAlertRuleScheduledIncidentGrouping</a>

grouping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#grouping SentinelAlertRuleScheduled#grouping}

---

### SentinelAlertRuleScheduledIncidentGrouping <a name="SentinelAlertRuleScheduledIncidentGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduledIncidentGrouping;

SentinelAlertRuleScheduledIncidentGrouping.builder()
//  .byAlertDetails(java.util.List<java.lang.String>)
//  .byCustomDetails(java.util.List<java.lang.String>)
//  .byEntities(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .entityMatchingMethod(java.lang.String)
//  .lookbackDuration(java.lang.String)
//  .reopenClosedIncidents(java.lang.Boolean)
//  .reopenClosedIncidents(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.byAlertDetails">byAlertDetails</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#by_alert_details SentinelAlertRuleScheduled#by_alert_details}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.byCustomDetails">byCustomDetails</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#by_custom_details SentinelAlertRuleScheduled#by_custom_details}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.byEntities">byEntities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#by_entities SentinelAlertRuleScheduled#by_entities}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#enabled SentinelAlertRuleScheduled#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.entityMatchingMethod">entityMatchingMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#entity_matching_method SentinelAlertRuleScheduled#entity_matching_method}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.lookbackDuration">lookbackDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#lookback_duration SentinelAlertRuleScheduled#lookback_duration}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.reopenClosedIncidents">reopenClosedIncidents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#reopen_closed_incidents SentinelAlertRuleScheduled#reopen_closed_incidents}. |

---

##### `byAlertDetails`<sup>Optional</sup> <a name="byAlertDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.byAlertDetails"></a>

```java
public java.util.List<java.lang.String> getByAlertDetails();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#by_alert_details SentinelAlertRuleScheduled#by_alert_details}.

---

##### `byCustomDetails`<sup>Optional</sup> <a name="byCustomDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.byCustomDetails"></a>

```java
public java.util.List<java.lang.String> getByCustomDetails();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#by_custom_details SentinelAlertRuleScheduled#by_custom_details}.

---

##### `byEntities`<sup>Optional</sup> <a name="byEntities" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.byEntities"></a>

```java
public java.util.List<java.lang.String> getByEntities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#by_entities SentinelAlertRuleScheduled#by_entities}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#enabled SentinelAlertRuleScheduled#enabled}.

---

##### `entityMatchingMethod`<sup>Optional</sup> <a name="entityMatchingMethod" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.entityMatchingMethod"></a>

```java
public java.lang.String getEntityMatchingMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#entity_matching_method SentinelAlertRuleScheduled#entity_matching_method}.

---

##### `lookbackDuration`<sup>Optional</sup> <a name="lookbackDuration" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.lookbackDuration"></a>

```java
public java.lang.String getLookbackDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#lookback_duration SentinelAlertRuleScheduled#lookback_duration}.

---

##### `reopenClosedIncidents`<sup>Optional</sup> <a name="reopenClosedIncidents" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.reopenClosedIncidents"></a>

```java
public java.lang.Object getReopenClosedIncidents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#reopen_closed_incidents SentinelAlertRuleScheduled#reopen_closed_incidents}.

---

### SentinelAlertRuleScheduledSentinelEntityMapping <a name="SentinelAlertRuleScheduledSentinelEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduledSentinelEntityMapping;

SentinelAlertRuleScheduledSentinelEntityMapping.builder()
    .columnName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMapping.property.columnName">columnName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#column_name SentinelAlertRuleScheduled#column_name}. |

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMapping.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#column_name SentinelAlertRuleScheduled#column_name}.

---

### SentinelAlertRuleScheduledTimeouts <a name="SentinelAlertRuleScheduledTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduledTimeouts;

SentinelAlertRuleScheduledTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#create SentinelAlertRuleScheduled#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#delete SentinelAlertRuleScheduled#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#read SentinelAlertRuleScheduled#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#update SentinelAlertRuleScheduled#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#create SentinelAlertRuleScheduled#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#delete SentinelAlertRuleScheduled#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#read SentinelAlertRuleScheduled#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_scheduled#update SentinelAlertRuleScheduled#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList <a name="SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList;

new SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.get"></a>

```java
public SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty">SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty">SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty</a>>

---


### SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference <a name="SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference;

new SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty">SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty">SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty</a>

---


### SentinelAlertRuleScheduledAlertDetailsOverrideList <a name="SentinelAlertRuleScheduledAlertDetailsOverrideList" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList;

new SentinelAlertRuleScheduledAlertDetailsOverrideList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.get"></a>

```java
public SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride">SentinelAlertRuleScheduledAlertDetailsOverride</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride">SentinelAlertRuleScheduledAlertDetailsOverride</a>>

---


### SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference <a name="SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference;

new SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.putDynamicProperty">putDynamicProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resetDescriptionFormat">resetDescriptionFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resetDisplayNameFormat">resetDisplayNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resetDynamicProperty">resetDynamicProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resetSeverityColumnName">resetSeverityColumnName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resetTacticsColumnName">resetTacticsColumnName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDynamicProperty` <a name="putDynamicProperty" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.putDynamicProperty"></a>

```java
public void putDynamicProperty(IResolvable OR java.util.List<SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.putDynamicProperty.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty">SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty</a>>

---

##### `resetDescriptionFormat` <a name="resetDescriptionFormat" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resetDescriptionFormat"></a>

```java
public void resetDescriptionFormat()
```

##### `resetDisplayNameFormat` <a name="resetDisplayNameFormat" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resetDisplayNameFormat"></a>

```java
public void resetDisplayNameFormat()
```

##### `resetDynamicProperty` <a name="resetDynamicProperty" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resetDynamicProperty"></a>

```java
public void resetDynamicProperty()
```

##### `resetSeverityColumnName` <a name="resetSeverityColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resetSeverityColumnName"></a>

```java
public void resetSeverityColumnName()
```

##### `resetTacticsColumnName` <a name="resetTacticsColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resetTacticsColumnName"></a>

```java
public void resetTacticsColumnName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.dynamicProperty">dynamicProperty</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList">SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.descriptionFormatInput">descriptionFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.displayNameFormatInput">displayNameFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.dynamicPropertyInput">dynamicPropertyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty">SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.severityColumnNameInput">severityColumnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.tacticsColumnNameInput">tacticsColumnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.descriptionFormat">descriptionFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.displayNameFormat">displayNameFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.severityColumnName">severityColumnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.tacticsColumnName">tacticsColumnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride">SentinelAlertRuleScheduledAlertDetailsOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dynamicProperty`<sup>Required</sup> <a name="dynamicProperty" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.dynamicProperty"></a>

```java
public SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList getDynamicProperty();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList">SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList</a>

---

##### `descriptionFormatInput`<sup>Optional</sup> <a name="descriptionFormatInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.descriptionFormatInput"></a>

```java
public java.lang.String getDescriptionFormatInput();
```

- *Type:* java.lang.String

---

##### `displayNameFormatInput`<sup>Optional</sup> <a name="displayNameFormatInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.displayNameFormatInput"></a>

```java
public java.lang.String getDisplayNameFormatInput();
```

- *Type:* java.lang.String

---

##### `dynamicPropertyInput`<sup>Optional</sup> <a name="dynamicPropertyInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.dynamicPropertyInput"></a>

```java
public java.lang.Object getDynamicPropertyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty">SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty</a>>

---

##### `severityColumnNameInput`<sup>Optional</sup> <a name="severityColumnNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.severityColumnNameInput"></a>

```java
public java.lang.String getSeverityColumnNameInput();
```

- *Type:* java.lang.String

---

##### `tacticsColumnNameInput`<sup>Optional</sup> <a name="tacticsColumnNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.tacticsColumnNameInput"></a>

```java
public java.lang.String getTacticsColumnNameInput();
```

- *Type:* java.lang.String

---

##### `descriptionFormat`<sup>Required</sup> <a name="descriptionFormat" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.descriptionFormat"></a>

```java
public java.lang.String getDescriptionFormat();
```

- *Type:* java.lang.String

---

##### `displayNameFormat`<sup>Required</sup> <a name="displayNameFormat" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.displayNameFormat"></a>

```java
public java.lang.String getDisplayNameFormat();
```

- *Type:* java.lang.String

---

##### `severityColumnName`<sup>Required</sup> <a name="severityColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.severityColumnName"></a>

```java
public java.lang.String getSeverityColumnName();
```

- *Type:* java.lang.String

---

##### `tacticsColumnName`<sup>Required</sup> <a name="tacticsColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.tacticsColumnName"></a>

```java
public java.lang.String getTacticsColumnName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride">SentinelAlertRuleScheduledAlertDetailsOverride</a>

---


### SentinelAlertRuleScheduledEntityMappingFieldMappingList <a name="SentinelAlertRuleScheduledEntityMappingFieldMappingList" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList;

new SentinelAlertRuleScheduledEntityMappingFieldMappingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.get"></a>

```java
public SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMapping">SentinelAlertRuleScheduledEntityMappingFieldMapping</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMapping">SentinelAlertRuleScheduledEntityMappingFieldMapping</a>>

---


### SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference <a name="SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference;

new SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.columnName">columnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMapping">SentinelAlertRuleScheduledEntityMappingFieldMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.columnNameInput"></a>

```java
public java.lang.String getColumnNameInput();
```

- *Type:* java.lang.String

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMapping">SentinelAlertRuleScheduledEntityMappingFieldMapping</a>

---


### SentinelAlertRuleScheduledEntityMappingList <a name="SentinelAlertRuleScheduledEntityMappingList" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduledEntityMappingList;

new SentinelAlertRuleScheduledEntityMappingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.get"></a>

```java
public SentinelAlertRuleScheduledEntityMappingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMapping">SentinelAlertRuleScheduledEntityMapping</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMapping">SentinelAlertRuleScheduledEntityMapping</a>>

---


### SentinelAlertRuleScheduledEntityMappingOutputReference <a name="SentinelAlertRuleScheduledEntityMappingOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduledEntityMappingOutputReference;

new SentinelAlertRuleScheduledEntityMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.putFieldMapping">putFieldMapping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldMapping` <a name="putFieldMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.putFieldMapping"></a>

```java
public void putFieldMapping(IResolvable OR java.util.List<SentinelAlertRuleScheduledEntityMappingFieldMapping> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.putFieldMapping.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMapping">SentinelAlertRuleScheduledEntityMappingFieldMapping</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.fieldMapping">fieldMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList">SentinelAlertRuleScheduledEntityMappingFieldMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.entityTypeInput">entityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.fieldMappingInput">fieldMappingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMapping">SentinelAlertRuleScheduledEntityMappingFieldMapping</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMapping">SentinelAlertRuleScheduledEntityMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldMapping`<sup>Required</sup> <a name="fieldMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.fieldMapping"></a>

```java
public SentinelAlertRuleScheduledEntityMappingFieldMappingList getFieldMapping();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList">SentinelAlertRuleScheduledEntityMappingFieldMappingList</a>

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.entityTypeInput"></a>

```java
public java.lang.String getEntityTypeInput();
```

- *Type:* java.lang.String

---

##### `fieldMappingInput`<sup>Optional</sup> <a name="fieldMappingInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.fieldMappingInput"></a>

```java
public java.lang.Object getFieldMappingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMapping">SentinelAlertRuleScheduledEntityMappingFieldMapping</a>>

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMapping">SentinelAlertRuleScheduledEntityMapping</a>

---


### SentinelAlertRuleScheduledEventGroupingOutputReference <a name="SentinelAlertRuleScheduledEventGroupingOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduledEventGroupingOutputReference;

new SentinelAlertRuleScheduledEventGroupingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.property.aggregationMethodInput">aggregationMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.property.aggregationMethod">aggregationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGrouping">SentinelAlertRuleScheduledEventGrouping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregationMethodInput`<sup>Optional</sup> <a name="aggregationMethodInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.property.aggregationMethodInput"></a>

```java
public java.lang.String getAggregationMethodInput();
```

- *Type:* java.lang.String

---

##### `aggregationMethod`<sup>Required</sup> <a name="aggregationMethod" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.property.aggregationMethod"></a>

```java
public java.lang.String getAggregationMethod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.property.internalValue"></a>

```java
public SentinelAlertRuleScheduledEventGrouping getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGrouping">SentinelAlertRuleScheduledEventGrouping</a>

---


### SentinelAlertRuleScheduledIncidentGroupingOutputReference <a name="SentinelAlertRuleScheduledIncidentGroupingOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference;

new SentinelAlertRuleScheduledIncidentGroupingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetByAlertDetails">resetByAlertDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetByCustomDetails">resetByCustomDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetByEntities">resetByEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetEntityMatchingMethod">resetEntityMatchingMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetLookbackDuration">resetLookbackDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetReopenClosedIncidents">resetReopenClosedIncidents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetByAlertDetails` <a name="resetByAlertDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetByAlertDetails"></a>

```java
public void resetByAlertDetails()
```

##### `resetByCustomDetails` <a name="resetByCustomDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetByCustomDetails"></a>

```java
public void resetByCustomDetails()
```

##### `resetByEntities` <a name="resetByEntities" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetByEntities"></a>

```java
public void resetByEntities()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEntityMatchingMethod` <a name="resetEntityMatchingMethod" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetEntityMatchingMethod"></a>

```java
public void resetEntityMatchingMethod()
```

##### `resetLookbackDuration` <a name="resetLookbackDuration" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetLookbackDuration"></a>

```java
public void resetLookbackDuration()
```

##### `resetReopenClosedIncidents` <a name="resetReopenClosedIncidents" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetReopenClosedIncidents"></a>

```java
public void resetReopenClosedIncidents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.byAlertDetailsInput">byAlertDetailsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.byCustomDetailsInput">byCustomDetailsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.byEntitiesInput">byEntitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.entityMatchingMethodInput">entityMatchingMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.lookbackDurationInput">lookbackDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.reopenClosedIncidentsInput">reopenClosedIncidentsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.byAlertDetails">byAlertDetails</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.byCustomDetails">byCustomDetails</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.byEntities">byEntities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.entityMatchingMethod">entityMatchingMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.lookbackDuration">lookbackDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.reopenClosedIncidents">reopenClosedIncidents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping">SentinelAlertRuleScheduledIncidentGrouping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `byAlertDetailsInput`<sup>Optional</sup> <a name="byAlertDetailsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.byAlertDetailsInput"></a>

```java
public java.util.List<java.lang.String> getByAlertDetailsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `byCustomDetailsInput`<sup>Optional</sup> <a name="byCustomDetailsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.byCustomDetailsInput"></a>

```java
public java.util.List<java.lang.String> getByCustomDetailsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `byEntitiesInput`<sup>Optional</sup> <a name="byEntitiesInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.byEntitiesInput"></a>

```java
public java.util.List<java.lang.String> getByEntitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `entityMatchingMethodInput`<sup>Optional</sup> <a name="entityMatchingMethodInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.entityMatchingMethodInput"></a>

```java
public java.lang.String getEntityMatchingMethodInput();
```

- *Type:* java.lang.String

---

##### `lookbackDurationInput`<sup>Optional</sup> <a name="lookbackDurationInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.lookbackDurationInput"></a>

```java
public java.lang.String getLookbackDurationInput();
```

- *Type:* java.lang.String

---

##### `reopenClosedIncidentsInput`<sup>Optional</sup> <a name="reopenClosedIncidentsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.reopenClosedIncidentsInput"></a>

```java
public java.lang.Object getReopenClosedIncidentsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `byAlertDetails`<sup>Required</sup> <a name="byAlertDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.byAlertDetails"></a>

```java
public java.util.List<java.lang.String> getByAlertDetails();
```

- *Type:* java.util.List<java.lang.String>

---

##### `byCustomDetails`<sup>Required</sup> <a name="byCustomDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.byCustomDetails"></a>

```java
public java.util.List<java.lang.String> getByCustomDetails();
```

- *Type:* java.util.List<java.lang.String>

---

##### `byEntities`<sup>Required</sup> <a name="byEntities" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.byEntities"></a>

```java
public java.util.List<java.lang.String> getByEntities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `entityMatchingMethod`<sup>Required</sup> <a name="entityMatchingMethod" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.entityMatchingMethod"></a>

```java
public java.lang.String getEntityMatchingMethod();
```

- *Type:* java.lang.String

---

##### `lookbackDuration`<sup>Required</sup> <a name="lookbackDuration" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.lookbackDuration"></a>

```java
public java.lang.String getLookbackDuration();
```

- *Type:* java.lang.String

---

##### `reopenClosedIncidents`<sup>Required</sup> <a name="reopenClosedIncidents" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.reopenClosedIncidents"></a>

```java
public java.lang.Object getReopenClosedIncidents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.internalValue"></a>

```java
public SentinelAlertRuleScheduledIncidentGrouping getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping">SentinelAlertRuleScheduledIncidentGrouping</a>

---


### SentinelAlertRuleScheduledIncidentOutputReference <a name="SentinelAlertRuleScheduledIncidentOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduledIncidentOutputReference;

new SentinelAlertRuleScheduledIncidentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.putGrouping">putGrouping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGrouping` <a name="putGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.putGrouping"></a>

```java
public void putGrouping(SentinelAlertRuleScheduledIncidentGrouping value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.putGrouping.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping">SentinelAlertRuleScheduledIncidentGrouping</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.grouping">grouping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference">SentinelAlertRuleScheduledIncidentGroupingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.createIncidentEnabledInput">createIncidentEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.groupingInput">groupingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping">SentinelAlertRuleScheduledIncidentGrouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.createIncidentEnabled">createIncidentEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident">SentinelAlertRuleScheduledIncident</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `grouping`<sup>Required</sup> <a name="grouping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.grouping"></a>

```java
public SentinelAlertRuleScheduledIncidentGroupingOutputReference getGrouping();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference">SentinelAlertRuleScheduledIncidentGroupingOutputReference</a>

---

##### `createIncidentEnabledInput`<sup>Optional</sup> <a name="createIncidentEnabledInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.createIncidentEnabledInput"></a>

```java
public java.lang.Object getCreateIncidentEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupingInput`<sup>Optional</sup> <a name="groupingInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.groupingInput"></a>

```java
public SentinelAlertRuleScheduledIncidentGrouping getGroupingInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping">SentinelAlertRuleScheduledIncidentGrouping</a>

---

##### `createIncidentEnabled`<sup>Required</sup> <a name="createIncidentEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.createIncidentEnabled"></a>

```java
public java.lang.Object getCreateIncidentEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.internalValue"></a>

```java
public SentinelAlertRuleScheduledIncident getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident">SentinelAlertRuleScheduledIncident</a>

---


### SentinelAlertRuleScheduledSentinelEntityMappingList <a name="SentinelAlertRuleScheduledSentinelEntityMappingList" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduledSentinelEntityMappingList;

new SentinelAlertRuleScheduledSentinelEntityMappingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.get"></a>

```java
public SentinelAlertRuleScheduledSentinelEntityMappingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMapping">SentinelAlertRuleScheduledSentinelEntityMapping</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMapping">SentinelAlertRuleScheduledSentinelEntityMapping</a>>

---


### SentinelAlertRuleScheduledSentinelEntityMappingOutputReference <a name="SentinelAlertRuleScheduledSentinelEntityMappingOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference;

new SentinelAlertRuleScheduledSentinelEntityMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.property.columnName">columnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMapping">SentinelAlertRuleScheduledSentinelEntityMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.property.columnNameInput"></a>

```java
public java.lang.String getColumnNameInput();
```

- *Type:* java.lang.String

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMapping">SentinelAlertRuleScheduledSentinelEntityMapping</a>

---


### SentinelAlertRuleScheduledTimeoutsOutputReference <a name="SentinelAlertRuleScheduledTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_alert_rule_scheduled.SentinelAlertRuleScheduledTimeoutsOutputReference;

new SentinelAlertRuleScheduledTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts">SentinelAlertRuleScheduledTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts">SentinelAlertRuleScheduledTimeouts</a>

---



