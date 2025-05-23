# `monitorAlertPrometheusRuleGroup` Submodule <a name="`monitorAlertPrometheusRuleGroup` Submodule" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorAlertPrometheusRuleGroup <a name="MonitorAlertPrometheusRuleGroup" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group azurerm_monitor_alert_prometheus_rule_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_alert_prometheus_rule_group

monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  rule: typing.Union[IResolvable, typing.List[MonitorAlertPrometheusRuleGroupRule]],
  scopes: typing.List[str],
  cluster_name: str = None,
  description: str = None,
  id: str = None,
  interval: str = None,
  rule_group_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: MonitorAlertPrometheusRuleGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#location MonitorAlertPrometheusRuleGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#name MonitorAlertPrometheusRuleGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#resource_group_name MonitorAlertPrometheusRuleGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule">MonitorAlertPrometheusRuleGroupRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.scopes">scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#scopes MonitorAlertPrometheusRuleGroup#scopes}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#cluster_name MonitorAlertPrometheusRuleGroup#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#description MonitorAlertPrometheusRuleGroup#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#id MonitorAlertPrometheusRuleGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.interval">interval</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#interval MonitorAlertPrometheusRuleGroup#interval}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.ruleGroupEnabled">rule_group_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#rule_group_enabled MonitorAlertPrometheusRuleGroup#rule_group_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#tags MonitorAlertPrometheusRuleGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts">MonitorAlertPrometheusRuleGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#location MonitorAlertPrometheusRuleGroup#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#name MonitorAlertPrometheusRuleGroup#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#resource_group_name MonitorAlertPrometheusRuleGroup#resource_group_name}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.rule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule">MonitorAlertPrometheusRuleGroupRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#rule MonitorAlertPrometheusRuleGroup#rule}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.scopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#scopes MonitorAlertPrometheusRuleGroup#scopes}.

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#cluster_name MonitorAlertPrometheusRuleGroup#cluster_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#description MonitorAlertPrometheusRuleGroup#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#id MonitorAlertPrometheusRuleGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.interval"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#interval MonitorAlertPrometheusRuleGroup#interval}.

---

##### `rule_group_enabled`<sup>Optional</sup> <a name="rule_group_enabled" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.ruleGroupEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#rule_group_enabled MonitorAlertPrometheusRuleGroup#rule_group_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#tags MonitorAlertPrometheusRuleGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts">MonitorAlertPrometheusRuleGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#timeouts MonitorAlertPrometheusRuleGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetClusterName">reset_cluster_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetRuleGroupEnabled">reset_rule_group_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[MonitorAlertPrometheusRuleGroupRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule">MonitorAlertPrometheusRuleGroupRule</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#create MonitorAlertPrometheusRuleGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#delete MonitorAlertPrometheusRuleGroup#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#read MonitorAlertPrometheusRuleGroup#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#update MonitorAlertPrometheusRuleGroup#update}.

---

##### `reset_cluster_name` <a name="reset_cluster_name" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetClusterName"></a>

```python
def reset_cluster_name() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_rule_group_enabled` <a name="reset_rule_group_enabled" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetRuleGroupEnabled"></a>

```python
def reset_rule_group_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MonitorAlertPrometheusRuleGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_alert_prometheus_rule_group

monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_alert_prometheus_rule_group

monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_alert_prometheus_rule_group

monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_alert_prometheus_rule_group

monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MonitorAlertPrometheusRuleGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MonitorAlertPrometheusRuleGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MonitorAlertPrometheusRuleGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MonitorAlertPrometheusRuleGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList">MonitorAlertPrometheusRuleGroupRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference">MonitorAlertPrometheusRuleGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.intervalInput">interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.ruleGroupEnabledInput">rule_group_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule">MonitorAlertPrometheusRuleGroupRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts">MonitorAlertPrometheusRuleGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.interval">interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.ruleGroupEnabled">rule_group_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.rule"></a>

```python
rule: MonitorAlertPrometheusRuleGroupRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList">MonitorAlertPrometheusRuleGroupRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.timeouts"></a>

