# `azurerm_sentinel_alert_rule_anomaly_duplicate`

Refer to the Terraform Registory for docs: [`azurerm_sentinel_alert_rule_anomaly_duplicate`](https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate).

# `sentinelAlertRuleAnomalyDuplicate` Submodule <a name="`sentinelAlertRuleAnomalyDuplicate` Submodule" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelAlertRuleAnomalyDuplicate <a name="SentinelAlertRuleAnomalyDuplicate" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate azurerm_sentinel_alert_rule_anomaly_duplicate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_alert_rule_anomaly_duplicate

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  built_in_rule_id: str,
  display_name: str,
  enabled: typing.Union[bool, IResolvable],
  log_analytics_workspace_id: str,
  mode: str,
  id: str = None,
  multi_select_observation: typing.Union[IResolvable, typing.List[SentinelAlertRuleAnomalyDuplicateMultiSelectObservation]] = None,
  prioritized_exclude_observation: typing.Union[IResolvable, typing.List[SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation]] = None,
  single_select_observation: typing.Union[IResolvable, typing.List[SentinelAlertRuleAnomalyDuplicateSingleSelectObservation]] = None,
  threshold_observation: typing.Union[IResolvable, typing.List[SentinelAlertRuleAnomalyDuplicateThresholdObservation]] = None,
  timeouts: SentinelAlertRuleAnomalyDuplicateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.builtInRuleId">built_in_rule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#built_in_rule_id SentinelAlertRuleAnomalyDuplicate#built_in_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#display_name SentinelAlertRuleAnomalyDuplicate#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#enabled SentinelAlertRuleAnomalyDuplicate#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#log_analytics_workspace_id SentinelAlertRuleAnomalyDuplicate#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#mode SentinelAlertRuleAnomalyDuplicate#mode}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#id SentinelAlertRuleAnomalyDuplicate#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.multiSelectObservation">multi_select_observation</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation">SentinelAlertRuleAnomalyDuplicateMultiSelectObservation</a>]]</code> | multi_select_observation block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.prioritizedExcludeObservation">prioritized_exclude_observation</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation</a>]]</code> | prioritized_exclude_observation block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.singleSelectObservation">single_select_observation</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation">SentinelAlertRuleAnomalyDuplicateSingleSelectObservation</a>]]</code> | single_select_observation block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.thresholdObservation">threshold_observation</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation">SentinelAlertRuleAnomalyDuplicateThresholdObservation</a>]]</code> | threshold_observation block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts">SentinelAlertRuleAnomalyDuplicateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `built_in_rule_id`<sup>Required</sup> <a name="built_in_rule_id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.builtInRuleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#built_in_rule_id SentinelAlertRuleAnomalyDuplicate#built_in_rule_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#display_name SentinelAlertRuleAnomalyDuplicate#display_name}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#enabled SentinelAlertRuleAnomalyDuplicate#enabled}.

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#log_analytics_workspace_id SentinelAlertRuleAnomalyDuplicate#log_analytics_workspace_id}.

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#mode SentinelAlertRuleAnomalyDuplicate#mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#id SentinelAlertRuleAnomalyDuplicate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multi_select_observation`<sup>Optional</sup> <a name="multi_select_observation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.multiSelectObservation"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation">SentinelAlertRuleAnomalyDuplicateMultiSelectObservation</a>]]

multi_select_observation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#multi_select_observation SentinelAlertRuleAnomalyDuplicate#multi_select_observation}

---

##### `prioritized_exclude_observation`<sup>Optional</sup> <a name="prioritized_exclude_observation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.prioritizedExcludeObservation"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation</a>]]

prioritized_exclude_observation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#prioritized_exclude_observation SentinelAlertRuleAnomalyDuplicate#prioritized_exclude_observation}

---

##### `single_select_observation`<sup>Optional</sup> <a name="single_select_observation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.singleSelectObservation"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation">SentinelAlertRuleAnomalyDuplicateSingleSelectObservation</a>]]

single_select_observation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#single_select_observation SentinelAlertRuleAnomalyDuplicate#single_select_observation}

---

##### `threshold_observation`<sup>Optional</sup> <a name="threshold_observation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.thresholdObservation"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation">SentinelAlertRuleAnomalyDuplicateThresholdObservation</a>]]

