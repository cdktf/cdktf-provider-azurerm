# `azurerm_monitor_metric_alert`

Refer to the Terraform Registory for docs: [`azurerm_monitor_metric_alert`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert).

# `monitorMetricAlert` Submodule <a name="`monitorMetricAlert` Submodule" id="@cdktf/provider-azurerm.monitorMetricAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorMetricAlert <a name="MonitorMetricAlert" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert azurerm_monitor_metric_alert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_metric_alert

monitorMetricAlert.MonitorMetricAlert(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  scopes: typing.List[str],
  action: typing.Union[IResolvable, typing.List[MonitorMetricAlertAction]] = None,
  application_insights_web_test_location_availability_criteria: MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria = None,
  auto_mitigate: typing.Union[bool, IResolvable] = None,
  criteria: typing.Union[IResolvable, typing.List[MonitorMetricAlertCriteria]] = None,
  description: str = None,
  dynamic_criteria: MonitorMetricAlertDynamicCriteria = None,
  enabled: typing.Union[bool, IResolvable] = None,
  frequency: str = None,
  id: str = None,
  severity: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  target_resource_location: str = None,
  target_resource_type: str = None,
  timeouts: MonitorMetricAlertTimeouts = None,
  window_size: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#name MonitorMetricAlert#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#resource_group_name MonitorMetricAlert#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.scopes">scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#scopes MonitorMetricAlert#scopes}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.action">action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction">MonitorMetricAlertAction</a>]]</code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.applicationInsightsWebTestLocationAvailabilityCriteria">application_insights_web_test_location_availability_criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria">MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria</a></code> | application_insights_web_test_location_availability_criteria block. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.autoMitigate">auto_mitigate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#auto_mitigate MonitorMetricAlert#auto_mitigate}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.criteria">criteria</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria">MonitorMetricAlertCriteria</a>]]</code> | criteria block. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#description MonitorMetricAlert#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.dynamicCriteria">dynamic_criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria">MonitorMetricAlertDynamicCriteria</a></code> | dynamic_criteria block. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#enabled MonitorMetricAlert#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.frequency">frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#frequency MonitorMetricAlert#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#id MonitorMetricAlert#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.severity">severity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#severity MonitorMetricAlert#severity}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#tags MonitorMetricAlert#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.targetResourceLocation">target_resource_location</a></code> | <code>str</code> | The location of the target pluginsdk. Required when using subscription, resource group scope or multiple scopes. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.targetResourceType">target_resource_type</a></code> | <code>str</code> | The resource type (e.g. Microsoft.Compute/virtualMachines) of the target pluginsdk. Required when using subscription, resource group scope or multiple scopes. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts">MonitorMetricAlertTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.windowSize">window_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#window_size MonitorMetricAlert#window_size}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#name MonitorMetricAlert#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#resource_group_name MonitorMetricAlert#resource_group_name}.

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.scopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#scopes MonitorMetricAlert#scopes}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.action"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction">MonitorMetricAlertAction</a>]]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#action MonitorMetricAlert#action}

---

##### `application_insights_web_test_location_availability_criteria`<sup>Optional</sup> <a name="application_insights_web_test_location_availability_criteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.applicationInsightsWebTestLocationAvailabilityCriteria"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria">MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria</a>

application_insights_web_test_location_availability_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#application_insights_web_test_location_availability_criteria MonitorMetricAlert#application_insights_web_test_location_availability_criteria}

---

##### `auto_mitigate`<sup>Optional</sup> <a name="auto_mitigate" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.autoMitigate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#auto_mitigate MonitorMetricAlert#auto_mitigate}.

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.criteria"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria">MonitorMetricAlertCriteria</a>]]

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#criteria MonitorMetricAlert#criteria}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#description MonitorMetricAlert#description}.

---

##### `dynamic_criteria`<sup>Optional</sup> <a name="dynamic_criteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.dynamicCriteria"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria">MonitorMetricAlertDynamicCriteria</a>

dynamic_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#dynamic_criteria MonitorMetricAlert#dynamic_criteria}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#enabled MonitorMetricAlert#enabled}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.frequency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#frequency MonitorMetricAlert#frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#id MonitorMetricAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.severity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#severity MonitorMetricAlert#severity}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#tags MonitorMetricAlert#tags}.

---

##### `target_resource_location`<sup>Optional</sup> <a name="target_resource_location" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.targetResourceLocation"></a>

- *Type:* str

The location of the target pluginsdk. Required when using subscription, resource group scope or multiple scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#target_resource_location MonitorMetricAlert#target_resource_location}

---

##### `target_resource_type`<sup>Optional</sup> <a name="target_resource_type" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.targetResourceType"></a>

- *Type:* str

The resource type (e.g. Microsoft.Compute/virtualMachines) of the target pluginsdk. Required when using subscription, resource group scope or multiple scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#target_resource_type MonitorMetricAlert#target_resource_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts">MonitorMetricAlertTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#timeouts MonitorMetricAlert#timeouts}

---