```python
timeouts: MonitorAlertPrometheusRuleGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference">MonitorAlertPrometheusRuleGroupTimeoutsOutputReference</a>

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.intervalInput"></a>

```python
interval_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `rule_group_enabled_input`<sup>Optional</sup> <a name="rule_group_enabled_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.ruleGroupEnabledInput"></a>

```python
rule_group_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[MonitorAlertPrometheusRuleGroupRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule">MonitorAlertPrometheusRuleGroupRule</a>]]

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MonitorAlertPrometheusRuleGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts">MonitorAlertPrometheusRuleGroupTimeouts</a>]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.interval"></a>

```python
interval: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `rule_group_enabled`<sup>Required</sup> <a name="rule_group_enabled" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.ruleGroupEnabled"></a>

```python
rule_group_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorAlertPrometheusRuleGroupConfig <a name="MonitorAlertPrometheusRuleGroupConfig" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_alert_prometheus_rule_group

monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  rule: typing.Union[IResolvable, typing.List[MonitorAlertPrometheusRuleGroupRule]],
  scopes: typing.List[str],
  cluster_name: str = None,
  description: str = None,
  id: str = None,
  interval: str = None,
  rule_group_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: MonitorAlertPrometheusRuleGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#location MonitorAlertPrometheusRuleGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#name MonitorAlertPrometheusRuleGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#resource_group_name MonitorAlertPrometheusRuleGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule">MonitorAlertPrometheusRuleGroupRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#scopes MonitorAlertPrometheusRuleGroup#scopes}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#cluster_name MonitorAlertPrometheusRuleGroup#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#description MonitorAlertPrometheusRuleGroup#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#id MonitorAlertPrometheusRuleGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.interval">interval</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#interval MonitorAlertPrometheusRuleGroup#interval}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.ruleGroupEnabled">rule_group_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#rule_group_enabled MonitorAlertPrometheusRuleGroup#rule_group_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#tags MonitorAlertPrometheusRuleGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts">MonitorAlertPrometheusRuleGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#location MonitorAlertPrometheusRuleGroup#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#name MonitorAlertPrometheusRuleGroup#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#resource_group_name MonitorAlertPrometheusRuleGroup#resource_group_name}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[MonitorAlertPrometheusRuleGroupRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule">MonitorAlertPrometheusRuleGroupRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#rule MonitorAlertPrometheusRuleGroup#rule}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#scopes MonitorAlertPrometheusRuleGroup#scopes}.

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#cluster_name MonitorAlertPrometheusRuleGroup#cluster_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#description MonitorAlertPrometheusRuleGroup#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#id MonitorAlertPrometheusRuleGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.interval"></a>

```python
interval: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#interval MonitorAlertPrometheusRuleGroup#interval}.

---

##### `rule_group_enabled`<sup>Optional</sup> <a name="rule_group_enabled" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.ruleGroupEnabled"></a>

```python
rule_group_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#rule_group_enabled MonitorAlertPrometheusRuleGroup#rule_group_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#tags MonitorAlertPrometheusRuleGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.timeouts"></a>

```python
timeouts: MonitorAlertPrometheusRuleGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts">MonitorAlertPrometheusRuleGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#timeouts MonitorAlertPrometheusRuleGroup#timeouts}

---

### MonitorAlertPrometheusRuleGroupRule <a name="MonitorAlertPrometheusRuleGroupRule" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_alert_prometheus_rule_group

monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule(
  expression: str,
  action: typing.Union[IResolvable, typing.List[MonitorAlertPrometheusRuleGroupRuleAction]] = None,
  alert: str = None,
  alert_resolution: MonitorAlertPrometheusRuleGroupRuleAlertResolution = None,
  annotations: typing.Mapping[str] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  for: str = None,
  labels: typing.Mapping[str] = None,
  record: str = None,
  severity: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#expression MonitorAlertPrometheusRuleGroup#expression}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.action">action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction">MonitorAlertPrometheusRuleGroupRuleAction</a>]]</code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.alert">alert</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#alert MonitorAlertPrometheusRuleGroup#alert}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.alertResolution">alert_resolution</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution">MonitorAlertPrometheusRuleGroupRuleAlertResolution</a></code> | alert_resolution block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#annotations MonitorAlertPrometheusRuleGroup#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#enabled MonitorAlertPrometheusRuleGroup#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.for">for</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#for MonitorAlertPrometheusRuleGroup#for}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#labels MonitorAlertPrometheusRuleGroup#labels}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.record">record</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#record MonitorAlertPrometheusRuleGroup#record}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.severity">severity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#severity MonitorAlertPrometheusRuleGroup#severity}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#expression MonitorAlertPrometheusRuleGroup#expression}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.action"></a>

```python
action: typing.Union[IResolvable, typing.List[MonitorAlertPrometheusRuleGroupRuleAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction">MonitorAlertPrometheusRuleGroupRuleAction</a>]]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#action MonitorAlertPrometheusRuleGroup#action}

---

##### `alert`<sup>Optional</sup> <a name="alert" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.alert"></a>

```python
alert: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#alert MonitorAlertPrometheusRuleGroup#alert}.

---

##### `alert_resolution`<sup>Optional</sup> <a name="alert_resolution" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.alertResolution"></a>

```python
alert_resolution: MonitorAlertPrometheusRuleGroupRuleAlertResolution
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution">MonitorAlertPrometheusRuleGroupRuleAlertResolution</a>

alert_resolution block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#alert_resolution MonitorAlertPrometheusRuleGroup#alert_resolution}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#annotations MonitorAlertPrometheusRuleGroup#annotations}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#enabled MonitorAlertPrometheusRuleGroup#enabled}.

---

##### `for`<sup>Optional</sup> <a name="for" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.for"></a>

```python
for: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#for MonitorAlertPrometheusRuleGroup#for}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#labels MonitorAlertPrometheusRuleGroup#labels}.

---

##### `record`<sup>Optional</sup> <a name="record" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.record"></a>

```python
record: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#record MonitorAlertPrometheusRuleGroup#record}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.severity"></a>

```python
severity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#severity MonitorAlertPrometheusRuleGroup#severity}.

---

### MonitorAlertPrometheusRuleGroupRuleAction <a name="MonitorAlertPrometheusRuleGroupRuleAction" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_alert_prometheus_rule_group

monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction(
  action_group_id: str,
  action_properties: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction.property.actionGroupId">action_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#action_group_id MonitorAlertPrometheusRuleGroup#action_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction.property.actionProperties">action_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#action_properties MonitorAlertPrometheusRuleGroup#action_properties}. |

---

##### `action_group_id`<sup>Required</sup> <a name="action_group_id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction.property.actionGroupId"></a>

```python
action_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#action_group_id MonitorAlertPrometheusRuleGroup#action_group_id}.

---

##### `action_properties`<sup>Optional</sup> <a name="action_properties" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction.property.actionProperties"></a>

```python
action_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#action_properties MonitorAlertPrometheusRuleGroup#action_properties}.

---

### MonitorAlertPrometheusRuleGroupRuleAlertResolution <a name="MonitorAlertPrometheusRuleGroupRuleAlertResolution" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_alert_prometheus_rule_group

monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution(
  auto_resolved: typing.Union[bool, IResolvable] = None,
  time_to_resolve: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution.property.autoResolved">auto_resolved</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#auto_resolved MonitorAlertPrometheusRuleGroup#auto_resolved}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution.property.timeToResolve">time_to_resolve</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#time_to_resolve MonitorAlertPrometheusRuleGroup#time_to_resolve}. |

---

##### `auto_resolved`<sup>Optional</sup> <a name="auto_resolved" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution.property.autoResolved"></a>

```python
auto_resolved: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#auto_resolved MonitorAlertPrometheusRuleGroup#auto_resolved}.

---

##### `time_to_resolve`<sup>Optional</sup> <a name="time_to_resolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution.property.timeToResolve"></a>

```python
time_to_resolve: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#time_to_resolve MonitorAlertPrometheusRuleGroup#time_to_resolve}.

---

### MonitorAlertPrometheusRuleGroupTimeouts <a name="MonitorAlertPrometheusRuleGroupTimeouts" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_alert_prometheus_rule_group

monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#create MonitorAlertPrometheusRuleGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#delete MonitorAlertPrometheusRuleGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#read MonitorAlertPrometheusRuleGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#update MonitorAlertPrometheusRuleGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#create MonitorAlertPrometheusRuleGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#delete MonitorAlertPrometheusRuleGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#read MonitorAlertPrometheusRuleGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#update MonitorAlertPrometheusRuleGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorAlertPrometheusRuleGroupRuleActionList <a name="MonitorAlertPrometheusRuleGroupRuleActionList" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_alert_prometheus_rule_group

monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorAlertPrometheusRuleGroupRuleActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction">MonitorAlertPrometheusRuleGroupRuleAction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorAlertPrometheusRuleGroupRuleAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction">MonitorAlertPrometheusRuleGroupRuleAction</a>]]

---


### MonitorAlertPrometheusRuleGroupRuleActionOutputReference <a name="MonitorAlertPrometheusRuleGroupRuleActionOutputReference" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_alert_prometheus_rule_group

monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.resetActionProperties">reset_action_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action_properties` <a name="reset_action_properties" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.resetActionProperties"></a>

```python
def reset_action_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.actionGroupIdInput">action_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.actionPropertiesInput">action_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.actionGroupId">action_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.actionProperties">action_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction">MonitorAlertPrometheusRuleGroupRuleAction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_group_id_input`<sup>Optional</sup> <a name="action_group_id_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.actionGroupIdInput"></a>

```python
action_group_id_input: str
```

- *Type:* str

---

##### `action_properties_input`<sup>Optional</sup> <a name="action_properties_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.actionPropertiesInput"></a>

```python
action_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `action_group_id`<sup>Required</sup> <a name="action_group_id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.actionGroupId"></a>

```python
action_group_id: str
```

- *Type:* str

---

##### `action_properties`<sup>Required</sup> <a name="action_properties" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.actionProperties"></a>

```python
action_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorAlertPrometheusRuleGroupRuleAction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction">MonitorAlertPrometheusRuleGroupRuleAction</a>]

---


### MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference <a name="MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_alert_prometheus_rule_group

monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.resetAutoResolved">reset_auto_resolved</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.resetTimeToResolve">reset_time_to_resolve</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_resolved` <a name="reset_auto_resolved" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.resetAutoResolved"></a>

```python
def reset_auto_resolved() -> None
```

##### `reset_time_to_resolve` <a name="reset_time_to_resolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.resetTimeToResolve"></a>

```python
def reset_time_to_resolve() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.autoResolvedInput">auto_resolved_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.timeToResolveInput">time_to_resolve_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.autoResolved">auto_resolved</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.timeToResolve">time_to_resolve</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution">MonitorAlertPrometheusRuleGroupRuleAlertResolution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_resolved_input`<sup>Optional</sup> <a name="auto_resolved_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.autoResolvedInput"></a>

```python
auto_resolved_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `time_to_resolve_input`<sup>Optional</sup> <a name="time_to_resolve_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.timeToResolveInput"></a>

```python
time_to_resolve_input: str
```

- *Type:* str

---

##### `auto_resolved`<sup>Required</sup> <a name="auto_resolved" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.autoResolved"></a>

```python
auto_resolved: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `time_to_resolve`<sup>Required</sup> <a name="time_to_resolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.timeToResolve"></a>

```python
time_to_resolve: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.internalValue"></a>

```python
internal_value: MonitorAlertPrometheusRuleGroupRuleAlertResolution
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution">MonitorAlertPrometheusRuleGroupRuleAlertResolution</a>

---


### MonitorAlertPrometheusRuleGroupRuleList <a name="MonitorAlertPrometheusRuleGroupRuleList" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_alert_prometheus_rule_group

monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorAlertPrometheusRuleGroupRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule">MonitorAlertPrometheusRuleGroupRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorAlertPrometheusRuleGroupRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule">MonitorAlertPrometheusRuleGroupRule</a>]]

