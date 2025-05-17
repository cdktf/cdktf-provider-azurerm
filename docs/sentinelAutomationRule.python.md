# `sentinelAutomationRule` Submodule <a name="`sentinelAutomationRule` Submodule" id="@cdktf/provider-azurerm.sentinelAutomationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelAutomationRule <a name="SentinelAutomationRule" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule azurerm_sentinel_automation_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_automation_rule

sentinelAutomationRule.SentinelAutomationRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  log_analytics_workspace_id: str,
  name: str,
  order: typing.Union[int, float],
  action_incident: typing.Union[IResolvable, typing.List[SentinelAutomationRuleActionIncident]] = None,
  action_playbook: typing.Union[IResolvable, typing.List[SentinelAutomationRuleActionPlaybook]] = None,
  condition_json: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  expiration: str = None,
  id: str = None,
  timeouts: SentinelAutomationRuleTimeouts = None,
  triggers_on: str = None,
  triggers_when: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#display_name SentinelAutomationRule#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#log_analytics_workspace_id SentinelAutomationRule#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#name SentinelAutomationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.order">order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.actionIncident">action_incident</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident">SentinelAutomationRuleActionIncident</a>]]</code> | action_incident block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.actionPlaybook">action_playbook</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook">SentinelAutomationRuleActionPlaybook</a>]]</code> | action_playbook block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.conditionJson">condition_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#condition_json SentinelAutomationRule#condition_json}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#enabled SentinelAutomationRule#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.expiration">expiration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#expiration SentinelAutomationRule#expiration}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#id SentinelAutomationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts">SentinelAutomationRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.triggersOn">triggers_on</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#triggers_on SentinelAutomationRule#triggers_on}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.triggersWhen">triggers_when</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#triggers_when SentinelAutomationRule#triggers_when}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#display_name SentinelAutomationRule#display_name}.

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#log_analytics_workspace_id SentinelAutomationRule#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#name SentinelAutomationRule#name}.

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.order"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}.

---

##### `action_incident`<sup>Optional</sup> <a name="action_incident" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.actionIncident"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident">SentinelAutomationRuleActionIncident</a>]]

action_incident block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#action_incident SentinelAutomationRule#action_incident}

---

##### `action_playbook`<sup>Optional</sup> <a name="action_playbook" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.actionPlaybook"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook">SentinelAutomationRuleActionPlaybook</a>]]

action_playbook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#action_playbook SentinelAutomationRule#action_playbook}

---

##### `condition_json`<sup>Optional</sup> <a name="condition_json" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.conditionJson"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#condition_json SentinelAutomationRule#condition_json}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#enabled SentinelAutomationRule#enabled}.

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.expiration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#expiration SentinelAutomationRule#expiration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#id SentinelAutomationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts">SentinelAutomationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#timeouts SentinelAutomationRule#timeouts}

---

##### `triggers_on`<sup>Optional</sup> <a name="triggers_on" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.triggersOn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#triggers_on SentinelAutomationRule#triggers_on}.

---

##### `triggers_when`<sup>Optional</sup> <a name="triggers_when" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.Initializer.parameter.triggersWhen"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#triggers_when SentinelAutomationRule#triggers_when}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putActionIncident">put_action_incident</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putActionPlaybook">put_action_playbook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetActionIncident">reset_action_incident</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetActionPlaybook">reset_action_playbook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetConditionJson">reset_condition_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetExpiration">reset_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetTriggersOn">reset_triggers_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetTriggersWhen">reset_triggers_when</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_action_incident` <a name="put_action_incident" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putActionIncident"></a>

