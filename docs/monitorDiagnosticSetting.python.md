# `monitorDiagnosticSetting` Submodule <a name="`monitorDiagnosticSetting` Submodule" id="@cdktf/provider-azurerm.monitorDiagnosticSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorDiagnosticSetting <a name="MonitorDiagnosticSetting" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting azurerm_monitor_diagnostic_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_diagnostic_setting

monitorDiagnosticSetting.MonitorDiagnosticSetting(
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
  target_resource_id: str,
  enabled_log: typing.Union[IResolvable, typing.List[MonitorDiagnosticSettingEnabledLog]] = None,
  eventhub_authorization_rule_id: str = None,
  eventhub_name: str = None,
  id: str = None,
  log_analytics_destination_type: str = None,
  log_analytics_workspace_id: str = None,
  metric: typing.Union[IResolvable, typing.List[MonitorDiagnosticSettingMetric]] = None,
  partner_solution_id: str = None,
  storage_account_id: str = None,
  timeouts: MonitorDiagnosticSettingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#name MonitorDiagnosticSetting#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.targetResourceId">target_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#target_resource_id MonitorDiagnosticSetting#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.enabledLog">enabled_log</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog">MonitorDiagnosticSettingEnabledLog</a>]]</code> | enabled_log block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.eventhubAuthorizationRuleId">eventhub_authorization_rule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#eventhub_authorization_rule_id MonitorDiagnosticSetting#eventhub_authorization_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.eventhubName">eventhub_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#eventhub_name MonitorDiagnosticSetting#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#id MonitorDiagnosticSetting#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.logAnalyticsDestinationType">log_analytics_destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#log_analytics_destination_type MonitorDiagnosticSetting#log_analytics_destination_type}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#log_analytics_workspace_id MonitorDiagnosticSetting#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.metric">metric</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric">MonitorDiagnosticSettingMetric</a>]]</code> | metric block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.partnerSolutionId">partner_solution_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#partner_solution_id MonitorDiagnosticSetting#partner_solution_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#storage_account_id MonitorDiagnosticSetting#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts">MonitorDiagnosticSettingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#name MonitorDiagnosticSetting#name}.

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.targetResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#target_resource_id MonitorDiagnosticSetting#target_resource_id}.

---

##### `enabled_log`<sup>Optional</sup> <a name="enabled_log" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.enabledLog"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog">MonitorDiagnosticSettingEnabledLog</a>]]

enabled_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#enabled_log MonitorDiagnosticSetting#enabled_log}

---

##### `eventhub_authorization_rule_id`<sup>Optional</sup> <a name="eventhub_authorization_rule_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.eventhubAuthorizationRuleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#eventhub_authorization_rule_id MonitorDiagnosticSetting#eventhub_authorization_rule_id}.

---

##### `eventhub_name`<sup>Optional</sup> <a name="eventhub_name" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.eventhubName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#eventhub_name MonitorDiagnosticSetting#eventhub_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#id MonitorDiagnosticSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_analytics_destination_type`<sup>Optional</sup> <a name="log_analytics_destination_type" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.logAnalyticsDestinationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#log_analytics_destination_type MonitorDiagnosticSetting#log_analytics_destination_type}.

---

##### `log_analytics_workspace_id`<sup>Optional</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#log_analytics_workspace_id MonitorDiagnosticSetting#log_analytics_workspace_id}.

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.metric"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric">MonitorDiagnosticSettingMetric</a>]]

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#metric MonitorDiagnosticSetting#metric}

---

##### `partner_solution_id`<sup>Optional</sup> <a name="partner_solution_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.partnerSolutionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#partner_solution_id MonitorDiagnosticSetting#partner_solution_id}.

---