---


### MonitorAlertPrometheusRuleGroupRuleOutputReference <a name="MonitorAlertPrometheusRuleGroupRuleOutputReference" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_alert_prometheus_rule_group

monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.putAlertResolution">put_alert_resolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetAlert">reset_alert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetAlertResolution">reset_alert_resolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetFor">reset_for</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetRecord">reset_record</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetSeverity">reset_severity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.putAction"></a>

```python
def put_action(
  value: typing.Union[IResolvable, typing.List[MonitorAlertPrometheusRuleGroupRuleAction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.putAction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction">MonitorAlertPrometheusRuleGroupRuleAction</a>]]

---

##### `put_alert_resolution` <a name="put_alert_resolution" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.putAlertResolution"></a>

```python
def put_alert_resolution(
  auto_resolved: typing.Union[bool, IResolvable] = None,
  time_to_resolve: str = None
) -> None
```

###### `auto_resolved`<sup>Optional</sup> <a name="auto_resolved" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.putAlertResolution.parameter.autoResolved"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#auto_resolved MonitorAlertPrometheusRuleGroup#auto_resolved}.

---

###### `time_to_resolve`<sup>Optional</sup> <a name="time_to_resolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.putAlertResolution.parameter.timeToResolve"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/monitor_alert_prometheus_rule_group#time_to_resolve MonitorAlertPrometheusRuleGroup#time_to_resolve}.

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_alert` <a name="reset_alert" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetAlert"></a>