##### `window_size`<sup>Optional</sup> <a name="window_size" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.Initializer.parameter.windowSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#window_size MonitorMetricAlert#window_size}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putApplicationInsightsWebTestLocationAvailabilityCriteria">put_application_insights_web_test_location_availability_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putCriteria">put_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putDynamicCriteria">put_dynamic_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetApplicationInsightsWebTestLocationAvailabilityCriteria">reset_application_insights_web_test_location_availability_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetAutoMitigate">reset_auto_mitigate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetCriteria">reset_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetDynamicCriteria">reset_dynamic_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetFrequency">reset_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetSeverity">reset_severity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetTargetResourceLocation">reset_target_resource_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetTargetResourceType">reset_target_resource_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetWindowSize">reset_window_size</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_action` <a name="put_action" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putAction"></a>

```python
def put_action(
  value: typing.Union[IResolvable, typing.List[MonitorMetricAlertAction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putAction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction">MonitorMetricAlertAction</a>]]

---

##### `put_application_insights_web_test_location_availability_criteria` <a name="put_application_insights_web_test_location_availability_criteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putApplicationInsightsWebTestLocationAvailabilityCriteria"></a>

```python
def put_application_insights_web_test_location_availability_criteria(
  component_id: str,
  failed_location_count: typing.Union[int, float],
  web_test_id: str
) -> None
```

###### `component_id`<sup>Required</sup> <a name="component_id" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putApplicationInsightsWebTestLocationAvailabilityCriteria.parameter.componentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#component_id MonitorMetricAlert#component_id}.

---

###### `failed_location_count`<sup>Required</sup> <a name="failed_location_count" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putApplicationInsightsWebTestLocationAvailabilityCriteria.parameter.failedLocationCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#failed_location_count MonitorMetricAlert#failed_location_count}.

---

###### `web_test_id`<sup>Required</sup> <a name="web_test_id" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putApplicationInsightsWebTestLocationAvailabilityCriteria.parameter.webTestId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#web_test_id MonitorMetricAlert#web_test_id}.

---

##### `put_criteria` <a name="put_criteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putCriteria"></a>

```python
def put_criteria(
  value: typing.Union[IResolvable, typing.List[MonitorMetricAlertCriteria]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putCriteria.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria">MonitorMetricAlertCriteria</a>]]

---

##### `put_dynamic_criteria` <a name="put_dynamic_criteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putDynamicCriteria"></a>

```python
def put_dynamic_criteria(
  aggregation: str,
  alert_sensitivity: str,
  metric_name: str,
  metric_namespace: str,
  operator: str,
  dimension: typing.Union[IResolvable, typing.List[MonitorMetricAlertDynamicCriteriaDimension]] = None,
  evaluation_failure_count: typing.Union[int, float] = None,
  evaluation_total_count: typing.Union[int, float] = None,
  ignore_data_before: str = None,
  skip_metric_validation: typing.Union[bool, IResolvable] = None
) -> None
```

###### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putDynamicCriteria.parameter.aggregation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#aggregation MonitorMetricAlert#aggregation}.

---

###### `alert_sensitivity`<sup>Required</sup> <a name="alert_sensitivity" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putDynamicCriteria.parameter.alertSensitivity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#alert_sensitivity MonitorMetricAlert#alert_sensitivity}.

---

###### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putDynamicCriteria.parameter.metricName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#metric_name MonitorMetricAlert#metric_name}.

---

###### `metric_namespace`<sup>Required</sup> <a name="metric_namespace" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putDynamicCriteria.parameter.metricNamespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#metric_namespace MonitorMetricAlert#metric_namespace}.

---

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putDynamicCriteria.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#operator MonitorMetricAlert#operator}.

---

###### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putDynamicCriteria.parameter.dimension"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension">MonitorMetricAlertDynamicCriteriaDimension</a>]]

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#dimension MonitorMetricAlert#dimension}

---

###### `evaluation_failure_count`<sup>Optional</sup> <a name="evaluation_failure_count" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putDynamicCriteria.parameter.evaluationFailureCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#evaluation_failure_count MonitorMetricAlert#evaluation_failure_count}.

---

###### `evaluation_total_count`<sup>Optional</sup> <a name="evaluation_total_count" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putDynamicCriteria.parameter.evaluationTotalCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#evaluation_total_count MonitorMetricAlert#evaluation_total_count}.

---

###### `ignore_data_before`<sup>Optional</sup> <a name="ignore_data_before" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putDynamicCriteria.parameter.ignoreDataBefore"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#ignore_data_before MonitorMetricAlert#ignore_data_before}.

---

###### `skip_metric_validation`<sup>Optional</sup> <a name="skip_metric_validation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putDynamicCriteria.parameter.skipMetricValidation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#skip_metric_validation MonitorMetricAlert#skip_metric_validation}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#create MonitorMetricAlert#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#delete MonitorMetricAlert#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#read MonitorMetricAlert#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#update MonitorMetricAlert#update}.

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_application_insights_web_test_location_availability_criteria` <a name="reset_application_insights_web_test_location_availability_criteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetApplicationInsightsWebTestLocationAvailabilityCriteria"></a>

```python
def reset_application_insights_web_test_location_availability_criteria() -> None
```

##### `reset_auto_mitigate` <a name="reset_auto_mitigate" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetAutoMitigate"></a>

```python
def reset_auto_mitigate() -> None
```

##### `reset_criteria` <a name="reset_criteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetCriteria"></a>

```python
def reset_criteria() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dynamic_criteria` <a name="reset_dynamic_criteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetDynamicCriteria"></a>

```python
def reset_dynamic_criteria() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_frequency` <a name="reset_frequency" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetFrequency"></a>

```python
def reset_frequency() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_severity` <a name="reset_severity" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetSeverity"></a>

```python
def reset_severity() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_target_resource_location` <a name="reset_target_resource_location" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetTargetResourceLocation"></a>

```python
def reset_target_resource_location() -> None
```

##### `reset_target_resource_type` <a name="reset_target_resource_type" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetTargetResourceType"></a>

```python
def reset_target_resource_type() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_window_size` <a name="reset_window_size" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.resetWindowSize"></a>

```python
def reset_window_size() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_metric_alert

monitorMetricAlert.MonitorMetricAlert.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_metric_alert

monitorMetricAlert.MonitorMetricAlert.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_metric_alert

monitorMetricAlert.MonitorMetricAlert.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.action">action</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList">MonitorMetricAlertActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.applicationInsightsWebTestLocationAvailabilityCriteria">application_insights_web_test_location_availability_criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference">MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList">MonitorMetricAlertCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.dynamicCriteria">dynamic_criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference">MonitorMetricAlertDynamicCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference">MonitorMetricAlertTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.actionInput">action_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction">MonitorMetricAlertAction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.applicationInsightsWebTestLocationAvailabilityCriteriaInput">application_insights_web_test_location_availability_criteria_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria">MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.autoMitigateInput">auto_mitigate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.criteriaInput">criteria_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria">MonitorMetricAlertCriteria</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.dynamicCriteriaInput">dynamic_criteria_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria">MonitorMetricAlertDynamicCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.frequencyInput">frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.severityInput">severity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.targetResourceLocationInput">target_resource_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.targetResourceTypeInput">target_resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts">MonitorMetricAlertTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.windowSizeInput">window_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.autoMitigate">auto_mitigate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.severity">severity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.targetResourceLocation">target_resource_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.targetResourceType">target_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.windowSize">window_size</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.action"></a>

```python
action: MonitorMetricAlertActionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList">MonitorMetricAlertActionList</a>

---

##### `application_insights_web_test_location_availability_criteria`<sup>Required</sup> <a name="application_insights_web_test_location_availability_criteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.applicationInsightsWebTestLocationAvailabilityCriteria"></a>

```python
application_insights_web_test_location_availability_criteria: MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference">MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference</a>

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.criteria"></a>

```python
criteria: MonitorMetricAlertCriteriaList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList">MonitorMetricAlertCriteriaList</a>

---

##### `dynamic_criteria`<sup>Required</sup> <a name="dynamic_criteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.dynamicCriteria"></a>

```python
dynamic_criteria: MonitorMetricAlertDynamicCriteriaOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference">MonitorMetricAlertDynamicCriteriaOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.timeouts"></a>

```python
timeouts: MonitorMetricAlertTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference">MonitorMetricAlertTimeoutsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.actionInput"></a>

```python
action_input: typing.Union[IResolvable, typing.List[MonitorMetricAlertAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction">MonitorMetricAlertAction</a>]]

---

##### `application_insights_web_test_location_availability_criteria_input`<sup>Optional</sup> <a name="application_insights_web_test_location_availability_criteria_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.applicationInsightsWebTestLocationAvailabilityCriteriaInput"></a>

```python
application_insights_web_test_location_availability_criteria_input: MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria">MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria</a>

---

##### `auto_mitigate_input`<sup>Optional</sup> <a name="auto_mitigate_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.autoMitigateInput"></a>

```python
auto_mitigate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `criteria_input`<sup>Optional</sup> <a name="criteria_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.criteriaInput"></a>

```python
criteria_input: typing.Union[IResolvable, typing.List[MonitorMetricAlertCriteria]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria">MonitorMetricAlertCriteria</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dynamic_criteria_input`<sup>Optional</sup> <a name="dynamic_criteria_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.dynamicCriteriaInput"></a>

```python
dynamic_criteria_input: MonitorMetricAlertDynamicCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria">MonitorMetricAlertDynamicCriteria</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.frequencyInput"></a>

```python
frequency_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.severityInput"></a>

```python
severity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_resource_location_input`<sup>Optional</sup> <a name="target_resource_location_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.targetResourceLocationInput"></a>

```python
target_resource_location_input: str
```

- *Type:* str

---

##### `target_resource_type_input`<sup>Optional</sup> <a name="target_resource_type_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.targetResourceTypeInput"></a>

```python
target_resource_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MonitorMetricAlertTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts">MonitorMetricAlertTimeouts</a>]

---

##### `window_size_input`<sup>Optional</sup> <a name="window_size_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.windowSizeInput"></a>

```python
window_size_input: str
```

- *Type:* str

---

##### `auto_mitigate`<sup>Required</sup> <a name="auto_mitigate" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.autoMitigate"></a>

```python
auto_mitigate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.severity"></a>

```python
severity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_resource_location`<sup>Required</sup> <a name="target_resource_location" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.targetResourceLocation"></a>

```python
target_resource_location: str
```

- *Type:* str

---

##### `target_resource_type`<sup>Required</sup> <a name="target_resource_type" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.targetResourceType"></a>

```python
target_resource_type: str
```

- *Type:* str

---

##### `window_size`<sup>Required</sup> <a name="window_size" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.windowSize"></a>

```python
window_size: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlert.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorMetricAlertAction <a name="MonitorMetricAlertAction" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_metric_alert

monitorMetricAlert.MonitorMetricAlertAction(
  action_group_id: str,
  webhook_properties: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction.property.actionGroupId">action_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#action_group_id MonitorMetricAlert#action_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction.property.webhookProperties">webhook_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#webhook_properties MonitorMetricAlert#webhook_properties}. |

---

##### `action_group_id`<sup>Required</sup> <a name="action_group_id" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction.property.actionGroupId"></a>

```python
action_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#action_group_id MonitorMetricAlert#action_group_id}.

---

##### `webhook_properties`<sup>Optional</sup> <a name="webhook_properties" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction.property.webhookProperties"></a>

```python
webhook_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#webhook_properties MonitorMetricAlert#webhook_properties}.

---

### MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria <a name="MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_metric_alert

monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria(
  component_id: str,
  failed_location_count: typing.Union[int, float],
  web_test_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria.property.componentId">component_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#component_id MonitorMetricAlert#component_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria.property.failedLocationCount">failed_location_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#failed_location_count MonitorMetricAlert#failed_location_count}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria.property.webTestId">web_test_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#web_test_id MonitorMetricAlert#web_test_id}. |

---

##### `component_id`<sup>Required</sup> <a name="component_id" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria.property.componentId"></a>

```python
component_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#component_id MonitorMetricAlert#component_id}.

---

##### `failed_location_count`<sup>Required</sup> <a name="failed_location_count" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria.property.failedLocationCount"></a>

```python
failed_location_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#failed_location_count MonitorMetricAlert#failed_location_count}.

---

##### `web_test_id`<sup>Required</sup> <a name="web_test_id" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria.property.webTestId"></a>

```python
web_test_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#web_test_id MonitorMetricAlert#web_test_id}.

---

### MonitorMetricAlertConfig <a name="MonitorMetricAlertConfig" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_metric_alert

monitorMetricAlert.MonitorMetricAlertConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  scopes: typing.List[str],
  action: typing.Union[IResolvable, typing.List[MonitorMetricAlertAction]] = None,
  application_insights_web_test_location_availability_criteria: MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria = None,
  auto_mitigate: typing.Union[bool, IResolvable] = None,
  criteria: typing.Union[IResolvable, typing.List[MonitorMetricAlertCriteria]] = None,
  description: str = None,
  dynamic_criteria: MonitorMetricAlertDynamicCriteria = None,
  enabled: typing.Union[bool, IResolvable] = None,
  frequency: str = None,
  id: str = None,
  severity: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  target_resource_location: str = None,
  target_resource_type: str = None,
  timeouts: MonitorMetricAlertTimeouts = None,
  window_size: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#name MonitorMetricAlert#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#resource_group_name MonitorMetricAlert#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#scopes MonitorMetricAlert#scopes}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.action">action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction">MonitorMetricAlertAction</a>]]</code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.applicationInsightsWebTestLocationAvailabilityCriteria">application_insights_web_test_location_availability_criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria">MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria</a></code> | application_insights_web_test_location_availability_criteria block. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.autoMitigate">auto_mitigate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#auto_mitigate MonitorMetricAlert#auto_mitigate}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.criteria">criteria</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria">MonitorMetricAlertCriteria</a>]]</code> | criteria block. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#description MonitorMetricAlert#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.dynamicCriteria">dynamic_criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria">MonitorMetricAlertDynamicCriteria</a></code> | dynamic_criteria block. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#enabled MonitorMetricAlert#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.frequency">frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#frequency MonitorMetricAlert#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#id MonitorMetricAlert#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.severity">severity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#severity MonitorMetricAlert#severity}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#tags MonitorMetricAlert#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.targetResourceLocation">target_resource_location</a></code> | <code>str</code> | The location of the target pluginsdk. Required when using subscription, resource group scope or multiple scopes. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.targetResourceType">target_resource_type</a></code> | <code>str</code> | The resource type (e.g. Microsoft.Compute/virtualMachines) of the target pluginsdk. Required when using subscription, resource group scope or multiple scopes. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts">MonitorMetricAlertTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.windowSize">window_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#window_size MonitorMetricAlert#window_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#name MonitorMetricAlert#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#resource_group_name MonitorMetricAlert#resource_group_name}.

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#scopes MonitorMetricAlert#scopes}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.action"></a>

```python
action: typing.Union[IResolvable, typing.List[MonitorMetricAlertAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction">MonitorMetricAlertAction</a>]]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#action MonitorMetricAlert#action}

---

##### `application_insights_web_test_location_availability_criteria`<sup>Optional</sup> <a name="application_insights_web_test_location_availability_criteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.applicationInsightsWebTestLocationAvailabilityCriteria"></a>

```python
application_insights_web_test_location_availability_criteria: MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria">MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria</a>

application_insights_web_test_location_availability_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#application_insights_web_test_location_availability_criteria MonitorMetricAlert#application_insights_web_test_location_availability_criteria}

---

##### `auto_mitigate`<sup>Optional</sup> <a name="auto_mitigate" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.autoMitigate"></a>

```python
auto_mitigate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#auto_mitigate MonitorMetricAlert#auto_mitigate}.

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.criteria"></a>

```python
criteria: typing.Union[IResolvable, typing.List[MonitorMetricAlertCriteria]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria">MonitorMetricAlertCriteria</a>]]

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#criteria MonitorMetricAlert#criteria}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#description MonitorMetricAlert#description}.

---

##### `dynamic_criteria`<sup>Optional</sup> <a name="dynamic_criteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.dynamicCriteria"></a>

```python
dynamic_criteria: MonitorMetricAlertDynamicCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria">MonitorMetricAlertDynamicCriteria</a>

dynamic_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#dynamic_criteria MonitorMetricAlert#dynamic_criteria}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#enabled MonitorMetricAlert#enabled}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#frequency MonitorMetricAlert#frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#id MonitorMetricAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.severity"></a>

```python
severity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#severity MonitorMetricAlert#severity}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#tags MonitorMetricAlert#tags}.

---

##### `target_resource_location`<sup>Optional</sup> <a name="target_resource_location" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.targetResourceLocation"></a>

```python
target_resource_location: str
```

- *Type:* str

The location of the target pluginsdk. Required when using subscription, resource group scope or multiple scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#target_resource_location MonitorMetricAlert#target_resource_location}

---

##### `target_resource_type`<sup>Optional</sup> <a name="target_resource_type" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.targetResourceType"></a>

```python
target_resource_type: str
```

- *Type:* str

The resource type (e.g. Microsoft.Compute/virtualMachines) of the target pluginsdk. Required when using subscription, resource group scope or multiple scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#target_resource_type MonitorMetricAlert#target_resource_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.timeouts"></a>

```python
timeouts: MonitorMetricAlertTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts">MonitorMetricAlertTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#timeouts MonitorMetricAlert#timeouts}

---

##### `window_size`<sup>Optional</sup> <a name="window_size" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertConfig.property.windowSize"></a>

```python
window_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#window_size MonitorMetricAlert#window_size}.

---

### MonitorMetricAlertCriteria <a name="MonitorMetricAlertCriteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_metric_alert

monitorMetricAlert.MonitorMetricAlertCriteria(
  aggregation: str,
  metric_name: str,
  metric_namespace: str,
  operator: str,
  threshold: typing.Union[int, float],
  dimension: typing.Union[IResolvable, typing.List[MonitorMetricAlertCriteriaDimension]] = None,
  skip_metric_validation: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.aggregation">aggregation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#aggregation MonitorMetricAlert#aggregation}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#metric_name MonitorMetricAlert#metric_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.metricNamespace">metric_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#metric_namespace MonitorMetricAlert#metric_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#operator MonitorMetricAlert#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#threshold MonitorMetricAlert#threshold}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.dimension">dimension</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension">MonitorMetricAlertCriteriaDimension</a>]]</code> | dimension block. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.skipMetricValidation">skip_metric_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#skip_metric_validation MonitorMetricAlert#skip_metric_validation}. |

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#aggregation MonitorMetricAlert#aggregation}.

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#metric_name MonitorMetricAlert#metric_name}.

---

##### `metric_namespace`<sup>Required</sup> <a name="metric_namespace" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.metricNamespace"></a>

```python
metric_namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#metric_namespace MonitorMetricAlert#metric_namespace}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#operator MonitorMetricAlert#operator}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#threshold MonitorMetricAlert#threshold}.

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.dimension"></a>

```python
dimension: typing.Union[IResolvable, typing.List[MonitorMetricAlertCriteriaDimension]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension">MonitorMetricAlertCriteriaDimension</a>]]

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#dimension MonitorMetricAlert#dimension}

---

##### `skip_metric_validation`<sup>Optional</sup> <a name="skip_metric_validation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria.property.skipMetricValidation"></a>

```python
skip_metric_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#skip_metric_validation MonitorMetricAlert#skip_metric_validation}.

---

### MonitorMetricAlertCriteriaDimension <a name="MonitorMetricAlertCriteriaDimension" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_metric_alert

monitorMetricAlert.MonitorMetricAlertCriteriaDimension(
  name: str,
  operator: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#name MonitorMetricAlert#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#operator MonitorMetricAlert#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#values MonitorMetricAlert#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#name MonitorMetricAlert#name}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#operator MonitorMetricAlert#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#values MonitorMetricAlert#values}.

---

### MonitorMetricAlertDynamicCriteria <a name="MonitorMetricAlertDynamicCriteria" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_metric_alert

monitorMetricAlert.MonitorMetricAlertDynamicCriteria(
  aggregation: str,
  alert_sensitivity: str,
  metric_name: str,
  metric_namespace: str,
  operator: str,
  dimension: typing.Union[IResolvable, typing.List[MonitorMetricAlertDynamicCriteriaDimension]] = None,
  evaluation_failure_count: typing.Union[int, float] = None,
  evaluation_total_count: typing.Union[int, float] = None,
  ignore_data_before: str = None,
  skip_metric_validation: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.aggregation">aggregation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#aggregation MonitorMetricAlert#aggregation}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.alertSensitivity">alert_sensitivity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#alert_sensitivity MonitorMetricAlert#alert_sensitivity}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#metric_name MonitorMetricAlert#metric_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.metricNamespace">metric_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#metric_namespace MonitorMetricAlert#metric_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#operator MonitorMetricAlert#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.dimension">dimension</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension">MonitorMetricAlertDynamicCriteriaDimension</a>]]</code> | dimension block. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.evaluationFailureCount">evaluation_failure_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#evaluation_failure_count MonitorMetricAlert#evaluation_failure_count}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.evaluationTotalCount">evaluation_total_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#evaluation_total_count MonitorMetricAlert#evaluation_total_count}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.ignoreDataBefore">ignore_data_before</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#ignore_data_before MonitorMetricAlert#ignore_data_before}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.skipMetricValidation">skip_metric_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#skip_metric_validation MonitorMetricAlert#skip_metric_validation}. |

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#aggregation MonitorMetricAlert#aggregation}.

---

##### `alert_sensitivity`<sup>Required</sup> <a name="alert_sensitivity" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.alertSensitivity"></a>

```python
alert_sensitivity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#alert_sensitivity MonitorMetricAlert#alert_sensitivity}.

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#metric_name MonitorMetricAlert#metric_name}.

---

##### `metric_namespace`<sup>Required</sup> <a name="metric_namespace" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.metricNamespace"></a>

```python
metric_namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#metric_namespace MonitorMetricAlert#metric_namespace}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#operator MonitorMetricAlert#operator}.

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.dimension"></a>

```python
dimension: typing.Union[IResolvable, typing.List[MonitorMetricAlertDynamicCriteriaDimension]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension">MonitorMetricAlertDynamicCriteriaDimension</a>]]

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#dimension MonitorMetricAlert#dimension}

---

##### `evaluation_failure_count`<sup>Optional</sup> <a name="evaluation_failure_count" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.evaluationFailureCount"></a>

```python
evaluation_failure_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#evaluation_failure_count MonitorMetricAlert#evaluation_failure_count}.

---

##### `evaluation_total_count`<sup>Optional</sup> <a name="evaluation_total_count" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.evaluationTotalCount"></a>

```python
evaluation_total_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#evaluation_total_count MonitorMetricAlert#evaluation_total_count}.

---

##### `ignore_data_before`<sup>Optional</sup> <a name="ignore_data_before" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.ignoreDataBefore"></a>

```python
ignore_data_before: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#ignore_data_before MonitorMetricAlert#ignore_data_before}.

---

##### `skip_metric_validation`<sup>Optional</sup> <a name="skip_metric_validation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria.property.skipMetricValidation"></a>

```python
skip_metric_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#skip_metric_validation MonitorMetricAlert#skip_metric_validation}.

---

### MonitorMetricAlertDynamicCriteriaDimension <a name="MonitorMetricAlertDynamicCriteriaDimension" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_metric_alert

monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension(
  name: str,
  operator: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#name MonitorMetricAlert#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#operator MonitorMetricAlert#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#values MonitorMetricAlert#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#name MonitorMetricAlert#name}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#operator MonitorMetricAlert#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#values MonitorMetricAlert#values}.

---

### MonitorMetricAlertTimeouts <a name="MonitorMetricAlertTimeouts" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_metric_alert

monitorMetricAlert.MonitorMetricAlertTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#create MonitorMetricAlert#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#delete MonitorMetricAlert#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#read MonitorMetricAlert#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#update MonitorMetricAlert#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#create MonitorMetricAlert#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#delete MonitorMetricAlert#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#read MonitorMetricAlert#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/monitor_metric_alert#update MonitorMetricAlert#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorMetricAlertActionList <a name="MonitorMetricAlertActionList" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_metric_alert

monitorMetricAlert.MonitorMetricAlertActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorMetricAlertActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction">MonitorMetricAlertAction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorMetricAlertAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction">MonitorMetricAlertAction</a>]]

---


### MonitorMetricAlertActionOutputReference <a name="MonitorMetricAlertActionOutputReference" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_metric_alert

monitorMetricAlert.MonitorMetricAlertActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.resetWebhookProperties">reset_webhook_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_webhook_properties` <a name="reset_webhook_properties" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.resetWebhookProperties"></a>

```python
def reset_webhook_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.actionGroupIdInput">action_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.webhookPropertiesInput">webhook_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.actionGroupId">action_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.webhookProperties">webhook_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction">MonitorMetricAlertAction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_group_id_input`<sup>Optional</sup> <a name="action_group_id_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.actionGroupIdInput"></a>

```python
action_group_id_input: str
```

- *Type:* str

---

##### `webhook_properties_input`<sup>Optional</sup> <a name="webhook_properties_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.webhookPropertiesInput"></a>

```python
webhook_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `action_group_id`<sup>Required</sup> <a name="action_group_id" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.actionGroupId"></a>

```python
action_group_id: str
```

- *Type:* str

---

##### `webhook_properties`<sup>Required</sup> <a name="webhook_properties" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.webhookProperties"></a>

```python
webhook_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertActionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorMetricAlertAction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertAction">MonitorMetricAlertAction</a>]

---


### MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference <a name="MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_metric_alert

monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.componentIdInput">component_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.failedLocationCountInput">failed_location_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.webTestIdInput">web_test_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.componentId">component_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.failedLocationCount">failed_location_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.webTestId">web_test_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria">MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component_id_input`<sup>Optional</sup> <a name="component_id_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.componentIdInput"></a>

```python
component_id_input: str
```

- *Type:* str

---

##### `failed_location_count_input`<sup>Optional</sup> <a name="failed_location_count_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.failedLocationCountInput"></a>

```python
failed_location_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `web_test_id_input`<sup>Optional</sup> <a name="web_test_id_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.webTestIdInput"></a>

```python
web_test_id_input: str
```

- *Type:* str

---

##### `component_id`<sup>Required</sup> <a name="component_id" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.componentId"></a>

```python
component_id: str
```

- *Type:* str

---

##### `failed_location_count`<sup>Required</sup> <a name="failed_location_count" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.failedLocationCount"></a>

```python
failed_location_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `web_test_id`<sup>Required</sup> <a name="web_test_id" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.webTestId"></a>

```python
web_test_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria">MonitorMetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria</a>

---


### MonitorMetricAlertCriteriaDimensionList <a name="MonitorMetricAlertCriteriaDimensionList" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_metric_alert

monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorMetricAlertCriteriaDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension">MonitorMetricAlertCriteriaDimension</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorMetricAlertCriteriaDimension]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension">MonitorMetricAlertCriteriaDimension</a>]]

---


### MonitorMetricAlertCriteriaDimensionOutputReference <a name="MonitorMetricAlertCriteriaDimensionOutputReference" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_metric_alert

monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension">MonitorMetricAlertCriteriaDimension</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorMetricAlertCriteriaDimension]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension">MonitorMetricAlertCriteriaDimension</a>]

---


### MonitorMetricAlertCriteriaList <a name="MonitorMetricAlertCriteriaList" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_metric_alert

monitorMetricAlert.MonitorMetricAlertCriteriaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorMetricAlertCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria">MonitorMetricAlertCriteria</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorMetricAlertCriteria]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria">MonitorMetricAlertCriteria</a>]]

---


### MonitorMetricAlertCriteriaOutputReference <a name="MonitorMetricAlertCriteriaOutputReference" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_metric_alert

monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.putDimension">put_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.resetDimension">reset_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.resetSkipMetricValidation">reset_skip_metric_validation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimension` <a name="put_dimension" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.putDimension"></a>

```python
def put_dimension(
  value: typing.Union[IResolvable, typing.List[MonitorMetricAlertCriteriaDimension]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.putDimension.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension">MonitorMetricAlertCriteriaDimension</a>]]

---

##### `reset_dimension` <a name="reset_dimension" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.resetDimension"></a>

```python
def reset_dimension() -> None
```

##### `reset_skip_metric_validation` <a name="reset_skip_metric_validation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.resetSkipMetricValidation"></a>

```python
def reset_skip_metric_validation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList">MonitorMetricAlertCriteriaDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.aggregationInput">aggregation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.dimensionInput">dimension_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension">MonitorMetricAlertCriteriaDimension</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.metricNamespaceInput">metric_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.skipMetricValidationInput">skip_metric_validation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.aggregation">aggregation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.metricNamespace">metric_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.skipMetricValidation">skip_metric_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria">MonitorMetricAlertCriteria</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.dimension"></a>

```python
dimension: MonitorMetricAlertCriteriaDimensionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimensionList">MonitorMetricAlertCriteriaDimensionList</a>

---

##### `aggregation_input`<sup>Optional</sup> <a name="aggregation_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.aggregationInput"></a>

```python
aggregation_input: str
```

- *Type:* str

---

##### `dimension_input`<sup>Optional</sup> <a name="dimension_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.dimensionInput"></a>

```python
dimension_input: typing.Union[IResolvable, typing.List[MonitorMetricAlertCriteriaDimension]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaDimension">MonitorMetricAlertCriteriaDimension</a>]]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `metric_namespace_input`<sup>Optional</sup> <a name="metric_namespace_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.metricNamespaceInput"></a>

```python
metric_namespace_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `skip_metric_validation_input`<sup>Optional</sup> <a name="skip_metric_validation_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.skipMetricValidationInput"></a>

```python
skip_metric_validation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `metric_namespace`<sup>Required</sup> <a name="metric_namespace" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.metricNamespace"></a>

```python
metric_namespace: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `skip_metric_validation`<sup>Required</sup> <a name="skip_metric_validation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.skipMetricValidation"></a>

```python
skip_metric_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorMetricAlertCriteria]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertCriteria">MonitorMetricAlertCriteria</a>]

---


### MonitorMetricAlertDynamicCriteriaDimensionList <a name="MonitorMetricAlertDynamicCriteriaDimensionList" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_metric_alert

monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorMetricAlertDynamicCriteriaDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension">MonitorMetricAlertDynamicCriteriaDimension</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorMetricAlertDynamicCriteriaDimension]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension">MonitorMetricAlertDynamicCriteriaDimension</a>]]

---


### MonitorMetricAlertDynamicCriteriaDimensionOutputReference <a name="MonitorMetricAlertDynamicCriteriaDimensionOutputReference" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_metric_alert

monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension">MonitorMetricAlertDynamicCriteriaDimension</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorMetricAlertDynamicCriteriaDimension]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension">MonitorMetricAlertDynamicCriteriaDimension</a>]

---


### MonitorMetricAlertDynamicCriteriaOutputReference <a name="MonitorMetricAlertDynamicCriteriaOutputReference" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_metric_alert

monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.putDimension">put_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resetDimension">reset_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resetEvaluationFailureCount">reset_evaluation_failure_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resetEvaluationTotalCount">reset_evaluation_total_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resetIgnoreDataBefore">reset_ignore_data_before</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resetSkipMetricValidation">reset_skip_metric_validation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimension` <a name="put_dimension" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.putDimension"></a>

```python
def put_dimension(
  value: typing.Union[IResolvable, typing.List[MonitorMetricAlertDynamicCriteriaDimension]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.putDimension.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension">MonitorMetricAlertDynamicCriteriaDimension</a>]]

---

##### `reset_dimension` <a name="reset_dimension" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resetDimension"></a>

```python
def reset_dimension() -> None
```

##### `reset_evaluation_failure_count` <a name="reset_evaluation_failure_count" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resetEvaluationFailureCount"></a>

```python
def reset_evaluation_failure_count() -> None
```

##### `reset_evaluation_total_count` <a name="reset_evaluation_total_count" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resetEvaluationTotalCount"></a>

```python
def reset_evaluation_total_count() -> None
```

##### `reset_ignore_data_before` <a name="reset_ignore_data_before" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resetIgnoreDataBefore"></a>

```python
def reset_ignore_data_before() -> None
```

##### `reset_skip_metric_validation` <a name="reset_skip_metric_validation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.resetSkipMetricValidation"></a>

```python
def reset_skip_metric_validation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList">MonitorMetricAlertDynamicCriteriaDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.aggregationInput">aggregation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.alertSensitivityInput">alert_sensitivity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.dimensionInput">dimension_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension">MonitorMetricAlertDynamicCriteriaDimension</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.evaluationFailureCountInput">evaluation_failure_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.evaluationTotalCountInput">evaluation_total_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.ignoreDataBeforeInput">ignore_data_before_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.metricNamespaceInput">metric_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.skipMetricValidationInput">skip_metric_validation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.aggregation">aggregation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.alertSensitivity">alert_sensitivity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.evaluationFailureCount">evaluation_failure_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.evaluationTotalCount">evaluation_total_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.ignoreDataBefore">ignore_data_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.metricNamespace">metric_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.skipMetricValidation">skip_metric_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria">MonitorMetricAlertDynamicCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.dimension"></a>

```python
dimension: MonitorMetricAlertDynamicCriteriaDimensionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimensionList">MonitorMetricAlertDynamicCriteriaDimensionList</a>

---

##### `aggregation_input`<sup>Optional</sup> <a name="aggregation_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.aggregationInput"></a>

```python
aggregation_input: str
```

- *Type:* str

---

##### `alert_sensitivity_input`<sup>Optional</sup> <a name="alert_sensitivity_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.alertSensitivityInput"></a>

```python
alert_sensitivity_input: str
```

- *Type:* str

---

##### `dimension_input`<sup>Optional</sup> <a name="dimension_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.dimensionInput"></a>

```python
dimension_input: typing.Union[IResolvable, typing.List[MonitorMetricAlertDynamicCriteriaDimension]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaDimension">MonitorMetricAlertDynamicCriteriaDimension</a>]]

---

##### `evaluation_failure_count_input`<sup>Optional</sup> <a name="evaluation_failure_count_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.evaluationFailureCountInput"></a>

```python
evaluation_failure_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `evaluation_total_count_input`<sup>Optional</sup> <a name="evaluation_total_count_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.evaluationTotalCountInput"></a>

```python
evaluation_total_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_data_before_input`<sup>Optional</sup> <a name="ignore_data_before_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.ignoreDataBeforeInput"></a>

```python
ignore_data_before_input: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `metric_namespace_input`<sup>Optional</sup> <a name="metric_namespace_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.metricNamespaceInput"></a>

```python
metric_namespace_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `skip_metric_validation_input`<sup>Optional</sup> <a name="skip_metric_validation_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.skipMetricValidationInput"></a>

```python
skip_metric_validation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

---

##### `alert_sensitivity`<sup>Required</sup> <a name="alert_sensitivity" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.alertSensitivity"></a>

```python
alert_sensitivity: str
```

- *Type:* str

---

##### `evaluation_failure_count`<sup>Required</sup> <a name="evaluation_failure_count" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.evaluationFailureCount"></a>

```python
evaluation_failure_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `evaluation_total_count`<sup>Required</sup> <a name="evaluation_total_count" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.evaluationTotalCount"></a>

```python
evaluation_total_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_data_before`<sup>Required</sup> <a name="ignore_data_before" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.ignoreDataBefore"></a>

```python
ignore_data_before: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `metric_namespace`<sup>Required</sup> <a name="metric_namespace" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.metricNamespace"></a>

```python
metric_namespace: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `skip_metric_validation`<sup>Required</sup> <a name="skip_metric_validation" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.skipMetricValidation"></a>

```python
skip_metric_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: MonitorMetricAlertDynamicCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertDynamicCriteria">MonitorMetricAlertDynamicCriteria</a>

---


### MonitorMetricAlertTimeoutsOutputReference <a name="MonitorMetricAlertTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_metric_alert

monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts">MonitorMetricAlertTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorMetricAlertTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorMetricAlert.MonitorMetricAlertTimeouts">MonitorMetricAlertTimeouts</a>]

---