```python
def put_action_incident(
  value: typing.Union[IResolvable, typing.List[SentinelAutomationRuleActionIncident]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putActionIncident.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident">SentinelAutomationRuleActionIncident</a>]]

---

##### `put_action_playbook` <a name="put_action_playbook" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putActionPlaybook"></a>

```python
def put_action_playbook(
  value: typing.Union[IResolvable, typing.List[SentinelAutomationRuleActionPlaybook]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putActionPlaybook.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook">SentinelAutomationRuleActionPlaybook</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#create SentinelAutomationRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#delete SentinelAutomationRule#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#read SentinelAutomationRule#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#update SentinelAutomationRule#update}.

---

##### `reset_action_incident` <a name="reset_action_incident" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetActionIncident"></a>

```python
def reset_action_incident() -> None
```

##### `reset_action_playbook` <a name="reset_action_playbook" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetActionPlaybook"></a>

```python
def reset_action_playbook() -> None
```

##### `reset_condition_json` <a name="reset_condition_json" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetConditionJson"></a>

```python
def reset_condition_json() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_expiration` <a name="reset_expiration" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetExpiration"></a>

```python
def reset_expiration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_triggers_on` <a name="reset_triggers_on" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetTriggersOn"></a>

```python
def reset_triggers_on() -> None
```

##### `reset_triggers_when` <a name="reset_triggers_when" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.resetTriggersWhen"></a>

```python
def reset_triggers_when() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SentinelAutomationRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_automation_rule

sentinelAutomationRule.SentinelAutomationRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_automation_rule

sentinelAutomationRule.SentinelAutomationRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_automation_rule

sentinelAutomationRule.SentinelAutomationRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_automation_rule

sentinelAutomationRule.SentinelAutomationRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SentinelAutomationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SentinelAutomationRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SentinelAutomationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SentinelAutomationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.actionIncident">action_incident</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList">SentinelAutomationRuleActionIncidentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.actionPlaybook">action_playbook</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList">SentinelAutomationRuleActionPlaybookList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference">SentinelAutomationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.actionIncidentInput">action_incident_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident">SentinelAutomationRuleActionIncident</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.actionPlaybookInput">action_playbook_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook">SentinelAutomationRuleActionPlaybook</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.conditionJsonInput">condition_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.expirationInput">expiration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.logAnalyticsWorkspaceIdInput">log_analytics_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.orderInput">order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts">SentinelAutomationRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.triggersOnInput">triggers_on_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.triggersWhenInput">triggers_when_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.conditionJson">condition_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.expiration">expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.triggersOn">triggers_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.triggersWhen">triggers_when</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_incident`<sup>Required</sup> <a name="action_incident" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.actionIncident"></a>

```python
action_incident: SentinelAutomationRuleActionIncidentList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList">SentinelAutomationRuleActionIncidentList</a>

---

##### `action_playbook`<sup>Required</sup> <a name="action_playbook" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.actionPlaybook"></a>

```python
action_playbook: SentinelAutomationRuleActionPlaybookList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList">SentinelAutomationRuleActionPlaybookList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.timeouts"></a>

```python
timeouts: SentinelAutomationRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference">SentinelAutomationRuleTimeoutsOutputReference</a>

---

##### `action_incident_input`<sup>Optional</sup> <a name="action_incident_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.actionIncidentInput"></a>

```python
action_incident_input: typing.Union[IResolvable, typing.List[SentinelAutomationRuleActionIncident]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident">SentinelAutomationRuleActionIncident</a>]]

---

##### `action_playbook_input`<sup>Optional</sup> <a name="action_playbook_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.actionPlaybookInput"></a>

```python
action_playbook_input: typing.Union[IResolvable, typing.List[SentinelAutomationRuleActionPlaybook]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook">SentinelAutomationRuleActionPlaybook</a>]]

---

##### `condition_json_input`<sup>Optional</sup> <a name="condition_json_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.conditionJsonInput"></a>

```python
condition_json_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expiration_input`<sup>Optional</sup> <a name="expiration_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.expirationInput"></a>

```python
expiration_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_analytics_workspace_id_input`<sup>Optional</sup> <a name="log_analytics_workspace_id_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.logAnalyticsWorkspaceIdInput"></a>

```python
log_analytics_workspace_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.orderInput"></a>

```python
order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SentinelAutomationRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts">SentinelAutomationRuleTimeouts</a>]

---

##### `triggers_on_input`<sup>Optional</sup> <a name="triggers_on_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.triggersOnInput"></a>

```python
triggers_on_input: str
```

- *Type:* str

---

##### `triggers_when_input`<sup>Optional</sup> <a name="triggers_when_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.triggersWhenInput"></a>

```python
triggers_when_input: str
```

- *Type:* str

---

##### `condition_json`<sup>Required</sup> <a name="condition_json" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.conditionJson"></a>

```python
condition_json: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `triggers_on`<sup>Required</sup> <a name="triggers_on" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.triggersOn"></a>

```python
triggers_on: str
```

- *Type:* str

---

##### `triggers_when`<sup>Required</sup> <a name="triggers_when" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.triggersWhen"></a>

```python
triggers_when: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelAutomationRuleActionIncident <a name="SentinelAutomationRuleActionIncident" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_automation_rule

sentinelAutomationRule.SentinelAutomationRuleActionIncident(
  order: typing.Union[int, float],
  classification: str = None,
  classification_comment: str = None,
  labels: typing.List[str] = None,
  owner_id: str = None,
  severity: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.order">order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.classification">classification</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#classification SentinelAutomationRule#classification}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.classificationComment">classification_comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#classification_comment SentinelAutomationRule#classification_comment}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.labels">labels</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#labels SentinelAutomationRule#labels}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.ownerId">owner_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#owner_id SentinelAutomationRule#owner_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.severity">severity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#severity SentinelAutomationRule#severity}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#status SentinelAutomationRule#status}. |

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}.

---

##### `classification`<sup>Optional</sup> <a name="classification" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.classification"></a>

```python
classification: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#classification SentinelAutomationRule#classification}.

---

##### `classification_comment`<sup>Optional</sup> <a name="classification_comment" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.classificationComment"></a>

```python
classification_comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#classification_comment SentinelAutomationRule#classification_comment}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#labels SentinelAutomationRule#labels}.

---

##### `owner_id`<sup>Optional</sup> <a name="owner_id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#owner_id SentinelAutomationRule#owner_id}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.severity"></a>

```python
severity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#severity SentinelAutomationRule#severity}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#status SentinelAutomationRule#status}.

---

### SentinelAutomationRuleActionPlaybook <a name="SentinelAutomationRuleActionPlaybook" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_automation_rule

sentinelAutomationRule.SentinelAutomationRuleActionPlaybook(
  logic_app_id: str,
  order: typing.Union[int, float],
  tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook.property.logicAppId">logic_app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#logic_app_id SentinelAutomationRule#logic_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook.property.order">order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#tenant_id SentinelAutomationRule#tenant_id}. |

---

##### `logic_app_id`<sup>Required</sup> <a name="logic_app_id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook.property.logicAppId"></a>

```python
logic_app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#logic_app_id SentinelAutomationRule#logic_app_id}.

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#tenant_id SentinelAutomationRule#tenant_id}.

---

### SentinelAutomationRuleConfig <a name="SentinelAutomationRuleConfig" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_automation_rule

sentinelAutomationRule.SentinelAutomationRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  log_analytics_workspace_id: str,
  name: str,
  order: typing.Union[int, float],
  action_incident: typing.Union[IResolvable, typing.List[SentinelAutomationRuleActionIncident]] = None,
  action_playbook: typing.Union[IResolvable, typing.List[SentinelAutomationRuleActionPlaybook]] = None,
  condition_json: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  expiration: str = None,
  id: str = None,
  timeouts: SentinelAutomationRuleTimeouts = None,
  triggers_on: str = None,
  triggers_when: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#display_name SentinelAutomationRule#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#log_analytics_workspace_id SentinelAutomationRule#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#name SentinelAutomationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.order">order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.actionIncident">action_incident</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident">SentinelAutomationRuleActionIncident</a>]]</code> | action_incident block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.actionPlaybook">action_playbook</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook">SentinelAutomationRuleActionPlaybook</a>]]</code> | action_playbook block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.conditionJson">condition_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#condition_json SentinelAutomationRule#condition_json}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#enabled SentinelAutomationRule#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.expiration">expiration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#expiration SentinelAutomationRule#expiration}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#id SentinelAutomationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts">SentinelAutomationRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.triggersOn">triggers_on</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#triggers_on SentinelAutomationRule#triggers_on}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.triggersWhen">triggers_when</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#triggers_when SentinelAutomationRule#triggers_when}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#display_name SentinelAutomationRule#display_name}.

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#log_analytics_workspace_id SentinelAutomationRule#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#name SentinelAutomationRule#name}.

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}.

---

##### `action_incident`<sup>Optional</sup> <a name="action_incident" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.actionIncident"></a>

```python
action_incident: typing.Union[IResolvable, typing.List[SentinelAutomationRuleActionIncident]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident">SentinelAutomationRuleActionIncident</a>]]

action_incident block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#action_incident SentinelAutomationRule#action_incident}

---

##### `action_playbook`<sup>Optional</sup> <a name="action_playbook" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.actionPlaybook"></a>

```python
action_playbook: typing.Union[IResolvable, typing.List[SentinelAutomationRuleActionPlaybook]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook">SentinelAutomationRuleActionPlaybook</a>]]

action_playbook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#action_playbook SentinelAutomationRule#action_playbook}

---

##### `condition_json`<sup>Optional</sup> <a name="condition_json" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.conditionJson"></a>

```python
condition_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#condition_json SentinelAutomationRule#condition_json}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#enabled SentinelAutomationRule#enabled}.

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#expiration SentinelAutomationRule#expiration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#id SentinelAutomationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.timeouts"></a>

```python
timeouts: SentinelAutomationRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts">SentinelAutomationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#timeouts SentinelAutomationRule#timeouts}

---

##### `triggers_on`<sup>Optional</sup> <a name="triggers_on" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.triggersOn"></a>

```python
triggers_on: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#triggers_on SentinelAutomationRule#triggers_on}.

---

##### `triggers_when`<sup>Optional</sup> <a name="triggers_when" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleConfig.property.triggersWhen"></a>

```python
triggers_when: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#triggers_when SentinelAutomationRule#triggers_when}.

---

### SentinelAutomationRuleTimeouts <a name="SentinelAutomationRuleTimeouts" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_automation_rule

sentinelAutomationRule.SentinelAutomationRuleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#create SentinelAutomationRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#delete SentinelAutomationRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#read SentinelAutomationRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#update SentinelAutomationRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#create SentinelAutomationRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#delete SentinelAutomationRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#read SentinelAutomationRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/sentinel_automation_rule#update SentinelAutomationRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelAutomationRuleActionIncidentList <a name="SentinelAutomationRuleActionIncidentList" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_automation_rule

sentinelAutomationRule.SentinelAutomationRuleActionIncidentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SentinelAutomationRuleActionIncidentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident">SentinelAutomationRuleActionIncident</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SentinelAutomationRuleActionIncident]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident">SentinelAutomationRuleActionIncident</a>]]

---


### SentinelAutomationRuleActionIncidentOutputReference <a name="SentinelAutomationRuleActionIncidentOutputReference" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_automation_rule

sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetClassification">reset_classification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetClassificationComment">reset_classification_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetOwnerId">reset_owner_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetSeverity">reset_severity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_classification` <a name="reset_classification" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetClassification"></a>

```python
def reset_classification() -> None
```

##### `reset_classification_comment` <a name="reset_classification_comment" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetClassificationComment"></a>

```python
def reset_classification_comment() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_owner_id` <a name="reset_owner_id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetOwnerId"></a>

```python
def reset_owner_id() -> None
```

##### `reset_severity` <a name="reset_severity" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetSeverity"></a>

```python
def reset_severity() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.classificationCommentInput">classification_comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.classificationInput">classification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.orderInput">order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.ownerIdInput">owner_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.classification">classification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.classificationComment">classification_comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident">SentinelAutomationRuleActionIncident</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `classification_comment_input`<sup>Optional</sup> <a name="classification_comment_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.classificationCommentInput"></a>

```python
classification_comment_input: str
```

- *Type:* str

---

##### `classification_input`<sup>Optional</sup> <a name="classification_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.classificationInput"></a>

```python
classification_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.labelsInput"></a>

```python
labels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.orderInput"></a>

```python
order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `owner_id_input`<sup>Optional</sup> <a name="owner_id_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.ownerIdInput"></a>

```python
owner_id_input: str
```

- *Type:* str

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.classification"></a>

```python
classification: str
```

- *Type:* str

---

##### `classification_comment`<sup>Required</sup> <a name="classification_comment" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.classificationComment"></a>

```python
classification_comment: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncidentOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SentinelAutomationRuleActionIncident]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionIncident">SentinelAutomationRuleActionIncident</a>]

---


### SentinelAutomationRuleActionPlaybookList <a name="SentinelAutomationRuleActionPlaybookList" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_automation_rule

sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SentinelAutomationRuleActionPlaybookOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook">SentinelAutomationRuleActionPlaybook</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SentinelAutomationRuleActionPlaybook]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook">SentinelAutomationRuleActionPlaybook</a>]]

---


### SentinelAutomationRuleActionPlaybookOutputReference <a name="SentinelAutomationRuleActionPlaybookOutputReference" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_automation_rule

sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.resetTenantId">reset_tenant_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.logicAppIdInput">logic_app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.orderInput">order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.logicAppId">logic_app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook">SentinelAutomationRuleActionPlaybook</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `logic_app_id_input`<sup>Optional</sup> <a name="logic_app_id_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.logicAppIdInput"></a>

```python
logic_app_id_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.orderInput"></a>

```python
order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `logic_app_id`<sup>Required</sup> <a name="logic_app_id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.logicAppId"></a>

```python
logic_app_id: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybookOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SentinelAutomationRuleActionPlaybook]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleActionPlaybook">SentinelAutomationRuleActionPlaybook</a>]

---


### SentinelAutomationRuleTimeoutsOutputReference <a name="SentinelAutomationRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_automation_rule

sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts">SentinelAutomationRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SentinelAutomationRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelAutomationRule.SentinelAutomationRuleTimeouts">SentinelAutomationRuleTimeouts</a>]

---



