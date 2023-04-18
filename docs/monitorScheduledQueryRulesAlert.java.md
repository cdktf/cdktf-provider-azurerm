# `azurerm_monitor_scheduled_query_rules_alert`

Refer to the Terraform Registory for docs: [`azurerm_monitor_scheduled_query_rules_alert`](https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert).

# `monitorScheduledQueryRulesAlert` Submodule <a name="`monitorScheduledQueryRulesAlert` Submodule" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorScheduledQueryRulesAlert <a name="MonitorScheduledQueryRulesAlert" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert azurerm_monitor_scheduled_query_rules_alert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_scheduled_query_rules_alert.MonitorScheduledQueryRulesAlert;

MonitorScheduledQueryRulesAlert.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .action(MonitorScheduledQueryRulesAlertAction)
    .dataSourceId(java.lang.String)
    .frequency(java.lang.Number)
    .location(java.lang.String)
    .name(java.lang.String)
    .query(java.lang.String)
    .resourceGroupName(java.lang.String)
    .timeWindow(java.lang.Number)
    .trigger(MonitorScheduledQueryRulesAlertTrigger)
//  .authorizedResourceIds(java.util.List<java.lang.String>)
//  .autoMitigationEnabled(java.lang.Boolean)
//  .autoMitigationEnabled(IResolvable)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .queryType(java.lang.String)
//  .severity(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .throttling(java.lang.Number)
//  .timeouts(MonitorScheduledQueryRulesAlertTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.action">action</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction">MonitorScheduledQueryRulesAlertAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#data_source_id MonitorScheduledQueryRulesAlert#data_source_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.frequency">frequency</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#frequency MonitorScheduledQueryRulesAlert#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#location MonitorScheduledQueryRulesAlert#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#name MonitorScheduledQueryRulesAlert#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.query">query</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#query MonitorScheduledQueryRulesAlert#query}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#resource_group_name MonitorScheduledQueryRulesAlert#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.timeWindow">timeWindow</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#time_window MonitorScheduledQueryRulesAlert#time_window}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger">MonitorScheduledQueryRulesAlertTrigger</a></code> | trigger block. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.authorizedResourceIds">authorizedResourceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#authorized_resource_ids MonitorScheduledQueryRulesAlert#authorized_resource_ids}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.autoMitigationEnabled">autoMitigationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#auto_mitigation_enabled MonitorScheduledQueryRulesAlert#auto_mitigation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#description MonitorScheduledQueryRulesAlert#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#enabled MonitorScheduledQueryRulesAlert#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#id MonitorScheduledQueryRulesAlert#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.queryType">queryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#query_type MonitorScheduledQueryRulesAlert#query_type}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.severity">severity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#severity MonitorScheduledQueryRulesAlert#severity}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#tags MonitorScheduledQueryRulesAlert#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.throttling">throttling</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#throttling MonitorScheduledQueryRulesAlert#throttling}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts">MonitorScheduledQueryRulesAlertTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.action"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction">MonitorScheduledQueryRulesAlertAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#action MonitorScheduledQueryRulesAlert#action}

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.dataSourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#data_source_id MonitorScheduledQueryRulesAlert#data_source_id}.

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.frequency"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#frequency MonitorScheduledQueryRulesAlert#frequency}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#location MonitorScheduledQueryRulesAlert#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#name MonitorScheduledQueryRulesAlert#name}.

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.query"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#query MonitorScheduledQueryRulesAlert#query}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#resource_group_name MonitorScheduledQueryRulesAlert#resource_group_name}.

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.timeWindow"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#time_window MonitorScheduledQueryRulesAlert#time_window}.

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.trigger"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger">MonitorScheduledQueryRulesAlertTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#trigger MonitorScheduledQueryRulesAlert#trigger}

---

##### `authorizedResourceIds`<sup>Optional</sup> <a name="authorizedResourceIds" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.authorizedResourceIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#authorized_resource_ids MonitorScheduledQueryRulesAlert#authorized_resource_ids}.

---

##### `autoMitigationEnabled`<sup>Optional</sup> <a name="autoMitigationEnabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.autoMitigationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#auto_mitigation_enabled MonitorScheduledQueryRulesAlert#auto_mitigation_enabled}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#description MonitorScheduledQueryRulesAlert#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#enabled MonitorScheduledQueryRulesAlert#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#id MonitorScheduledQueryRulesAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queryType`<sup>Optional</sup> <a name="queryType" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.queryType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#query_type MonitorScheduledQueryRulesAlert#query_type}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.severity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#severity MonitorScheduledQueryRulesAlert#severity}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#tags MonitorScheduledQueryRulesAlert#tags}.