threshold_observation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#threshold_observation SentinelAlertRuleAnomalyDuplicate#threshold_observation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts">SentinelAlertRuleAnomalyDuplicateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#timeouts SentinelAlertRuleAnomalyDuplicate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putMultiSelectObservation">put_multi_select_observation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putPrioritizedExcludeObservation">put_prioritized_exclude_observation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putSingleSelectObservation">put_single_select_observation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putThresholdObservation">put_threshold_observation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetMultiSelectObservation">reset_multi_select_observation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetPrioritizedExcludeObservation">reset_prioritized_exclude_observation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetSingleSelectObservation">reset_single_select_observation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetThresholdObservation">reset_threshold_observation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_multi_select_observation` <a name="put_multi_select_observation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putMultiSelectObservation"></a>

```python
def put_multi_select_observation(
  value: typing.Union[IResolvable, typing.List[SentinelAlertRuleAnomalyDuplicateMultiSelectObservation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putMultiSelectObservation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation">SentinelAlertRuleAnomalyDuplicateMultiSelectObservation</a>]]

---

##### `put_prioritized_exclude_observation` <a name="put_prioritized_exclude_observation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putPrioritizedExcludeObservation"></a>

```python
def put_prioritized_exclude_observation(
  value: typing.Union[IResolvable, typing.List[SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putPrioritizedExcludeObservation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation</a>]]

---

##### `put_single_select_observation` <a name="put_single_select_observation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putSingleSelectObservation"></a>

```python
def put_single_select_observation(
  value: typing.Union[IResolvable, typing.List[SentinelAlertRuleAnomalyDuplicateSingleSelectObservation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putSingleSelectObservation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation">SentinelAlertRuleAnomalyDuplicateSingleSelectObservation</a>]]

---

##### `put_threshold_observation` <a name="put_threshold_observation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putThresholdObservation"></a>

```python
def put_threshold_observation(
  value: typing.Union[IResolvable, typing.List[SentinelAlertRuleAnomalyDuplicateThresholdObservation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putThresholdObservation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation">SentinelAlertRuleAnomalyDuplicateThresholdObservation</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#create SentinelAlertRuleAnomalyDuplicate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#delete SentinelAlertRuleAnomalyDuplicate#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#read SentinelAlertRuleAnomalyDuplicate#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#update SentinelAlertRuleAnomalyDuplicate#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_multi_select_observation` <a name="reset_multi_select_observation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetMultiSelectObservation"></a>

```python
def reset_multi_select_observation() -> None
```

##### `reset_prioritized_exclude_observation` <a name="reset_prioritized_exclude_observation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetPrioritizedExcludeObservation"></a>

```python
def reset_prioritized_exclude_observation() -> None
```

##### `reset_single_select_observation` <a name="reset_single_select_observation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetSingleSelectObservation"></a>

```python
def reset_single_select_observation() -> None
```

##### `reset_threshold_observation` <a name="reset_threshold_observation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetThresholdObservation"></a>

```python
def reset_threshold_observation() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_alert_rule_anomaly_duplicate

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_alert_rule_anomaly_duplicate

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_alert_rule_anomaly_duplicate

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.anomalySettingsVersion">anomaly_settings_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.anomalyVersion">anomaly_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.isDefaultSettings">is_default_settings</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.multiSelectObservation">multi_select_observation</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList">SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.prioritizedExcludeObservation">prioritized_exclude_observation</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.requiredDataConnector">required_data_connector</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList">SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.settingsDefinitionId">settings_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.singleSelectObservation">single_select_observation</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList">SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.tactics">tactics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.techniques">techniques</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.thresholdObservation">threshold_observation</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList">SentinelAlertRuleAnomalyDuplicateThresholdObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference">SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.builtInRuleIdInput">built_in_rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.logAnalyticsWorkspaceIdInput">log_analytics_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.multiSelectObservationInput">multi_select_observation_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation">SentinelAlertRuleAnomalyDuplicateMultiSelectObservation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.prioritizedExcludeObservationInput">prioritized_exclude_observation_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.singleSelectObservationInput">single_select_observation_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation">SentinelAlertRuleAnomalyDuplicateSingleSelectObservation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.thresholdObservationInput">threshold_observation_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation">SentinelAlertRuleAnomalyDuplicateThresholdObservation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts">SentinelAlertRuleAnomalyDuplicateTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.builtInRuleId">built_in_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.mode">mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `anomaly_settings_version`<sup>Required</sup> <a name="anomaly_settings_version" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.anomalySettingsVersion"></a>

```python
anomaly_settings_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `anomaly_version`<sup>Required</sup> <a name="anomaly_version" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.anomalyVersion"></a>

```python
anomaly_version: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `is_default_settings`<sup>Required</sup> <a name="is_default_settings" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.isDefaultSettings"></a>

```python
is_default_settings: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `multi_select_observation`<sup>Required</sup> <a name="multi_select_observation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.multiSelectObservation"></a>

```python
multi_select_observation: SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList">SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `prioritized_exclude_observation`<sup>Required</sup> <a name="prioritized_exclude_observation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.prioritizedExcludeObservation"></a>

```python
prioritized_exclude_observation: SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList</a>

---

##### `required_data_connector`<sup>Required</sup> <a name="required_data_connector" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.requiredDataConnector"></a>

```python
required_data_connector: SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList">SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList</a>

---

##### `settings_definition_id`<sup>Required</sup> <a name="settings_definition_id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.settingsDefinitionId"></a>

```python
settings_definition_id: str
```

- *Type:* str

---

##### `single_select_observation`<sup>Required</sup> <a name="single_select_observation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.singleSelectObservation"></a>

```python
single_select_observation: SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList">SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList</a>

---

##### `tactics`<sup>Required</sup> <a name="tactics" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.tactics"></a>

```python
tactics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `techniques`<sup>Required</sup> <a name="techniques" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.techniques"></a>

```python
techniques: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `threshold_observation`<sup>Required</sup> <a name="threshold_observation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.thresholdObservation"></a>

```python
threshold_observation: SentinelAlertRuleAnomalyDuplicateThresholdObservationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList">SentinelAlertRuleAnomalyDuplicateThresholdObservationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.timeouts"></a>

```python
timeouts: SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference">SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference</a>

---

##### `built_in_rule_id_input`<sup>Optional</sup> <a name="built_in_rule_id_input" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.builtInRuleIdInput"></a>

```python
built_in_rule_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_analytics_workspace_id_input`<sup>Optional</sup> <a name="log_analytics_workspace_id_input" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.logAnalyticsWorkspaceIdInput"></a>

```python
log_analytics_workspace_id_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `multi_select_observation_input`<sup>Optional</sup> <a name="multi_select_observation_input" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.multiSelectObservationInput"></a>

```python
multi_select_observation_input: typing.Union[IResolvable, typing.List[SentinelAlertRuleAnomalyDuplicateMultiSelectObservation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation">SentinelAlertRuleAnomalyDuplicateMultiSelectObservation</a>]]

---

##### `prioritized_exclude_observation_input`<sup>Optional</sup> <a name="prioritized_exclude_observation_input" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.prioritizedExcludeObservationInput"></a>

```python
prioritized_exclude_observation_input: typing.Union[IResolvable, typing.List[SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation</a>]]

---

##### `single_select_observation_input`<sup>Optional</sup> <a name="single_select_observation_input" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.singleSelectObservationInput"></a>

```python
single_select_observation_input: typing.Union[IResolvable, typing.List[SentinelAlertRuleAnomalyDuplicateSingleSelectObservation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation">SentinelAlertRuleAnomalyDuplicateSingleSelectObservation</a>]]

---

##### `threshold_observation_input`<sup>Optional</sup> <a name="threshold_observation_input" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.thresholdObservationInput"></a>

```python
threshold_observation_input: typing.Union[IResolvable, typing.List[SentinelAlertRuleAnomalyDuplicateThresholdObservation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation">SentinelAlertRuleAnomalyDuplicateThresholdObservation</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[SentinelAlertRuleAnomalyDuplicateTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts">SentinelAlertRuleAnomalyDuplicateTimeouts</a>, cdktf.IResolvable]

---

##### `built_in_rule_id`<sup>Required</sup> <a name="built_in_rule_id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.builtInRuleId"></a>

```python
built_in_rule_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelAlertRuleAnomalyDuplicateConfig <a name="SentinelAlertRuleAnomalyDuplicateConfig" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_alert_rule_anomaly_duplicate

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  built_in_rule_id: str,
  display_name: str,
  enabled: typing.Union[bool, IResolvable],
  log_analytics_workspace_id: str,
  mode: str,
  id: str = None,
  multi_select_observation: typing.Union[IResolvable, typing.List[SentinelAlertRuleAnomalyDuplicateMultiSelectObservation]] = None,
  prioritized_exclude_observation: typing.Union[IResolvable, typing.List[SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation]] = None,
  single_select_observation: typing.Union[IResolvable, typing.List[SentinelAlertRuleAnomalyDuplicateSingleSelectObservation]] = None,
  threshold_observation: typing.Union[IResolvable, typing.List[SentinelAlertRuleAnomalyDuplicateThresholdObservation]] = None,
  timeouts: SentinelAlertRuleAnomalyDuplicateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.builtInRuleId">built_in_rule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#built_in_rule_id SentinelAlertRuleAnomalyDuplicate#built_in_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#display_name SentinelAlertRuleAnomalyDuplicate#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#enabled SentinelAlertRuleAnomalyDuplicate#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#log_analytics_workspace_id SentinelAlertRuleAnomalyDuplicate#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#mode SentinelAlertRuleAnomalyDuplicate#mode}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#id SentinelAlertRuleAnomalyDuplicate#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.multiSelectObservation">multi_select_observation</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation">SentinelAlertRuleAnomalyDuplicateMultiSelectObservation</a>]]</code> | multi_select_observation block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.prioritizedExcludeObservation">prioritized_exclude_observation</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation</a>]]</code> | prioritized_exclude_observation block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.singleSelectObservation">single_select_observation</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation">SentinelAlertRuleAnomalyDuplicateSingleSelectObservation</a>]]</code> | single_select_observation block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.thresholdObservation">threshold_observation</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation">SentinelAlertRuleAnomalyDuplicateThresholdObservation</a>]]</code> | threshold_observation block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts">SentinelAlertRuleAnomalyDuplicateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `built_in_rule_id`<sup>Required</sup> <a name="built_in_rule_id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.builtInRuleId"></a>

```python
built_in_rule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#built_in_rule_id SentinelAlertRuleAnomalyDuplicate#built_in_rule_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#display_name SentinelAlertRuleAnomalyDuplicate#display_name}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#enabled SentinelAlertRuleAnomalyDuplicate#enabled}.

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#log_analytics_workspace_id SentinelAlertRuleAnomalyDuplicate#log_analytics_workspace_id}.

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#mode SentinelAlertRuleAnomalyDuplicate#mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#id SentinelAlertRuleAnomalyDuplicate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multi_select_observation`<sup>Optional</sup> <a name="multi_select_observation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.multiSelectObservation"></a>

```python
multi_select_observation: typing.Union[IResolvable, typing.List[SentinelAlertRuleAnomalyDuplicateMultiSelectObservation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation">SentinelAlertRuleAnomalyDuplicateMultiSelectObservation</a>]]

multi_select_observation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#multi_select_observation SentinelAlertRuleAnomalyDuplicate#multi_select_observation}

---

##### `prioritized_exclude_observation`<sup>Optional</sup> <a name="prioritized_exclude_observation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.prioritizedExcludeObservation"></a>

```python
prioritized_exclude_observation: typing.Union[IResolvable, typing.List[SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation</a>]]

prioritized_exclude_observation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#prioritized_exclude_observation SentinelAlertRuleAnomalyDuplicate#prioritized_exclude_observation}

---

##### `single_select_observation`<sup>Optional</sup> <a name="single_select_observation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.singleSelectObservation"></a>

```python
single_select_observation: typing.Union[IResolvable, typing.List[SentinelAlertRuleAnomalyDuplicateSingleSelectObservation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation">SentinelAlertRuleAnomalyDuplicateSingleSelectObservation</a>]]

single_select_observation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#single_select_observation SentinelAlertRuleAnomalyDuplicate#single_select_observation}

---

##### `threshold_observation`<sup>Optional</sup> <a name="threshold_observation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.thresholdObservation"></a>

```python
threshold_observation: typing.Union[IResolvable, typing.List[SentinelAlertRuleAnomalyDuplicateThresholdObservation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation">SentinelAlertRuleAnomalyDuplicateThresholdObservation</a>]]

threshold_observation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#threshold_observation SentinelAlertRuleAnomalyDuplicate#threshold_observation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.timeouts"></a>

```python
timeouts: SentinelAlertRuleAnomalyDuplicateTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts">SentinelAlertRuleAnomalyDuplicateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#timeouts SentinelAlertRuleAnomalyDuplicate#timeouts}

---

### SentinelAlertRuleAnomalyDuplicateMultiSelectObservation <a name="SentinelAlertRuleAnomalyDuplicateMultiSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_alert_rule_anomaly_duplicate

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#name SentinelAlertRuleAnomalyDuplicate#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#values SentinelAlertRuleAnomalyDuplicate#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#name SentinelAlertRuleAnomalyDuplicate#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#values SentinelAlertRuleAnomalyDuplicate#values}.

---

### SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation <a name="SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_alert_rule_anomaly_duplicate

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation(
  name: str,
  exclude: str = None,
  prioritize: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#name SentinelAlertRuleAnomalyDuplicate#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation.property.exclude">exclude</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#exclude SentinelAlertRuleAnomalyDuplicate#exclude}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation.property.prioritize">prioritize</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#prioritize SentinelAlertRuleAnomalyDuplicate#prioritize}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#name SentinelAlertRuleAnomalyDuplicate#name}.

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation.property.exclude"></a>

```python
exclude: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#exclude SentinelAlertRuleAnomalyDuplicate#exclude}.

---

##### `prioritize`<sup>Optional</sup> <a name="prioritize" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation.property.prioritize"></a>

```python
prioritize: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#prioritize SentinelAlertRuleAnomalyDuplicate#prioritize}.

---

### SentinelAlertRuleAnomalyDuplicateRequiredDataConnector <a name="SentinelAlertRuleAnomalyDuplicateRequiredDataConnector" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnector.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_alert_rule_anomaly_duplicate

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnector()
```


### SentinelAlertRuleAnomalyDuplicateSingleSelectObservation <a name="SentinelAlertRuleAnomalyDuplicateSingleSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_alert_rule_anomaly_duplicate

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#name SentinelAlertRuleAnomalyDuplicate#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#value SentinelAlertRuleAnomalyDuplicate#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#name SentinelAlertRuleAnomalyDuplicate#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#value SentinelAlertRuleAnomalyDuplicate#value}.

---

### SentinelAlertRuleAnomalyDuplicateThresholdObservation <a name="SentinelAlertRuleAnomalyDuplicateThresholdObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_alert_rule_anomaly_duplicate

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#name SentinelAlertRuleAnomalyDuplicate#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#value SentinelAlertRuleAnomalyDuplicate#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#name SentinelAlertRuleAnomalyDuplicate#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#value SentinelAlertRuleAnomalyDuplicate#value}.

---

### SentinelAlertRuleAnomalyDuplicateTimeouts <a name="SentinelAlertRuleAnomalyDuplicateTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_alert_rule_anomaly_duplicate

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#create SentinelAlertRuleAnomalyDuplicate#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#delete SentinelAlertRuleAnomalyDuplicate#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#read SentinelAlertRuleAnomalyDuplicate#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#update SentinelAlertRuleAnomalyDuplicate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#create SentinelAlertRuleAnomalyDuplicate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#delete SentinelAlertRuleAnomalyDuplicate#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#read SentinelAlertRuleAnomalyDuplicate#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#update SentinelAlertRuleAnomalyDuplicate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList <a name="SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_alert_rule_anomaly_duplicate

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation">SentinelAlertRuleAnomalyDuplicateMultiSelectObservation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SentinelAlertRuleAnomalyDuplicateMultiSelectObservation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation">SentinelAlertRuleAnomalyDuplicateMultiSelectObservation</a>]]

---


### SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference <a name="SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_alert_rule_anomaly_duplicate

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.supportedValues">supported_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation">SentinelAlertRuleAnomalyDuplicateMultiSelectObservation</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `supported_values`<sup>Required</sup> <a name="supported_values" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.supportedValues"></a>

```python
supported_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SentinelAlertRuleAnomalyDuplicateMultiSelectObservation, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation">SentinelAlertRuleAnomalyDuplicateMultiSelectObservation</a>, cdktf.IResolvable]

---


### SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList <a name="SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_alert_rule_anomaly_duplicate

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation</a>]]

---


### SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference <a name="SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_alert_rule_anomaly_duplicate

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.resetExclude">reset_exclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.resetPrioritize">reset_prioritize</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude` <a name="reset_exclude" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.resetExclude"></a>

```python
def reset_exclude() -> None
```

##### `reset_prioritize` <a name="reset_prioritize" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.resetPrioritize"></a>

```python
def reset_prioritize() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.excludeInput">exclude_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.prioritizeInput">prioritize_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.exclude">exclude</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.prioritize">prioritize</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `exclude_input`<sup>Optional</sup> <a name="exclude_input" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.excludeInput"></a>

```python
exclude_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `prioritize_input`<sup>Optional</sup> <a name="prioritize_input" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.prioritizeInput"></a>

```python
prioritize_input: str
```

- *Type:* str

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.exclude"></a>

```python
exclude: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `prioritize`<sup>Required</sup> <a name="prioritize" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.prioritize"></a>

```python
prioritize: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation</a>, cdktf.IResolvable]

---


### SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList <a name="SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_alert_rule_anomaly_duplicate

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference <a name="SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_alert_rule_anomaly_duplicate

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.connectorId">connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.dataTypes">data_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnector">SentinelAlertRuleAnomalyDuplicateRequiredDataConnector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_id`<sup>Required</sup> <a name="connector_id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.connectorId"></a>

```python
connector_id: str
```

- *Type:* str

---

##### `data_types`<sup>Required</sup> <a name="data_types" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.dataTypes"></a>

```python
data_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.internalValue"></a>

```python
internal_value: SentinelAlertRuleAnomalyDuplicateRequiredDataConnector
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnector">SentinelAlertRuleAnomalyDuplicateRequiredDataConnector</a>

---


### SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList <a name="SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_alert_rule_anomaly_duplicate

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation">SentinelAlertRuleAnomalyDuplicateSingleSelectObservation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SentinelAlertRuleAnomalyDuplicateSingleSelectObservation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation">SentinelAlertRuleAnomalyDuplicateSingleSelectObservation</a>]]