##### `storage_account_id`<sup>Optional</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.storageAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#storage_account_id MonitorDiagnosticSetting#storage_account_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts">MonitorDiagnosticSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#timeouts MonitorDiagnosticSetting#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putEnabledLog">put_enabled_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putMetric">put_metric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEnabledLog">reset_enabled_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEventhubAuthorizationRuleId">reset_eventhub_authorization_rule_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEventhubName">reset_eventhub_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetLogAnalyticsDestinationType">reset_log_analytics_destination_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetLogAnalyticsWorkspaceId">reset_log_analytics_workspace_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetMetric">reset_metric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetPartnerSolutionId">reset_partner_solution_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetStorageAccountId">reset_storage_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_enabled_log` <a name="put_enabled_log" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putEnabledLog"></a>

```python
def put_enabled_log(
  value: typing.Union[IResolvable, typing.List[MonitorDiagnosticSettingEnabledLog]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putEnabledLog.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog">MonitorDiagnosticSettingEnabledLog</a>]]

---

##### `put_metric` <a name="put_metric" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putMetric"></a>

```python
def put_metric(
  value: typing.Union[IResolvable, typing.List[MonitorDiagnosticSettingMetric]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putMetric.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric">MonitorDiagnosticSettingMetric</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#create MonitorDiagnosticSetting#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#delete MonitorDiagnosticSetting#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#read MonitorDiagnosticSetting#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#update MonitorDiagnosticSetting#update}.

---

##### `reset_enabled_log` <a name="reset_enabled_log" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEnabledLog"></a>

```python
def reset_enabled_log() -> None
```

##### `reset_eventhub_authorization_rule_id` <a name="reset_eventhub_authorization_rule_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEventhubAuthorizationRuleId"></a>

```python
def reset_eventhub_authorization_rule_id() -> None
```

##### `reset_eventhub_name` <a name="reset_eventhub_name" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEventhubName"></a>

```python
def reset_eventhub_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log_analytics_destination_type` <a name="reset_log_analytics_destination_type" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetLogAnalyticsDestinationType"></a>

```python
def reset_log_analytics_destination_type() -> None
```

##### `reset_log_analytics_workspace_id` <a name="reset_log_analytics_workspace_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetLogAnalyticsWorkspaceId"></a>

```python
def reset_log_analytics_workspace_id() -> None
```

##### `reset_metric` <a name="reset_metric" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetMetric"></a>

```python
def reset_metric() -> None
```

##### `reset_partner_solution_id` <a name="reset_partner_solution_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetPartnerSolutionId"></a>

```python
def reset_partner_solution_id() -> None
```

##### `reset_storage_account_id` <a name="reset_storage_account_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetStorageAccountId"></a>

```python
def reset_storage_account_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MonitorDiagnosticSetting resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_diagnostic_setting

monitorDiagnosticSetting.MonitorDiagnosticSetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_diagnostic_setting

monitorDiagnosticSetting.MonitorDiagnosticSetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_diagnostic_setting

monitorDiagnosticSetting.MonitorDiagnosticSetting.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_diagnostic_setting

monitorDiagnosticSetting.MonitorDiagnosticSetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MonitorDiagnosticSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MonitorDiagnosticSetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MonitorDiagnosticSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MonitorDiagnosticSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.enabledLog">enabled_log</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList">MonitorDiagnosticSettingEnabledLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList">MonitorDiagnosticSettingMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference">MonitorDiagnosticSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.enabledLogInput">enabled_log_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog">MonitorDiagnosticSettingEnabledLog</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubAuthorizationRuleIdInput">eventhub_authorization_rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubNameInput">eventhub_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsDestinationTypeInput">log_analytics_destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsWorkspaceIdInput">log_analytics_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.metricInput">metric_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric">MonitorDiagnosticSettingMetric</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.partnerSolutionIdInput">partner_solution_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.storageAccountIdInput">storage_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.targetResourceIdInput">target_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts">MonitorDiagnosticSettingTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubAuthorizationRuleId">eventhub_authorization_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubName">eventhub_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsDestinationType">log_analytics_destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.partnerSolutionId">partner_solution_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled_log`<sup>Required</sup> <a name="enabled_log" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.enabledLog"></a>

```python
enabled_log: MonitorDiagnosticSettingEnabledLogList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList">MonitorDiagnosticSettingEnabledLogList</a>

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.metric"></a>

```python
metric: MonitorDiagnosticSettingMetricList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList">MonitorDiagnosticSettingMetricList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.timeouts"></a>

```python
timeouts: MonitorDiagnosticSettingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference">MonitorDiagnosticSettingTimeoutsOutputReference</a>

---

##### `enabled_log_input`<sup>Optional</sup> <a name="enabled_log_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.enabledLogInput"></a>

```python
enabled_log_input: typing.Union[IResolvable, typing.List[MonitorDiagnosticSettingEnabledLog]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog">MonitorDiagnosticSettingEnabledLog</a>]]

---

##### `eventhub_authorization_rule_id_input`<sup>Optional</sup> <a name="eventhub_authorization_rule_id_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubAuthorizationRuleIdInput"></a>

```python
eventhub_authorization_rule_id_input: str
```

- *Type:* str

---

##### `eventhub_name_input`<sup>Optional</sup> <a name="eventhub_name_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubNameInput"></a>

```python
eventhub_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_analytics_destination_type_input`<sup>Optional</sup> <a name="log_analytics_destination_type_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsDestinationTypeInput"></a>

```python
log_analytics_destination_type_input: str
```

- *Type:* str

---

##### `log_analytics_workspace_id_input`<sup>Optional</sup> <a name="log_analytics_workspace_id_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsWorkspaceIdInput"></a>

```python
log_analytics_workspace_id_input: str
```

- *Type:* str

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.metricInput"></a>

```python
metric_input: typing.Union[IResolvable, typing.List[MonitorDiagnosticSettingMetric]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric">MonitorDiagnosticSettingMetric</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `partner_solution_id_input`<sup>Optional</sup> <a name="partner_solution_id_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.partnerSolutionIdInput"></a>

```python
partner_solution_id_input: str
```

- *Type:* str

---

##### `storage_account_id_input`<sup>Optional</sup> <a name="storage_account_id_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.storageAccountIdInput"></a>

```python
storage_account_id_input: str
```

- *Type:* str

---

##### `target_resource_id_input`<sup>Optional</sup> <a name="target_resource_id_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.targetResourceIdInput"></a>

```python
target_resource_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MonitorDiagnosticSettingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts">MonitorDiagnosticSettingTimeouts</a>]

---

##### `eventhub_authorization_rule_id`<sup>Required</sup> <a name="eventhub_authorization_rule_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubAuthorizationRuleId"></a>

```python
eventhub_authorization_rule_id: str
```

- *Type:* str

---

##### `eventhub_name`<sup>Required</sup> <a name="eventhub_name" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubName"></a>

```python
eventhub_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_analytics_destination_type`<sup>Required</sup> <a name="log_analytics_destination_type" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsDestinationType"></a>

```python
log_analytics_destination_type: str
```

- *Type:* str

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `partner_solution_id`<sup>Required</sup> <a name="partner_solution_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.partnerSolutionId"></a>

```python
partner_solution_id: str
```

- *Type:* str

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorDiagnosticSettingConfig <a name="MonitorDiagnosticSettingConfig" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_diagnostic_setting

monitorDiagnosticSetting.MonitorDiagnosticSettingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  target_resource_id: str,
  enabled_log: typing.Union[IResolvable, typing.List[MonitorDiagnosticSettingEnabledLog]] = None,
  eventhub_authorization_rule_id: str = None,
  eventhub_name: str = None,
  id: str = None,
  log_analytics_destination_type: str = None,
  log_analytics_workspace_id: str = None,
  metric: typing.Union[IResolvable, typing.List[MonitorDiagnosticSettingMetric]] = None,
  partner_solution_id: str = None,
  storage_account_id: str = None,
  timeouts: MonitorDiagnosticSettingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#name MonitorDiagnosticSetting#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#target_resource_id MonitorDiagnosticSetting#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.enabledLog">enabled_log</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog">MonitorDiagnosticSettingEnabledLog</a>]]</code> | enabled_log block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.eventhubAuthorizationRuleId">eventhub_authorization_rule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#eventhub_authorization_rule_id MonitorDiagnosticSetting#eventhub_authorization_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.eventhubName">eventhub_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#eventhub_name MonitorDiagnosticSetting#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#id MonitorDiagnosticSetting#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.logAnalyticsDestinationType">log_analytics_destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#log_analytics_destination_type MonitorDiagnosticSetting#log_analytics_destination_type}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#log_analytics_workspace_id MonitorDiagnosticSetting#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.metric">metric</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric">MonitorDiagnosticSettingMetric</a>]]</code> | metric block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.partnerSolutionId">partner_solution_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#partner_solution_id MonitorDiagnosticSetting#partner_solution_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#storage_account_id MonitorDiagnosticSetting#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts">MonitorDiagnosticSettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#name MonitorDiagnosticSetting#name}.

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#target_resource_id MonitorDiagnosticSetting#target_resource_id}.

---

##### `enabled_log`<sup>Optional</sup> <a name="enabled_log" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.enabledLog"></a>

```python
enabled_log: typing.Union[IResolvable, typing.List[MonitorDiagnosticSettingEnabledLog]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog">MonitorDiagnosticSettingEnabledLog</a>]]

enabled_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#enabled_log MonitorDiagnosticSetting#enabled_log}

---

##### `eventhub_authorization_rule_id`<sup>Optional</sup> <a name="eventhub_authorization_rule_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.eventhubAuthorizationRuleId"></a>

```python
eventhub_authorization_rule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#eventhub_authorization_rule_id MonitorDiagnosticSetting#eventhub_authorization_rule_id}.

---

##### `eventhub_name`<sup>Optional</sup> <a name="eventhub_name" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.eventhubName"></a>

```python
eventhub_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#eventhub_name MonitorDiagnosticSetting#eventhub_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#id MonitorDiagnosticSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_analytics_destination_type`<sup>Optional</sup> <a name="log_analytics_destination_type" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.logAnalyticsDestinationType"></a>

```python
log_analytics_destination_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#log_analytics_destination_type MonitorDiagnosticSetting#log_analytics_destination_type}.

---

##### `log_analytics_workspace_id`<sup>Optional</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#log_analytics_workspace_id MonitorDiagnosticSetting#log_analytics_workspace_id}.

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.metric"></a>

```python
metric: typing.Union[IResolvable, typing.List[MonitorDiagnosticSettingMetric]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric">MonitorDiagnosticSettingMetric</a>]]

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#metric MonitorDiagnosticSetting#metric}

---

##### `partner_solution_id`<sup>Optional</sup> <a name="partner_solution_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.partnerSolutionId"></a>

```python
partner_solution_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#partner_solution_id MonitorDiagnosticSetting#partner_solution_id}.

---

##### `storage_account_id`<sup>Optional</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#storage_account_id MonitorDiagnosticSetting#storage_account_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.timeouts"></a>

```python
timeouts: MonitorDiagnosticSettingTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts">MonitorDiagnosticSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#timeouts MonitorDiagnosticSetting#timeouts}

---

### MonitorDiagnosticSettingEnabledLog <a name="MonitorDiagnosticSettingEnabledLog" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_diagnostic_setting

monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog(
  category: str = None,
  category_group: str = None,
  retention_policy: MonitorDiagnosticSettingEnabledLogRetentionPolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.property.category">category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#category MonitorDiagnosticSetting#category}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.property.categoryGroup">category_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#category_group MonitorDiagnosticSetting#category_group}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.property.retentionPolicy">retention_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy">MonitorDiagnosticSettingEnabledLogRetentionPolicy</a></code> | retention_policy block. |

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.property.category"></a>

```python
category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#category MonitorDiagnosticSetting#category}.

---

##### `category_group`<sup>Optional</sup> <a name="category_group" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.property.categoryGroup"></a>

```python
category_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#category_group MonitorDiagnosticSetting#category_group}.

---

##### `retention_policy`<sup>Optional</sup> <a name="retention_policy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.property.retentionPolicy"></a>

```python
retention_policy: MonitorDiagnosticSettingEnabledLogRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy">MonitorDiagnosticSettingEnabledLogRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#retention_policy MonitorDiagnosticSetting#retention_policy}

---

### MonitorDiagnosticSettingEnabledLogRetentionPolicy <a name="MonitorDiagnosticSettingEnabledLogRetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_diagnostic_setting

monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy(
  enabled: typing.Union[bool, IResolvable],
  days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#days MonitorDiagnosticSetting#days}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}.

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#days MonitorDiagnosticSetting#days}.

---

### MonitorDiagnosticSettingMetric <a name="MonitorDiagnosticSettingMetric" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_diagnostic_setting

monitorDiagnosticSetting.MonitorDiagnosticSettingMetric(
  category: str,
  enabled: typing.Union[bool, IResolvable] = None,
  retention_policy: MonitorDiagnosticSettingMetricRetentionPolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric.property.category">category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#category MonitorDiagnosticSetting#category}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric.property.retentionPolicy">retention_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy">MonitorDiagnosticSettingMetricRetentionPolicy</a></code> | retention_policy block. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric.property.category"></a>

```python
category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#category MonitorDiagnosticSetting#category}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}.

---

##### `retention_policy`<sup>Optional</sup> <a name="retention_policy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric.property.retentionPolicy"></a>

```python
retention_policy: MonitorDiagnosticSettingMetricRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy">MonitorDiagnosticSettingMetricRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#retention_policy MonitorDiagnosticSetting#retention_policy}

---

### MonitorDiagnosticSettingMetricRetentionPolicy <a name="MonitorDiagnosticSettingMetricRetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_diagnostic_setting

monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy(
  enabled: typing.Union[bool, IResolvable],
  days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#days MonitorDiagnosticSetting#days}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}.

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#days MonitorDiagnosticSetting#days}.

---

### MonitorDiagnosticSettingTimeouts <a name="MonitorDiagnosticSettingTimeouts" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_diagnostic_setting

monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#create MonitorDiagnosticSetting#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#delete MonitorDiagnosticSetting#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#read MonitorDiagnosticSetting#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#update MonitorDiagnosticSetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#create MonitorDiagnosticSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#delete MonitorDiagnosticSetting#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#read MonitorDiagnosticSetting#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#update MonitorDiagnosticSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorDiagnosticSettingEnabledLogList <a name="MonitorDiagnosticSettingEnabledLogList" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_diagnostic_setting

monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorDiagnosticSettingEnabledLogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog">MonitorDiagnosticSettingEnabledLog</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorDiagnosticSettingEnabledLog]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog">MonitorDiagnosticSettingEnabledLog</a>]]

---


### MonitorDiagnosticSettingEnabledLogOutputReference <a name="MonitorDiagnosticSettingEnabledLogOutputReference" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_diagnostic_setting

monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.putRetentionPolicy">put_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resetCategory">reset_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resetCategoryGroup">reset_category_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resetRetentionPolicy">reset_retention_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_retention_policy` <a name="put_retention_policy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.putRetentionPolicy"></a>

```python
def put_retention_policy(
  enabled: typing.Union[bool, IResolvable],
  days: typing.Union[int, float] = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.putRetentionPolicy.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}.

---

###### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.putRetentionPolicy.parameter.days"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#days MonitorDiagnosticSetting#days}.

---

##### `reset_category` <a name="reset_category" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resetCategory"></a>

```python
def reset_category() -> None
```

##### `reset_category_group` <a name="reset_category_group" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resetCategoryGroup"></a>

```python
def reset_category_group() -> None
```

##### `reset_retention_policy` <a name="reset_retention_policy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resetRetentionPolicy"></a>

```python
def reset_retention_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.retentionPolicy">retention_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference">MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.categoryGroupInput">category_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.retentionPolicyInput">retention_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy">MonitorDiagnosticSettingEnabledLogRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.categoryGroup">category_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog">MonitorDiagnosticSettingEnabledLog</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retention_policy`<sup>Required</sup> <a name="retention_policy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.retentionPolicy"></a>

```python
retention_policy: MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference">MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference</a>

---

##### `category_group_input`<sup>Optional</sup> <a name="category_group_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.categoryGroupInput"></a>

```python
category_group_input: str
```

- *Type:* str

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `retention_policy_input`<sup>Optional</sup> <a name="retention_policy_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.retentionPolicyInput"></a>

```python
retention_policy_input: MonitorDiagnosticSettingEnabledLogRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy">MonitorDiagnosticSettingEnabledLogRetentionPolicy</a>

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `category_group`<sup>Required</sup> <a name="category_group" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.categoryGroup"></a>

```python
category_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorDiagnosticSettingEnabledLog]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog">MonitorDiagnosticSettingEnabledLog</a>]

---


### MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference <a name="MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_diagnostic_setting

monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.resetDays">reset_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days` <a name="reset_days" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.resetDays"></a>

```python
def reset_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy">MonitorDiagnosticSettingEnabledLogRetentionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: MonitorDiagnosticSettingEnabledLogRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy">MonitorDiagnosticSettingEnabledLogRetentionPolicy</a>

---


### MonitorDiagnosticSettingMetricList <a name="MonitorDiagnosticSettingMetricList" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_diagnostic_setting

monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorDiagnosticSettingMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric">MonitorDiagnosticSettingMetric</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorDiagnosticSettingMetric]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric">MonitorDiagnosticSettingMetric</a>]]

---


### MonitorDiagnosticSettingMetricOutputReference <a name="MonitorDiagnosticSettingMetricOutputReference" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_diagnostic_setting

monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.putRetentionPolicy">put_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.resetRetentionPolicy">reset_retention_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_retention_policy` <a name="put_retention_policy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.putRetentionPolicy"></a>

```python
def put_retention_policy(
  enabled: typing.Union[bool, IResolvable],
  days: typing.Union[int, float] = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.putRetentionPolicy.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}.

---

###### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.putRetentionPolicy.parameter.days"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/monitor_diagnostic_setting#days MonitorDiagnosticSetting#days}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_retention_policy` <a name="reset_retention_policy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.resetRetentionPolicy"></a>

```python
def reset_retention_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.retentionPolicy">retention_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference">MonitorDiagnosticSettingMetricRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.retentionPolicyInput">retention_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy">MonitorDiagnosticSettingMetricRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric">MonitorDiagnosticSettingMetric</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retention_policy`<sup>Required</sup> <a name="retention_policy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.retentionPolicy"></a>

```python
retention_policy: MonitorDiagnosticSettingMetricRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference">MonitorDiagnosticSettingMetricRetentionPolicyOutputReference</a>

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_policy_input`<sup>Optional</sup> <a name="retention_policy_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.retentionPolicyInput"></a>

```python
retention_policy_input: MonitorDiagnosticSettingMetricRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy">MonitorDiagnosticSettingMetricRetentionPolicy</a>

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorDiagnosticSettingMetric]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric">MonitorDiagnosticSettingMetric</a>]

---


### MonitorDiagnosticSettingMetricRetentionPolicyOutputReference <a name="MonitorDiagnosticSettingMetricRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_diagnostic_setting

monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.resetDays">reset_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days` <a name="reset_days" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.resetDays"></a>

```python
def reset_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy">MonitorDiagnosticSettingMetricRetentionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: MonitorDiagnosticSettingMetricRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy">MonitorDiagnosticSettingMetricRetentionPolicy</a>

---


### MonitorDiagnosticSettingTimeoutsOutputReference <a name="MonitorDiagnosticSettingTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_diagnostic_setting

monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts">MonitorDiagnosticSettingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorDiagnosticSettingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts">MonitorDiagnosticSettingTimeouts</a>]

---



