# `monitorMetricAlert` Submodule <a name="`monitorMetricAlert` Submodule" id="@cdktf/provider-azurerm.monitorMetricAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorMetricAlert <a name="MonitorMetricAlert" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert azurerm_monitor_metric_alert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_metric_alert.MonitorMetricAlert;

MonitorMetricAlert.Builder.create(Construct scope, java.lang.String id)
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
//  .action(IResolvable)
//  .action(java.util.List<MonitorMetricAlertAction>)
//  .applicationInsightsWebTestLocationAvailabilityCriteria(MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria)
//  .autoMitigate(java.lang.Boolean)
//  .autoMitigate(IResolvable)
//  .criteria(IResolvable)
//  .criteria(java.util.List<MonitorMetricAlertCriteria>)
//  .description(java.lang.String)
//  .dynamicCriteria(MonitorMetricAlertDynamicCriteria)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .frequency(java.lang.String)
//  .id(java.lang.String)
//  .severity(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .targetResourceLocation(java.lang.String)
//  .targetResourceType(java.lang.String)
//  .timeouts(MonitorMetricAlertTimeouts)
//  .windowSize(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#name MonitorMetricAlert#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#resource_group_name MonitorMetricAlert#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#scopes MonitorMetricAlert#scopes}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.action">action</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction">MonitorMetricAlertAction</a>></code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.applicationInsightsWebTestLocationAvailabilityCriteria">applicationInsightsWebTestLocationAvailabilityCriteria</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria">MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria</a></code> | application_insights_web_test_location_availability_criteria block. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.autoMitigate">autoMitigate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#auto_mitigate MonitorMetricAlert#auto_mitigate}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.criteria">criteria</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria">MonitorMetricAlertCriteria</a>></code> | criteria block. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#description MonitorMetricAlert#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.dynamicCriteria">dynamicCriteria</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria">MonitorMetricAlertDynamicCriteria</a></code> | dynamic_criteria block. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#enabled MonitorMetricAlert#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.frequency">frequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#frequency MonitorMetricAlert#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#id MonitorMetricAlert#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.severity">severity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#severity MonitorMetricAlert#severity}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#tags MonitorMetricAlert#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.targetResourceLocation">targetResourceLocation</a></code> | <code>java.lang.String</code> | The location of the target pluginsdk. Required when using subscription, resource group scope or multiple scopes. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.targetResourceType">targetResourceType</a></code> | <code>java.lang.String</code> | The resource type (e.g. Microsoft.Compute/virtualMachines) of the target pluginsdk. Required when using subscription, resource group scope or multiple scopes. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts">MonitorMetricAlertTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.windowSize">windowSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#window_size MonitorMetricAlert#window_size}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#name MonitorMetricAlert#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#resource_group_name MonitorMetricAlert#resource_group_name}.

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.scopes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#scopes MonitorMetricAlert#scopes}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.action"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction">MonitorMetricAlertAction</a>>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#action MonitorMetricAlert#action}

---

##### `applicationInsightsWebTestLocationAvailabilityCriteria`<sup>Optional</sup> <a name="applicationInsightsWebTestLocationAvailabilityCriteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.applicationInsightsWebTestLocationAvailabilityCriteria"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria">MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria</a>

application_insights_web_test_location_availability_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#application_insights_web_test_location_availability_criteria MonitorMetricAlert#application_insights_web_test_location_availability_criteria}

---

##### `autoMitigate`<sup>Optional</sup> <a name="autoMitigate" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.autoMitigate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#auto_mitigate MonitorMetricAlert#auto_mitigate}.

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.criteria"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria">MonitorMetricAlertCriteria</a>>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#criteria MonitorMetricAlert#criteria}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#description MonitorMetricAlert#description}.

---

##### `dynamicCriteria`<sup>Optional</sup> <a name="dynamicCriteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.dynamicCriteria"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria">MonitorMetricAlertDynamicCriteria</a>

dynamic_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#dynamic_criteria MonitorMetricAlert#dynamic_criteria}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#enabled MonitorMetricAlert#enabled}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.frequency"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#frequency MonitorMetricAlert#frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#id MonitorMetricAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.severity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#severity MonitorMetricAlert#severity}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#tags MonitorMetricAlert#tags}.

---

##### `targetResourceLocation`<sup>Optional</sup> <a name="targetResourceLocation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.targetResourceLocation"></a>

- *Type:* java.lang.String

The location of the target pluginsdk. Required when using subscription, resource group scope or multiple scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#target_resource_location MonitorMetricAlert#target_resource_location}

---

##### `targetResourceType`<sup>Optional</sup> <a name="targetResourceType" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.targetResourceType"></a>

- *Type:* java.lang.String

The resource type (e.g. Microsoft.Compute/virtualMachines) of the target pluginsdk. Required when using subscription, resource group scope or multiple scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#target_resource_type MonitorMetricAlert#target_resource_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts">MonitorMetricAlertTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#timeouts MonitorMetricAlert#timeouts}

---