---


### SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference <a name="SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_alert_rule_anomaly_duplicate

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.supportedValues">supported_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation">SentinelAlertRuleAnomalyDuplicateSingleSelectObservation</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `supported_values`<sup>Required</sup> <a name="supported_values" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.supportedValues"></a>

```python
supported_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SentinelAlertRuleAnomalyDuplicateSingleSelectObservation, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation">SentinelAlertRuleAnomalyDuplicateSingleSelectObservation</a>, cdktf.IResolvable]

---


### SentinelAlertRuleAnomalyDuplicateThresholdObservationList <a name="SentinelAlertRuleAnomalyDuplicateThresholdObservationList" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_alert_rule_anomaly_duplicate

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation">SentinelAlertRuleAnomalyDuplicateThresholdObservation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SentinelAlertRuleAnomalyDuplicateThresholdObservation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation">SentinelAlertRuleAnomalyDuplicateThresholdObservation</a>]]

---


### SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference <a name="SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_alert_rule_anomaly_duplicate

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.max">max</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.min">min</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation">SentinelAlertRuleAnomalyDuplicateThresholdObservation</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.max"></a>

```python
max: str
```

- *Type:* str

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.min"></a>

```python
min: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SentinelAlertRuleAnomalyDuplicateThresholdObservation, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation">SentinelAlertRuleAnomalyDuplicateThresholdObservation</a>, cdktf.IResolvable]

---


### SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference <a name="SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_alert_rule_anomaly_duplicate

sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts">SentinelAlertRuleAnomalyDuplicateTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SentinelAlertRuleAnomalyDuplicateTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts">SentinelAlertRuleAnomalyDuplicateTimeouts</a>, cdktf.IResolvable]

---