```python
def reset_alert() -> None
```

##### `reset_alert_resolution` <a name="reset_alert_resolution" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetAlertResolution"></a>

```python
def reset_alert_resolution() -> None
```

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_for` <a name="reset_for" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetFor"></a>

```python
def reset_for() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_record` <a name="reset_record" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetRecord"></a>

```python
def reset_record() -> None
```

##### `reset_severity` <a name="reset_severity" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetSeverity"></a>

```python
def reset_severity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList">MonitorAlertPrometheusRuleGroupRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.alertResolution">alert_resolution</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference">MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.actionInput">action_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction">MonitorAlertPrometheusRuleGroupRuleAction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.alertInput">alert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.alertResolutionInput">alert_resolution_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution">MonitorAlertPrometheusRuleGroupRuleAlertResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.forInput">for_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.recordInput">record_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.severityInput">severity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.alert">alert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.for">for</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.record">record</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.severity">severity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule">MonitorAlertPrometheusRuleGroupRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.action"></a>

```python
action: MonitorAlertPrometheusRuleGroupRuleActionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList">MonitorAlertPrometheusRuleGroupRuleActionList</a>

---

##### `alert_resolution`<sup>Required</sup> <a name="alert_resolution" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.alertResolution"></a>

```python
alert_resolution: MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference">MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.actionInput"></a>

```python
action_input: typing.Union[IResolvable, typing.List[MonitorAlertPrometheusRuleGroupRuleAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction">MonitorAlertPrometheusRuleGroupRuleAction</a>]]

---

##### `alert_input`<sup>Optional</sup> <a name="alert_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.alertInput"></a>

```python
alert_input: str
```

- *Type:* str

---

##### `alert_resolution_input`<sup>Optional</sup> <a name="alert_resolution_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.alertResolutionInput"></a>

```python
alert_resolution_input: MonitorAlertPrometheusRuleGroupRuleAlertResolution
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution">MonitorAlertPrometheusRuleGroupRuleAlertResolution</a>

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `for_input`<sup>Optional</sup> <a name="for_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.forInput"></a>

```python
for_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `record_input`<sup>Optional</sup> <a name="record_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.recordInput"></a>

```python
record_input: str
```

- *Type:* str

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.severityInput"></a>

```python
severity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alert`<sup>Required</sup> <a name="alert" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.alert"></a>

```python
alert: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `for`<sup>Required</sup> <a name="for" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.for"></a>

```python
for: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `record`<sup>Required</sup> <a name="record" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.record"></a>

```python
record: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.severity"></a>

```python
severity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorAlertPrometheusRuleGroupRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule">MonitorAlertPrometheusRuleGroupRule</a>]

---


### MonitorAlertPrometheusRuleGroupTimeoutsOutputReference <a name="MonitorAlertPrometheusRuleGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_alert_prometheus_rule_group

monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts">MonitorAlertPrometheusRuleGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorAlertPrometheusRuleGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts">MonitorAlertPrometheusRuleGroupTimeouts</a>]

---