##### `windowSize`<sup>Optional</sup> <a name="windowSize" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.windowSize"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#window_size MonitorMetricAlert#window_size}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putApplicationInsightsWebTestLocationAvailabilityCriteria">putApplicationInsightsWebTestLocationAvailabilityCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putCriteria">putCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putDynamicCriteria">putDynamicCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetApplicationInsightsWebTestLocationAvailabilityCriteria">resetApplicationInsightsWebTestLocationAvailabilityCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetAutoMitigate">resetAutoMitigate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetCriteria">resetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetDynamicCriteria">resetDynamicCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetTargetResourceLocation">resetTargetResourceLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetTargetResourceType">resetTargetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetWindowSize">resetWindowSize</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putAction"></a>

```java
public void putAction(IResolvable OR java.util.List<MonitorMetricAlertAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction">MonitorMetricAlertAction</a>>

---

##### `putApplicationInsightsWebTestLocationAvailabilityCriteria` <a name="putApplicationInsightsWebTestLocationAvailabilityCriteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putApplicationInsightsWebTestLocationAvailabilityCriteria"></a>

```java
public void putApplicationInsightsWebTestLocationAvailabilityCriteria(MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putApplicationInsightsWebTestLocationAvailabilityCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria">MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria</a>

---

##### `putCriteria` <a name="putCriteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putCriteria"></a>

```java
public void putCriteria(IResolvable OR java.util.List<MonitorMetricAlertCriteria> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putCriteria.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria">MonitorMetricAlertCriteria</a>>

---

##### `putDynamicCriteria` <a name="putDynamicCriteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putDynamicCriteria"></a>

```java
public void putDynamicCriteria(MonitorMetricAlertDynamicCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putDynamicCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria">MonitorMetricAlertDynamicCriteria</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putTimeouts"></a>

```java
public void putTimeouts(MonitorMetricAlertTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts">MonitorMetricAlertTimeouts</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetAction"></a>

```java
public void resetAction()
```

##### `resetApplicationInsightsWebTestLocationAvailabilityCriteria` <a name="resetApplicationInsightsWebTestLocationAvailabilityCriteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetApplicationInsightsWebTestLocationAvailabilityCriteria"></a>

```java
public void resetApplicationInsightsWebTestLocationAvailabilityCriteria()
```

##### `resetAutoMitigate` <a name="resetAutoMitigate" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetAutoMitigate"></a>

```java
public void resetAutoMitigate()
```

##### `resetCriteria` <a name="resetCriteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetCriteria"></a>

```java
public void resetCriteria()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDynamicCriteria` <a name="resetDynamicCriteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetDynamicCriteria"></a>

```java
public void resetDynamicCriteria()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetFrequency"></a>

```java
public void resetFrequency()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetId"></a>

```java
public void resetId()
```

##### `resetSeverity` <a name="resetSeverity" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetSeverity"></a>

```java
public void resetSeverity()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetTags"></a>

```java
public void resetTags()
```

##### `resetTargetResourceLocation` <a name="resetTargetResourceLocation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetTargetResourceLocation"></a>

```java
public void resetTargetResourceLocation()
```

##### `resetTargetResourceType` <a name="resetTargetResourceType" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetTargetResourceType"></a>

```java
public void resetTargetResourceType()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWindowSize` <a name="resetWindowSize" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetWindowSize"></a>

```java
public void resetWindowSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorMetricAlert resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_metric_alert.MonitorMetricAlert;

MonitorMetricAlert.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_metric_alert.MonitorMetricAlert;

MonitorMetricAlert.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_metric_alert.MonitorMetricAlert;

MonitorMetricAlert.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_metric_alert.MonitorMetricAlert;

MonitorMetricAlert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MonitorMetricAlert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MonitorMetricAlert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MonitorMetricAlert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MonitorMetricAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MonitorMetricAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.action">action</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList">MonitorMetricAlertActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.applicationInsightsWebTestLocationAvailabilityCriteria">applicationInsightsWebTestLocationAvailabilityCriteria</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference">MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList">MonitorMetricAlertCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.dynamicCriteria">dynamicCriteria</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference">MonitorMetricAlertDynamicCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference">MonitorMetricAlertTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.actionInput">actionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction">MonitorMetricAlertAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.applicationInsightsWebTestLocationAvailabilityCriteriaInput">applicationInsightsWebTestLocationAvailabilityCriteriaInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria">MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.autoMitigateInput">autoMitigateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.criteriaInput">criteriaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria">MonitorMetricAlertCriteria</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.dynamicCriteriaInput">dynamicCriteriaInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria">MonitorMetricAlertDynamicCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.frequencyInput">frequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.severityInput">severityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.targetResourceLocationInput">targetResourceLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.targetResourceTypeInput">targetResourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts">MonitorMetricAlertTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.windowSizeInput">windowSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.autoMitigate">autoMitigate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.frequency">frequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.severity">severity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.targetResourceLocation">targetResourceLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.targetResourceType">targetResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.windowSize">windowSize</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.action"></a>

```java
public MonitorMetricAlertActionList getAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList">MonitorMetricAlertActionList</a>

---

##### `applicationInsightsWebTestLocationAvailabilityCriteria`<sup>Required</sup> <a name="applicationInsightsWebTestLocationAvailabilityCriteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.applicationInsightsWebTestLocationAvailabilityCriteria"></a>

```java
public MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference getApplicationInsightsWebTestLocationAvailabilityCriteria();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference">MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference</a>

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.criteria"></a>

```java
public MonitorMetricAlertCriteriaList getCriteria();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList">MonitorMetricAlertCriteriaList</a>

---

##### `dynamicCriteria`<sup>Required</sup> <a name="dynamicCriteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.dynamicCriteria"></a>

```java
public MonitorMetricAlertDynamicCriteriaOutputReference getDynamicCriteria();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference">MonitorMetricAlertDynamicCriteriaOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.timeouts"></a>

```java
public MonitorMetricAlertTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference">MonitorMetricAlertTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.actionInput"></a>

```java
public java.lang.Object getActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction">MonitorMetricAlertAction</a>>

---

##### `applicationInsightsWebTestLocationAvailabilityCriteriaInput`<sup>Optional</sup> <a name="applicationInsightsWebTestLocationAvailabilityCriteriaInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.applicationInsightsWebTestLocationAvailabilityCriteriaInput"></a>

```java
public MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria getApplicationInsightsWebTestLocationAvailabilityCriteriaInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria">MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria</a>

---

##### `autoMitigateInput`<sup>Optional</sup> <a name="autoMitigateInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.autoMitigateInput"></a>

```java
public java.lang.Object getAutoMitigateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.criteriaInput"></a>

```java
public java.lang.Object getCriteriaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria">MonitorMetricAlertCriteria</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dynamicCriteriaInput`<sup>Optional</sup> <a name="dynamicCriteriaInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.dynamicCriteriaInput"></a>

```java
public MonitorMetricAlertDynamicCriteria getDynamicCriteriaInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria">MonitorMetricAlertDynamicCriteria</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.frequencyInput"></a>

```java
public java.lang.String getFrequencyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.severityInput"></a>

```java
public java.lang.Number getSeverityInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetResourceLocationInput`<sup>Optional</sup> <a name="targetResourceLocationInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.targetResourceLocationInput"></a>

```java
public java.lang.String getTargetResourceLocationInput();
```

- *Type:* java.lang.String

---

##### `targetResourceTypeInput`<sup>Optional</sup> <a name="targetResourceTypeInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.targetResourceTypeInput"></a>

```java
public java.lang.String getTargetResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts">MonitorMetricAlertTimeouts</a>

---

##### `windowSizeInput`<sup>Optional</sup> <a name="windowSizeInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.windowSizeInput"></a>

```java
public java.lang.String getWindowSizeInput();
```

- *Type:* java.lang.String

---

##### `autoMitigate`<sup>Required</sup> <a name="autoMitigate" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.autoMitigate"></a>

```java
public java.lang.Object getAutoMitigate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.severity"></a>

```java
public java.lang.Number getSeverity();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetResourceLocation`<sup>Required</sup> <a name="targetResourceLocation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.targetResourceLocation"></a>

```java
public java.lang.String getTargetResourceLocation();
```

- *Type:* java.lang.String

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.targetResourceType"></a>

```java
public java.lang.String getTargetResourceType();
```

- *Type:* java.lang.String

---

##### `windowSize`<sup>Required</sup> <a name="windowSize" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.windowSize"></a>

```java
public java.lang.String getWindowSize();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorMetricAlertAction <a name="MonitorMetricAlertAction" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_metric_alert.MonitorMetricAlertAction;

MonitorMetricAlertAction.builder()
    .actionGroupId(java.lang.String)
//  .webhookProperties(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction.property.actionGroupId">actionGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#action_group_id MonitorMetricAlert#action_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction.property.webhookProperties">webhookProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#webhook_properties MonitorMetricAlert#webhook_properties}. |

---

##### `actionGroupId`<sup>Required</sup> <a name="actionGroupId" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction.property.actionGroupId"></a>

```java
public java.lang.String getActionGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#action_group_id MonitorMetricAlert#action_group_id}.

---

##### `webhookProperties`<sup>Optional</sup> <a name="webhookProperties" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction.property.webhookProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getWebhookProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#webhook_properties MonitorMetricAlert#webhook_properties}.

---

### MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria <a name="MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_metric_alert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria;

MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria.builder()
    .componentId(java.lang.String)
    .failedLocationCount(java.lang.Number)
    .webTestId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria.property.componentId">componentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#component_id MonitorMetricAlert#component_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria.property.failedLocationCount">failedLocationCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#failed_location_count MonitorMetricAlert#failed_location_count}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria.property.webTestId">webTestId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#web_test_id MonitorMetricAlert#web_test_id}. |

---

##### `componentId`<sup>Required</sup> <a name="componentId" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria.property.componentId"></a>

```java
public java.lang.String getComponentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#component_id MonitorMetricAlert#component_id}.

---

##### `failedLocationCount`<sup>Required</sup> <a name="failedLocationCount" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria.property.failedLocationCount"></a>

```java
public java.lang.Number getFailedLocationCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#failed_location_count MonitorMetricAlert#failed_location_count}.

---

##### `webTestId`<sup>Required</sup> <a name="webTestId" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria.property.webTestId"></a>

```java
public java.lang.String getWebTestId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#web_test_id MonitorMetricAlert#web_test_id}.

---

### MonitorMetricAlertConfig <a name="MonitorMetricAlertConfig" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_metric_alert.MonitorMetricAlertConfig;

MonitorMetricAlertConfig.builder()
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
//  .action(IResolvable)
//  .action(java.util.List<MonitorMetricAlertAction>)
//  .applicationInsightsWebTestLocationAvailabilityCriteria(MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria)
//  .autoMitigate(java.lang.Boolean)
//  .autoMitigate(IResolvable)
//  .criteria(IResolvable)
//  .criteria(java.util.List<MonitorMetricAlertCriteria>)
//  .description(java.lang.String)
//  .dynamicCriteria(MonitorMetricAlertDynamicCriteria)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .frequency(java.lang.String)
//  .id(java.lang.String)
//  .severity(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .targetResourceLocation(java.lang.String)
//  .targetResourceType(java.lang.String)
//  .timeouts(MonitorMetricAlertTimeouts)
//  .windowSize(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#name MonitorMetricAlert#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#resource_group_name MonitorMetricAlert#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#scopes MonitorMetricAlert#scopes}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.action">action</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction">MonitorMetricAlertAction</a>></code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.applicationInsightsWebTestLocationAvailabilityCriteria">applicationInsightsWebTestLocationAvailabilityCriteria</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria">MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria</a></code> | application_insights_web_test_location_availability_criteria block. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.autoMitigate">autoMitigate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#auto_mitigate MonitorMetricAlert#auto_mitigate}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.criteria">criteria</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria">MonitorMetricAlertCriteria</a>></code> | criteria block. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#description MonitorMetricAlert#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.dynamicCriteria">dynamicCriteria</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria">MonitorMetricAlertDynamicCriteria</a></code> | dynamic_criteria block. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#enabled MonitorMetricAlert#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.frequency">frequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#frequency MonitorMetricAlert#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#id MonitorMetricAlert#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.severity">severity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#severity MonitorMetricAlert#severity}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#tags MonitorMetricAlert#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.targetResourceLocation">targetResourceLocation</a></code> | <code>java.lang.String</code> | The location of the target pluginsdk. Required when using subscription, resource group scope or multiple scopes. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.targetResourceType">targetResourceType</a></code> | <code>java.lang.String</code> | The resource type (e.g. Microsoft.Compute/virtualMachines) of the target pluginsdk. Required when using subscription, resource group scope or multiple scopes. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts">MonitorMetricAlertTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.windowSize">windowSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#window_size MonitorMetricAlert#window_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#name MonitorMetricAlert#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#resource_group_name MonitorMetricAlert#resource_group_name}.

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#scopes MonitorMetricAlert#scopes}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.action"></a>

```java
public java.lang.Object getAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction">MonitorMetricAlertAction</a>>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#action MonitorMetricAlert#action}

---

##### `applicationInsightsWebTestLocationAvailabilityCriteria`<sup>Optional</sup> <a name="applicationInsightsWebTestLocationAvailabilityCriteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.applicationInsightsWebTestLocationAvailabilityCriteria"></a>

```java
public MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria getApplicationInsightsWebTestLocationAvailabilityCriteria();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria">MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria</a>

application_insights_web_test_location_availability_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#application_insights_web_test_location_availability_criteria MonitorMetricAlert#application_insights_web_test_location_availability_criteria}

---

##### `autoMitigate`<sup>Optional</sup> <a name="autoMitigate" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.autoMitigate"></a>

```java
public java.lang.Object getAutoMitigate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#auto_mitigate MonitorMetricAlert#auto_mitigate}.

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.criteria"></a>

```java
public java.lang.Object getCriteria();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria">MonitorMetricAlertCriteria</a>>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#criteria MonitorMetricAlert#criteria}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#description MonitorMetricAlert#description}.

---

##### `dynamicCriteria`<sup>Optional</sup> <a name="dynamicCriteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.dynamicCriteria"></a>

```java
public MonitorMetricAlertDynamicCriteria getDynamicCriteria();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria">MonitorMetricAlertDynamicCriteria</a>

dynamic_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#dynamic_criteria MonitorMetricAlert#dynamic_criteria}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#enabled MonitorMetricAlert#enabled}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#frequency MonitorMetricAlert#frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#id MonitorMetricAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.severity"></a>

```java
public java.lang.Number getSeverity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#severity MonitorMetricAlert#severity}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#tags MonitorMetricAlert#tags}.

---

##### `targetResourceLocation`<sup>Optional</sup> <a name="targetResourceLocation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.targetResourceLocation"></a>

```java
public java.lang.String getTargetResourceLocation();
```

- *Type:* java.lang.String

The location of the target pluginsdk. Required when using subscription, resource group scope or multiple scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#target_resource_location MonitorMetricAlert#target_resource_location}

---

##### `targetResourceType`<sup>Optional</sup> <a name="targetResourceType" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.targetResourceType"></a>

```java
public java.lang.String getTargetResourceType();
```

- *Type:* java.lang.String

The resource type (e.g. Microsoft.Compute/virtualMachines) of the target pluginsdk. Required when using subscription, resource group scope or multiple scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#target_resource_type MonitorMetricAlert#target_resource_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.timeouts"></a>

```java
public MonitorMetricAlertTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts">MonitorMetricAlertTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#timeouts MonitorMetricAlert#timeouts}

---

##### `windowSize`<sup>Optional</sup> <a name="windowSize" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.windowSize"></a>

```java
public java.lang.String getWindowSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#window_size MonitorMetricAlert#window_size}.

---

### MonitorMetricAlertCriteria <a name="MonitorMetricAlertCriteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_metric_alert.MonitorMetricAlertCriteria;

MonitorMetricAlertCriteria.builder()
    .aggregation(java.lang.String)
    .metricName(java.lang.String)
    .metricNamespace(java.lang.String)
    .operator(java.lang.String)
    .threshold(java.lang.Number)
//  .dimension(IResolvable)
//  .dimension(java.util.List<MonitorMetricAlertCriteriaDimension>)
//  .skipMetricValidation(java.lang.Boolean)
//  .skipMetricValidation(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.aggregation">aggregation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#aggregation MonitorMetricAlert#aggregation}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#metric_name MonitorMetricAlert#metric_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.metricNamespace">metricNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#metric_namespace MonitorMetricAlert#metric_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#operator MonitorMetricAlert#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#threshold MonitorMetricAlert#threshold}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.dimension">dimension</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension">MonitorMetricAlertCriteriaDimension</a>></code> | dimension block. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.skipMetricValidation">skipMetricValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#skip_metric_validation MonitorMetricAlert#skip_metric_validation}. |

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.aggregation"></a>

```java
public java.lang.String getAggregation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#aggregation MonitorMetricAlert#aggregation}.

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#metric_name MonitorMetricAlert#metric_name}.

---

##### `metricNamespace`<sup>Required</sup> <a name="metricNamespace" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.metricNamespace"></a>

```java
public java.lang.String getMetricNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#metric_namespace MonitorMetricAlert#metric_namespace}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#operator MonitorMetricAlert#operator}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#threshold MonitorMetricAlert#threshold}.

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.dimension"></a>

```java
public java.lang.Object getDimension();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension">MonitorMetricAlertCriteriaDimension</a>>

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#dimension MonitorMetricAlert#dimension}

---

##### `skipMetricValidation`<sup>Optional</sup> <a name="skipMetricValidation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.skipMetricValidation"></a>

```java
public java.lang.Object getSkipMetricValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#skip_metric_validation MonitorMetricAlert#skip_metric_validation}.

---

### MonitorMetricAlertCriteriaDimension <a name="MonitorMetricAlertCriteriaDimension" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_metric_alert.MonitorMetricAlertCriteriaDimension;

MonitorMetricAlertCriteriaDimension.builder()
    .name(java.lang.String)
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#name MonitorMetricAlert#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#operator MonitorMetricAlert#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#values MonitorMetricAlert#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#name MonitorMetricAlert#name}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#operator MonitorMetricAlert#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#values MonitorMetricAlert#values}.

---

### MonitorMetricAlertDynamicCriteria <a name="MonitorMetricAlertDynamicCriteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_metric_alert.MonitorMetricAlertDynamicCriteria;

MonitorMetricAlertDynamicCriteria.builder()
    .aggregation(java.lang.String)
    .alertSensitivity(java.lang.String)
    .metricName(java.lang.String)
    .metricNamespace(java.lang.String)
    .operator(java.lang.String)
//  .dimension(IResolvable)
//  .dimension(java.util.List<MonitorMetricAlertDynamicCriteriaDimension>)
//  .evaluationFailureCount(java.lang.Number)
//  .evaluationTotalCount(java.lang.Number)
//  .ignoreDataBefore(java.lang.String)
//  .skipMetricValidation(java.lang.Boolean)
//  .skipMetricValidation(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.aggregation">aggregation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#aggregation MonitorMetricAlert#aggregation}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.alertSensitivity">alertSensitivity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#alert_sensitivity MonitorMetricAlert#alert_sensitivity}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#metric_name MonitorMetricAlert#metric_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.metricNamespace">metricNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#metric_namespace MonitorMetricAlert#metric_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#operator MonitorMetricAlert#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.dimension">dimension</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension">MonitorMetricAlertDynamicCriteriaDimension</a>></code> | dimension block. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.evaluationFailureCount">evaluationFailureCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#evaluation_failure_count MonitorMetricAlert#evaluation_failure_count}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.evaluationTotalCount">evaluationTotalCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#evaluation_total_count MonitorMetricAlert#evaluation_total_count}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.ignoreDataBefore">ignoreDataBefore</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#ignore_data_before MonitorMetricAlert#ignore_data_before}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.skipMetricValidation">skipMetricValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#skip_metric_validation MonitorMetricAlert#skip_metric_validation}. |

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.aggregation"></a>

```java
public java.lang.String getAggregation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#aggregation MonitorMetricAlert#aggregation}.

---

##### `alertSensitivity`<sup>Required</sup> <a name="alertSensitivity" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.alertSensitivity"></a>

```java
public java.lang.String getAlertSensitivity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#alert_sensitivity MonitorMetricAlert#alert_sensitivity}.

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#metric_name MonitorMetricAlert#metric_name}.

---

##### `metricNamespace`<sup>Required</sup> <a name="metricNamespace" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.metricNamespace"></a>

```java
public java.lang.String getMetricNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#metric_namespace MonitorMetricAlert#metric_namespace}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#operator MonitorMetricAlert#operator}.

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.dimension"></a>

```java
public java.lang.Object getDimension();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension">MonitorMetricAlertDynamicCriteriaDimension</a>>

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#dimension MonitorMetricAlert#dimension}

---

##### `evaluationFailureCount`<sup>Optional</sup> <a name="evaluationFailureCount" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.evaluationFailureCount"></a>

```java
public java.lang.Number getEvaluationFailureCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#evaluation_failure_count MonitorMetricAlert#evaluation_failure_count}.

---

##### `evaluationTotalCount`<sup>Optional</sup> <a name="evaluationTotalCount" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.evaluationTotalCount"></a>

```java
public java.lang.Number getEvaluationTotalCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#evaluation_total_count MonitorMetricAlert#evaluation_total_count}.

---

##### `ignoreDataBefore`<sup>Optional</sup> <a name="ignoreDataBefore" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.ignoreDataBefore"></a>

```java
public java.lang.String getIgnoreDataBefore();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#ignore_data_before MonitorMetricAlert#ignore_data_before}.

---

##### `skipMetricValidation`<sup>Optional</sup> <a name="skipMetricValidation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.skipMetricValidation"></a>

```java
public java.lang.Object getSkipMetricValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#skip_metric_validation MonitorMetricAlert#skip_metric_validation}.

---

### MonitorMetricAlertDynamicCriteriaDimension <a name="MonitorMetricAlertDynamicCriteriaDimension" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_metric_alert.MonitorMetricAlertDynamicCriteriaDimension;

MonitorMetricAlertDynamicCriteriaDimension.builder()
    .name(java.lang.String)
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#name MonitorMetricAlert#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#operator MonitorMetricAlert#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#values MonitorMetricAlert#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#name MonitorMetricAlert#name}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#operator MonitorMetricAlert#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#values MonitorMetricAlert#values}.

---

### MonitorMetricAlertTimeouts <a name="MonitorMetricAlertTimeouts" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_metric_alert.MonitorMetricAlertTimeouts;

MonitorMetricAlertTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#create MonitorMetricAlert#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#delete MonitorMetricAlert#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#read MonitorMetricAlert#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#update MonitorMetricAlert#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#create MonitorMetricAlert#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#delete MonitorMetricAlert#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#read MonitorMetricAlert#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_metric_alert#update MonitorMetricAlert#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorMetricAlertActionList <a name="MonitorMetricAlertActionList" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_metric_alert.MonitorMetricAlertActionList;

new MonitorMetricAlertActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.get"></a>

```java
public MonitorMetricAlertActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction">MonitorMetricAlertAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction">MonitorMetricAlertAction</a>>

---


### MonitorMetricAlertActionOutputReference <a name="MonitorMetricAlertActionOutputReference" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_metric_alert.MonitorMetricAlertActionOutputReference;

new MonitorMetricAlertActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.resetWebhookProperties">resetWebhookProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWebhookProperties` <a name="resetWebhookProperties" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.resetWebhookProperties"></a>

```java
public void resetWebhookProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.actionGroupIdInput">actionGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.webhookPropertiesInput">webhookPropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.actionGroupId">actionGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.webhookProperties">webhookProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction">MonitorMetricAlertAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionGroupIdInput`<sup>Optional</sup> <a name="actionGroupIdInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.actionGroupIdInput"></a>

```java
public java.lang.String getActionGroupIdInput();
```

- *Type:* java.lang.String

---

##### `webhookPropertiesInput`<sup>Optional</sup> <a name="webhookPropertiesInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.webhookPropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getWebhookPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `actionGroupId`<sup>Required</sup> <a name="actionGroupId" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.actionGroupId"></a>

```java
public java.lang.String getActionGroupId();
```

- *Type:* java.lang.String

---

##### `webhookProperties`<sup>Required</sup> <a name="webhookProperties" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.webhookProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getWebhookProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction">MonitorMetricAlertAction</a>

---


### MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference <a name="MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_metric_alert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference;

new MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.componentIdInput">componentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.failedLocationCountInput">failedLocationCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.webTestIdInput">webTestIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.componentId">componentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.failedLocationCount">failedLocationCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.webTestId">webTestId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria">MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `componentIdInput`<sup>Optional</sup> <a name="componentIdInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.componentIdInput"></a>

```java
public java.lang.String getComponentIdInput();
```

- *Type:* java.lang.String

---

##### `failedLocationCountInput`<sup>Optional</sup> <a name="failedLocationCountInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.failedLocationCountInput"></a>

```java
public java.lang.Number getFailedLocationCountInput();
```

- *Type:* java.lang.Number

---

##### `webTestIdInput`<sup>Optional</sup> <a name="webTestIdInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.webTestIdInput"></a>

```java
public java.lang.String getWebTestIdInput();
```

- *Type:* java.lang.String

---

##### `componentId`<sup>Required</sup> <a name="componentId" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.componentId"></a>

```java
public java.lang.String getComponentId();
```

- *Type:* java.lang.String

---

##### `failedLocationCount`<sup>Required</sup> <a name="failedLocationCount" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.failedLocationCount"></a>

```java
public java.lang.Number getFailedLocationCount();
```

- *Type:* java.lang.Number

---

##### `webTestId`<sup>Required</sup> <a name="webTestId" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.webTestId"></a>

```java
public java.lang.String getWebTestId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.internalValue"></a>

```java
public MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria">MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria</a>

---


### MonitorMetricAlertCriteriaDimensionList <a name="MonitorMetricAlertCriteriaDimensionList" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_metric_alert.MonitorMetricAlertCriteriaDimensionList;

new MonitorMetricAlertCriteriaDimensionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.get"></a>

```java
public MonitorMetricAlertCriteriaDimensionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension">MonitorMetricAlertCriteriaDimension</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension">MonitorMetricAlertCriteriaDimension</a>>

---


### MonitorMetricAlertCriteriaDimensionOutputReference <a name="MonitorMetricAlertCriteriaDimensionOutputReference" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_metric_alert.MonitorMetricAlertCriteriaDimensionOutputReference;

new MonitorMetricAlertCriteriaDimensionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension">MonitorMetricAlertCriteriaDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension">MonitorMetricAlertCriteriaDimension</a>

---


### MonitorMetricAlertCriteriaList <a name="MonitorMetricAlertCriteriaList" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_metric_alert.MonitorMetricAlertCriteriaList;

new MonitorMetricAlertCriteriaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.get"></a>

```java
public MonitorMetricAlertCriteriaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria">MonitorMetricAlertCriteria</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria">MonitorMetricAlertCriteria</a>>

---


### MonitorMetricAlertCriteriaOutputReference <a name="MonitorMetricAlertCriteriaOutputReference" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_metric_alert.MonitorMetricAlertCriteriaOutputReference;

new MonitorMetricAlertCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.resetSkipMetricValidation">resetSkipMetricValidation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimension` <a name="putDimension" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.putDimension"></a>

```java
public void putDimension(IResolvable OR java.util.List<MonitorMetricAlertCriteriaDimension> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.putDimension.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension">MonitorMetricAlertCriteriaDimension</a>>

---

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.resetDimension"></a>

```java
public void resetDimension()
```

##### `resetSkipMetricValidation` <a name="resetSkipMetricValidation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.resetSkipMetricValidation"></a>

```java
public void resetSkipMetricValidation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList">MonitorMetricAlertCriteriaDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.aggregationInput">aggregationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.dimensionInput">dimensionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension">MonitorMetricAlertCriteriaDimension</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.metricNamespaceInput">metricNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.skipMetricValidationInput">skipMetricValidationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.aggregation">aggregation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.metricNamespace">metricNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.skipMetricValidation">skipMetricValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria">MonitorMetricAlertCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.dimension"></a>

```java
public MonitorMetricAlertCriteriaDimensionList getDimension();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList">MonitorMetricAlertCriteriaDimensionList</a>

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.aggregationInput"></a>

```java
public java.lang.String getAggregationInput();
```

- *Type:* java.lang.String

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.dimensionInput"></a>

```java
public java.lang.Object getDimensionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension">MonitorMetricAlertCriteriaDimension</a>>

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `metricNamespaceInput`<sup>Optional</sup> <a name="metricNamespaceInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.metricNamespaceInput"></a>

```java
public java.lang.String getMetricNamespaceInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `skipMetricValidationInput`<sup>Optional</sup> <a name="skipMetricValidationInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.skipMetricValidationInput"></a>

```java
public java.lang.Object getSkipMetricValidationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.aggregation"></a>

```java
public java.lang.String getAggregation();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `metricNamespace`<sup>Required</sup> <a name="metricNamespace" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.metricNamespace"></a>

```java
public java.lang.String getMetricNamespace();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `skipMetricValidation`<sup>Required</sup> <a name="skipMetricValidation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.skipMetricValidation"></a>

```java
public java.lang.Object getSkipMetricValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria">MonitorMetricAlertCriteria</a>

---


### MonitorMetricAlertDynamicCriteriaDimensionList <a name="MonitorMetricAlertDynamicCriteriaDimensionList" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_metric_alert.MonitorMetricAlertDynamicCriteriaDimensionList;

new MonitorMetricAlertDynamicCriteriaDimensionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.get"></a>

```java
public MonitorMetricAlertDynamicCriteriaDimensionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension">MonitorMetricAlertDynamicCriteriaDimension</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension">MonitorMetricAlertDynamicCriteriaDimension</a>>

---


### MonitorMetricAlertDynamicCriteriaDimensionOutputReference <a name="MonitorMetricAlertDynamicCriteriaDimensionOutputReference" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_metric_alert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference;

new MonitorMetricAlertDynamicCriteriaDimensionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension">MonitorMetricAlertDynamicCriteriaDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension">MonitorMetricAlertDynamicCriteriaDimension</a>

---


### MonitorMetricAlertDynamicCriteriaOutputReference <a name="MonitorMetricAlertDynamicCriteriaOutputReference" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_metric_alert.MonitorMetricAlertDynamicCriteriaOutputReference;

new MonitorMetricAlertDynamicCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resetEvaluationFailureCount">resetEvaluationFailureCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resetEvaluationTotalCount">resetEvaluationTotalCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resetIgnoreDataBefore">resetIgnoreDataBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resetSkipMetricValidation">resetSkipMetricValidation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimension` <a name="putDimension" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.putDimension"></a>

```java
public void putDimension(IResolvable OR java.util.List<MonitorMetricAlertDynamicCriteriaDimension> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.putDimension.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension">MonitorMetricAlertDynamicCriteriaDimension</a>>

---

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resetDimension"></a>

```java
public void resetDimension()
```

##### `resetEvaluationFailureCount` <a name="resetEvaluationFailureCount" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resetEvaluationFailureCount"></a>

```java
public void resetEvaluationFailureCount()
```

##### `resetEvaluationTotalCount` <a name="resetEvaluationTotalCount" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resetEvaluationTotalCount"></a>

```java
public void resetEvaluationTotalCount()
```

##### `resetIgnoreDataBefore` <a name="resetIgnoreDataBefore" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resetIgnoreDataBefore"></a>

```java
public void resetIgnoreDataBefore()
```

##### `resetSkipMetricValidation` <a name="resetSkipMetricValidation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resetSkipMetricValidation"></a>

```java
public void resetSkipMetricValidation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList">MonitorMetricAlertDynamicCriteriaDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.aggregationInput">aggregationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.alertSensitivityInput">alertSensitivityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.dimensionInput">dimensionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension">MonitorMetricAlertDynamicCriteriaDimension</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.evaluationFailureCountInput">evaluationFailureCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.evaluationTotalCountInput">evaluationTotalCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.ignoreDataBeforeInput">ignoreDataBeforeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.metricNamespaceInput">metricNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.skipMetricValidationInput">skipMetricValidationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.aggregation">aggregation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.alertSensitivity">alertSensitivity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.evaluationFailureCount">evaluationFailureCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.evaluationTotalCount">evaluationTotalCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.ignoreDataBefore">ignoreDataBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.metricNamespace">metricNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.skipMetricValidation">skipMetricValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria">MonitorMetricAlertDynamicCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.dimension"></a>

```java
public MonitorMetricAlertDynamicCriteriaDimensionList getDimension();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList">MonitorMetricAlertDynamicCriteriaDimensionList</a>

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.aggregationInput"></a>

```java
public java.lang.String getAggregationInput();
```

- *Type:* java.lang.String

---

##### `alertSensitivityInput`<sup>Optional</sup> <a name="alertSensitivityInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.alertSensitivityInput"></a>

```java
public java.lang.String getAlertSensitivityInput();
```

- *Type:* java.lang.String

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.dimensionInput"></a>

```java
public java.lang.Object getDimensionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension">MonitorMetricAlertDynamicCriteriaDimension</a>>

---

##### `evaluationFailureCountInput`<sup>Optional</sup> <a name="evaluationFailureCountInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.evaluationFailureCountInput"></a>

```java
public java.lang.Number getEvaluationFailureCountInput();
```

- *Type:* java.lang.Number

---

##### `evaluationTotalCountInput`<sup>Optional</sup> <a name="evaluationTotalCountInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.evaluationTotalCountInput"></a>

```java
public java.lang.Number getEvaluationTotalCountInput();
```

- *Type:* java.lang.Number

---

##### `ignoreDataBeforeInput`<sup>Optional</sup> <a name="ignoreDataBeforeInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.ignoreDataBeforeInput"></a>

```java
public java.lang.String getIgnoreDataBeforeInput();
```

- *Type:* java.lang.String

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `metricNamespaceInput`<sup>Optional</sup> <a name="metricNamespaceInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.metricNamespaceInput"></a>

```java
public java.lang.String getMetricNamespaceInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `skipMetricValidationInput`<sup>Optional</sup> <a name="skipMetricValidationInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.skipMetricValidationInput"></a>

```java
public java.lang.Object getSkipMetricValidationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.aggregation"></a>

```java
public java.lang.String getAggregation();
```

- *Type:* java.lang.String

---

##### `alertSensitivity`<sup>Required</sup> <a name="alertSensitivity" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.alertSensitivity"></a>

```java
public java.lang.String getAlertSensitivity();
```

- *Type:* java.lang.String

---

##### `evaluationFailureCount`<sup>Required</sup> <a name="evaluationFailureCount" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.evaluationFailureCount"></a>

```java
public java.lang.Number getEvaluationFailureCount();
```

- *Type:* java.lang.Number

---

##### `evaluationTotalCount`<sup>Required</sup> <a name="evaluationTotalCount" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.evaluationTotalCount"></a>

```java
public java.lang.Number getEvaluationTotalCount();
```

- *Type:* java.lang.Number

---

##### `ignoreDataBefore`<sup>Required</sup> <a name="ignoreDataBefore" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.ignoreDataBefore"></a>

```java
public java.lang.String getIgnoreDataBefore();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `metricNamespace`<sup>Required</sup> <a name="metricNamespace" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.metricNamespace"></a>

```java
public java.lang.String getMetricNamespace();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `skipMetricValidation`<sup>Required</sup> <a name="skipMetricValidation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.skipMetricValidation"></a>

```java
public java.lang.Object getSkipMetricValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.internalValue"></a>

```java
public MonitorMetricAlertDynamicCriteria getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria">MonitorMetricAlertDynamicCriteria</a>

---


### MonitorMetricAlertTimeoutsOutputReference <a name="MonitorMetricAlertTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_metric_alert.MonitorMetricAlertTimeoutsOutputReference;

new MonitorMetricAlertTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts">MonitorMetricAlertTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts">MonitorMetricAlertTimeouts</a>

---