---

##### `throttling`<sup>Optional</sup> <a name="throttling" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.throttling"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#throttling MonitorScheduledQueryRulesAlert#throttling}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts">MonitorScheduledQueryRulesAlertTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#timeouts MonitorScheduledQueryRulesAlert#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.putTrigger">putTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetAuthorizedResourceIds">resetAuthorizedResourceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetAutoMitigationEnabled">resetAutoMitigationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetQueryType">resetQueryType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetThrottling">resetThrottling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAction` <a name="putAction" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.putAction"></a>

```java
public void putAction(MonitorScheduledQueryRulesAlertAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction">MonitorScheduledQueryRulesAlertAction</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.putTimeouts"></a>

```java
public void putTimeouts(MonitorScheduledQueryRulesAlertTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts">MonitorScheduledQueryRulesAlertTimeouts</a>

---

##### `putTrigger` <a name="putTrigger" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.putTrigger"></a>

```java
public void putTrigger(MonitorScheduledQueryRulesAlertTrigger value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger">MonitorScheduledQueryRulesAlertTrigger</a>

---

##### `resetAuthorizedResourceIds` <a name="resetAuthorizedResourceIds" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetAuthorizedResourceIds"></a>

```java
public void resetAuthorizedResourceIds()
```

##### `resetAutoMitigationEnabled` <a name="resetAutoMitigationEnabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetAutoMitigationEnabled"></a>

```java
public void resetAutoMitigationEnabled()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetId"></a>

```java
public void resetId()
```

##### `resetQueryType` <a name="resetQueryType" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetQueryType"></a>

```java
public void resetQueryType()
```

##### `resetSeverity` <a name="resetSeverity" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetSeverity"></a>

```java
public void resetSeverity()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetTags"></a>

```java
public void resetTags()
```

##### `resetThrottling` <a name="resetThrottling" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetThrottling"></a>

```java
public void resetThrottling()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_scheduled_query_rules_alert.MonitorScheduledQueryRulesAlert;

MonitorScheduledQueryRulesAlert.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_scheduled_query_rules_alert.MonitorScheduledQueryRulesAlert;

MonitorScheduledQueryRulesAlert.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_scheduled_query_rules_alert.MonitorScheduledQueryRulesAlert;

MonitorScheduledQueryRulesAlert.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.action">action</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference">MonitorScheduledQueryRulesAlertActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference">MonitorScheduledQueryRulesAlertTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference">MonitorScheduledQueryRulesAlertTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction">MonitorScheduledQueryRulesAlertAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.authorizedResourceIdsInput">authorizedResourceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.autoMitigationEnabledInput">autoMitigationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.dataSourceIdInput">dataSourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.frequencyInput">frequencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.queryTypeInput">queryTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.severityInput">severityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.throttlingInput">throttlingInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts">MonitorScheduledQueryRulesAlertTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.timeWindowInput">timeWindowInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.triggerInput">triggerInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger">MonitorScheduledQueryRulesAlertTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.authorizedResourceIds">authorizedResourceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.autoMitigationEnabled">autoMitigationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.frequency">frequency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.queryType">queryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.severity">severity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.throttling">throttling</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.timeWindow">timeWindow</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.action"></a>

```java
public MonitorScheduledQueryRulesAlertActionOutputReference getAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference">MonitorScheduledQueryRulesAlertActionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.timeouts"></a>

```java
public MonitorScheduledQueryRulesAlertTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference">MonitorScheduledQueryRulesAlertTimeoutsOutputReference</a>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.trigger"></a>

```java
public MonitorScheduledQueryRulesAlertTriggerOutputReference getTrigger();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference">MonitorScheduledQueryRulesAlertTriggerOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.actionInput"></a>

```java
public MonitorScheduledQueryRulesAlertAction getActionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction">MonitorScheduledQueryRulesAlertAction</a>

---

##### `authorizedResourceIdsInput`<sup>Optional</sup> <a name="authorizedResourceIdsInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.authorizedResourceIdsInput"></a>

```java
public java.util.List<java.lang.String> getAuthorizedResourceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoMitigationEnabledInput`<sup>Optional</sup> <a name="autoMitigationEnabledInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.autoMitigationEnabledInput"></a>

```java
public java.lang.Object getAutoMitigationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataSourceIdInput`<sup>Optional</sup> <a name="dataSourceIdInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.dataSourceIdInput"></a>

```java
public java.lang.String getDataSourceIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.frequencyInput"></a>

```java
public java.lang.Number getFrequencyInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `queryTypeInput`<sup>Optional</sup> <a name="queryTypeInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.queryTypeInput"></a>

```java
public java.lang.String getQueryTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.severityInput"></a>

```java
public java.lang.Number getSeverityInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `throttlingInput`<sup>Optional</sup> <a name="throttlingInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.throttlingInput"></a>

```java
public java.lang.Number getThrottlingInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts">MonitorScheduledQueryRulesAlertTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `timeWindowInput`<sup>Optional</sup> <a name="timeWindowInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.timeWindowInput"></a>

```java
public java.lang.Number getTimeWindowInput();
```

- *Type:* java.lang.Number

---

##### `triggerInput`<sup>Optional</sup> <a name="triggerInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.triggerInput"></a>

```java
public MonitorScheduledQueryRulesAlertTrigger getTriggerInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger">MonitorScheduledQueryRulesAlertTrigger</a>

---

##### `authorizedResourceIds`<sup>Required</sup> <a name="authorizedResourceIds" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.authorizedResourceIds"></a>

```java
public java.util.List<java.lang.String> getAuthorizedResourceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoMitigationEnabled`<sup>Required</sup> <a name="autoMitigationEnabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.autoMitigationEnabled"></a>

```java
public java.lang.Object getAutoMitigationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.frequency"></a>

```java
public java.lang.Number getFrequency();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `queryType`<sup>Required</sup> <a name="queryType" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.queryType"></a>

```java
public java.lang.String getQueryType();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.severity"></a>

```java
public java.lang.Number getSeverity();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `throttling`<sup>Required</sup> <a name="throttling" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.throttling"></a>

```java
public java.lang.Number getThrottling();
```

- *Type:* java.lang.Number

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.timeWindow"></a>

```java
public java.lang.Number getTimeWindow();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorScheduledQueryRulesAlertAction <a name="MonitorScheduledQueryRulesAlertAction" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_scheduled_query_rules_alert.MonitorScheduledQueryRulesAlertAction;

MonitorScheduledQueryRulesAlertAction.builder()
    .actionGroup(java.util.List<java.lang.String>)
//  .customWebhookPayload(java.lang.String)
//  .emailSubject(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction.property.actionGroup">actionGroup</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#action_group MonitorScheduledQueryRulesAlert#action_group}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction.property.customWebhookPayload">customWebhookPayload</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#custom_webhook_payload MonitorScheduledQueryRulesAlert#custom_webhook_payload}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction.property.emailSubject">emailSubject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#email_subject MonitorScheduledQueryRulesAlert#email_subject}. |

---

##### `actionGroup`<sup>Required</sup> <a name="actionGroup" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction.property.actionGroup"></a>

```java
public java.util.List<java.lang.String> getActionGroup();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#action_group MonitorScheduledQueryRulesAlert#action_group}.

---

##### `customWebhookPayload`<sup>Optional</sup> <a name="customWebhookPayload" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction.property.customWebhookPayload"></a>

```java
public java.lang.String getCustomWebhookPayload();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#custom_webhook_payload MonitorScheduledQueryRulesAlert#custom_webhook_payload}.

---

##### `emailSubject`<sup>Optional</sup> <a name="emailSubject" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction.property.emailSubject"></a>

```java
public java.lang.String getEmailSubject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#email_subject MonitorScheduledQueryRulesAlert#email_subject}.

---

### MonitorScheduledQueryRulesAlertConfig <a name="MonitorScheduledQueryRulesAlertConfig" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_scheduled_query_rules_alert.MonitorScheduledQueryRulesAlertConfig;

MonitorScheduledQueryRulesAlertConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .action(MonitorScheduledQueryRulesAlertAction)
    .dataSourceId(java.lang.String)
    .frequency(java.lang.Number)
    .location(java.lang.String)
    .name(java.lang.String)
    .query(java.lang.String)
    .resourceGroupName(java.lang.String)
    .timeWindow(java.lang.Number)
    .trigger(MonitorScheduledQueryRulesAlertTrigger)
//  .authorizedResourceIds(java.util.List<java.lang.String>)
//  .autoMitigationEnabled(java.lang.Boolean)
//  .autoMitigationEnabled(IResolvable)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .queryType(java.lang.String)
//  .severity(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .throttling(java.lang.Number)
//  .timeouts(MonitorScheduledQueryRulesAlertTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.action">action</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction">MonitorScheduledQueryRulesAlertAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#data_source_id MonitorScheduledQueryRulesAlert#data_source_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.frequency">frequency</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#frequency MonitorScheduledQueryRulesAlert#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#location MonitorScheduledQueryRulesAlert#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#name MonitorScheduledQueryRulesAlert#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.query">query</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#query MonitorScheduledQueryRulesAlert#query}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#resource_group_name MonitorScheduledQueryRulesAlert#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.timeWindow">timeWindow</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#time_window MonitorScheduledQueryRulesAlert#time_window}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger">MonitorScheduledQueryRulesAlertTrigger</a></code> | trigger block. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.authorizedResourceIds">authorizedResourceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#authorized_resource_ids MonitorScheduledQueryRulesAlert#authorized_resource_ids}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.autoMitigationEnabled">autoMitigationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#auto_mitigation_enabled MonitorScheduledQueryRulesAlert#auto_mitigation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#description MonitorScheduledQueryRulesAlert#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#enabled MonitorScheduledQueryRulesAlert#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#id MonitorScheduledQueryRulesAlert#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.queryType">queryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#query_type MonitorScheduledQueryRulesAlert#query_type}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.severity">severity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#severity MonitorScheduledQueryRulesAlert#severity}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#tags MonitorScheduledQueryRulesAlert#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.throttling">throttling</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#throttling MonitorScheduledQueryRulesAlert#throttling}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts">MonitorScheduledQueryRulesAlertTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.action"></a>

```java
public MonitorScheduledQueryRulesAlertAction getAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction">MonitorScheduledQueryRulesAlertAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#action MonitorScheduledQueryRulesAlert#action}

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#data_source_id MonitorScheduledQueryRulesAlert#data_source_id}.

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.frequency"></a>

```java
public java.lang.Number getFrequency();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#frequency MonitorScheduledQueryRulesAlert#frequency}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#location MonitorScheduledQueryRulesAlert#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#name MonitorScheduledQueryRulesAlert#name}.

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#query MonitorScheduledQueryRulesAlert#query}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#resource_group_name MonitorScheduledQueryRulesAlert#resource_group_name}.

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.timeWindow"></a>

```java
public java.lang.Number getTimeWindow();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#time_window MonitorScheduledQueryRulesAlert#time_window}.

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.trigger"></a>

```java
public MonitorScheduledQueryRulesAlertTrigger getTrigger();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger">MonitorScheduledQueryRulesAlertTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#trigger MonitorScheduledQueryRulesAlert#trigger}

---

##### `authorizedResourceIds`<sup>Optional</sup> <a name="authorizedResourceIds" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.authorizedResourceIds"></a>

```java
public java.util.List<java.lang.String> getAuthorizedResourceIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#authorized_resource_ids MonitorScheduledQueryRulesAlert#authorized_resource_ids}.

---

##### `autoMitigationEnabled`<sup>Optional</sup> <a name="autoMitigationEnabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.autoMitigationEnabled"></a>

```java
public java.lang.Object getAutoMitigationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#auto_mitigation_enabled MonitorScheduledQueryRulesAlert#auto_mitigation_enabled}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#description MonitorScheduledQueryRulesAlert#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#enabled MonitorScheduledQueryRulesAlert#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#id MonitorScheduledQueryRulesAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queryType`<sup>Optional</sup> <a name="queryType" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.queryType"></a>

```java
public java.lang.String getQueryType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#query_type MonitorScheduledQueryRulesAlert#query_type}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.severity"></a>

```java
public java.lang.Number getSeverity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#severity MonitorScheduledQueryRulesAlert#severity}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#tags MonitorScheduledQueryRulesAlert#tags}.

---

##### `throttling`<sup>Optional</sup> <a name="throttling" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.throttling"></a>

```java
public java.lang.Number getThrottling();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#throttling MonitorScheduledQueryRulesAlert#throttling}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.timeouts"></a>

```java
public MonitorScheduledQueryRulesAlertTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts">MonitorScheduledQueryRulesAlertTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#timeouts MonitorScheduledQueryRulesAlert#timeouts}

---

### MonitorScheduledQueryRulesAlertTimeouts <a name="MonitorScheduledQueryRulesAlertTimeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_scheduled_query_rules_alert.MonitorScheduledQueryRulesAlertTimeouts;

MonitorScheduledQueryRulesAlertTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#create MonitorScheduledQueryRulesAlert#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#delete MonitorScheduledQueryRulesAlert#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#read MonitorScheduledQueryRulesAlert#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#update MonitorScheduledQueryRulesAlert#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#create MonitorScheduledQueryRulesAlert#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#delete MonitorScheduledQueryRulesAlert#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#read MonitorScheduledQueryRulesAlert#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#update MonitorScheduledQueryRulesAlert#update}.

---

### MonitorScheduledQueryRulesAlertTrigger <a name="MonitorScheduledQueryRulesAlertTrigger" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_scheduled_query_rules_alert.MonitorScheduledQueryRulesAlertTrigger;

MonitorScheduledQueryRulesAlertTrigger.builder()
    .operator(java.lang.String)
    .threshold(java.lang.Number)
//  .metricTrigger(MonitorScheduledQueryRulesAlertTriggerMetricTrigger)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#operator MonitorScheduledQueryRulesAlert#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#threshold MonitorScheduledQueryRulesAlert#threshold}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger.property.metricTrigger">metricTrigger</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger">MonitorScheduledQueryRulesAlertTriggerMetricTrigger</a></code> | metric_trigger block. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#operator MonitorScheduledQueryRulesAlert#operator}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#threshold MonitorScheduledQueryRulesAlert#threshold}.

---

##### `metricTrigger`<sup>Optional</sup> <a name="metricTrigger" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger.property.metricTrigger"></a>

```java
public MonitorScheduledQueryRulesAlertTriggerMetricTrigger getMetricTrigger();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger">MonitorScheduledQueryRulesAlertTriggerMetricTrigger</a>

metric_trigger block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#metric_trigger MonitorScheduledQueryRulesAlert#metric_trigger}

---

### MonitorScheduledQueryRulesAlertTriggerMetricTrigger <a name="MonitorScheduledQueryRulesAlertTriggerMetricTrigger" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_scheduled_query_rules_alert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger;

MonitorScheduledQueryRulesAlertTriggerMetricTrigger.builder()
    .metricTriggerType(java.lang.String)
    .operator(java.lang.String)
    .threshold(java.lang.Number)
//  .metricColumn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger.property.metricTriggerType">metricTriggerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#metric_trigger_type MonitorScheduledQueryRulesAlert#metric_trigger_type}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#operator MonitorScheduledQueryRulesAlert#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#threshold MonitorScheduledQueryRulesAlert#threshold}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger.property.metricColumn">metricColumn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#metric_column MonitorScheduledQueryRulesAlert#metric_column}. |

---

##### `metricTriggerType`<sup>Required</sup> <a name="metricTriggerType" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger.property.metricTriggerType"></a>

```java
public java.lang.String getMetricTriggerType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#metric_trigger_type MonitorScheduledQueryRulesAlert#metric_trigger_type}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#operator MonitorScheduledQueryRulesAlert#operator}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#threshold MonitorScheduledQueryRulesAlert#threshold}.

---

##### `metricColumn`<sup>Optional</sup> <a name="metricColumn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger.property.metricColumn"></a>

```java
public java.lang.String getMetricColumn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert#metric_column MonitorScheduledQueryRulesAlert#metric_column}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorScheduledQueryRulesAlertActionOutputReference <a name="MonitorScheduledQueryRulesAlertActionOutputReference" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_scheduled_query_rules_alert.MonitorScheduledQueryRulesAlertActionOutputReference;

new MonitorScheduledQueryRulesAlertActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.resetCustomWebhookPayload">resetCustomWebhookPayload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.resetEmailSubject">resetEmailSubject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomWebhookPayload` <a name="resetCustomWebhookPayload" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.resetCustomWebhookPayload"></a>

```java
public void resetCustomWebhookPayload()
```

##### `resetEmailSubject` <a name="resetEmailSubject" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.resetEmailSubject"></a>

```java
public void resetEmailSubject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.actionGroupInput">actionGroupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.customWebhookPayloadInput">customWebhookPayloadInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.emailSubjectInput">emailSubjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.actionGroup">actionGroup</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.customWebhookPayload">customWebhookPayload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.emailSubject">emailSubject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction">MonitorScheduledQueryRulesAlertAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionGroupInput`<sup>Optional</sup> <a name="actionGroupInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.actionGroupInput"></a>

```java
public java.util.List<java.lang.String> getActionGroupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customWebhookPayloadInput`<sup>Optional</sup> <a name="customWebhookPayloadInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.customWebhookPayloadInput"></a>

```java
public java.lang.String getCustomWebhookPayloadInput();
```

- *Type:* java.lang.String

---

##### `emailSubjectInput`<sup>Optional</sup> <a name="emailSubjectInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.emailSubjectInput"></a>

```java
public java.lang.String getEmailSubjectInput();
```

- *Type:* java.lang.String

---

##### `actionGroup`<sup>Required</sup> <a name="actionGroup" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.actionGroup"></a>

```java
public java.util.List<java.lang.String> getActionGroup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customWebhookPayload`<sup>Required</sup> <a name="customWebhookPayload" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.customWebhookPayload"></a>

```java
public java.lang.String getCustomWebhookPayload();
```

- *Type:* java.lang.String

---

##### `emailSubject`<sup>Required</sup> <a name="emailSubject" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.emailSubject"></a>

```java
public java.lang.String getEmailSubject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.internalValue"></a>

```java
public MonitorScheduledQueryRulesAlertAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction">MonitorScheduledQueryRulesAlertAction</a>

---


### MonitorScheduledQueryRulesAlertTimeoutsOutputReference <a name="MonitorScheduledQueryRulesAlertTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_scheduled_query_rules_alert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference;

new MonitorScheduledQueryRulesAlertTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts">MonitorScheduledQueryRulesAlertTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts">MonitorScheduledQueryRulesAlertTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference <a name="MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_scheduled_query_rules_alert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference;

new MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.resetMetricColumn">resetMetricColumn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricColumn` <a name="resetMetricColumn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.resetMetricColumn"></a>

```java
public void resetMetricColumn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricColumnInput">metricColumnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricTriggerTypeInput">metricTriggerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricColumn">metricColumn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricTriggerType">metricTriggerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger">MonitorScheduledQueryRulesAlertTriggerMetricTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricColumnInput`<sup>Optional</sup> <a name="metricColumnInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricColumnInput"></a>

```java
public java.lang.String getMetricColumnInput();
```

- *Type:* java.lang.String

---

##### `metricTriggerTypeInput`<sup>Optional</sup> <a name="metricTriggerTypeInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricTriggerTypeInput"></a>

```java
public java.lang.String getMetricTriggerTypeInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `metricColumn`<sup>Required</sup> <a name="metricColumn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricColumn"></a>

```java
public java.lang.String getMetricColumn();
```

- *Type:* java.lang.String

---

##### `metricTriggerType`<sup>Required</sup> <a name="metricTriggerType" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricTriggerType"></a>

```java
public java.lang.String getMetricTriggerType();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.internalValue"></a>

```java
public MonitorScheduledQueryRulesAlertTriggerMetricTrigger getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger">MonitorScheduledQueryRulesAlertTriggerMetricTrigger</a>

---


### MonitorScheduledQueryRulesAlertTriggerOutputReference <a name="MonitorScheduledQueryRulesAlertTriggerOutputReference" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_scheduled_query_rules_alert.MonitorScheduledQueryRulesAlertTriggerOutputReference;

new MonitorScheduledQueryRulesAlertTriggerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.putMetricTrigger">putMetricTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.resetMetricTrigger">resetMetricTrigger</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricTrigger` <a name="putMetricTrigger" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.putMetricTrigger"></a>

```java
public void putMetricTrigger(MonitorScheduledQueryRulesAlertTriggerMetricTrigger value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.putMetricTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger">MonitorScheduledQueryRulesAlertTriggerMetricTrigger</a>

---

##### `resetMetricTrigger` <a name="resetMetricTrigger" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.resetMetricTrigger"></a>

```java
public void resetMetricTrigger()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.metricTrigger">metricTrigger</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference">MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.metricTriggerInput">metricTriggerInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger">MonitorScheduledQueryRulesAlertTriggerMetricTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger">MonitorScheduledQueryRulesAlertTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricTrigger`<sup>Required</sup> <a name="metricTrigger" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.metricTrigger"></a>

```java
public MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference getMetricTrigger();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference">MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference</a>

---

##### `metricTriggerInput`<sup>Optional</sup> <a name="metricTriggerInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.metricTriggerInput"></a>

```java
public MonitorScheduledQueryRulesAlertTriggerMetricTrigger getMetricTriggerInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger">MonitorScheduledQueryRulesAlertTriggerMetricTrigger</a>

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.internalValue"></a>

```java
public MonitorScheduledQueryRulesAlertTrigger getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger">MonitorScheduledQueryRulesAlertTrigger</a>

---



