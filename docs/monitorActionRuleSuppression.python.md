# `azurerm_monitor_action_rule_suppression`

Refer to the Terraform Registory for docs: [`azurerm_monitor_action_rule_suppression`](https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression).

# `monitorActionRuleSuppression` Submodule <a name="`monitorActionRuleSuppression` Submodule" id="@cdktf/provider-azurerm.monitorActionRuleSuppression"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorActionRuleSuppression <a name="MonitorActionRuleSuppression" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression azurerm_monitor_action_rule_suppression}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppression(
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
  suppression: MonitorActionRuleSuppressionSuppression,
  condition: MonitorActionRuleSuppressionCondition = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  scope: MonitorActionRuleSuppressionScope = None,
  tags: typing.Mapping[str] = None,
  timeouts: MonitorActionRuleSuppressionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#name MonitorActionRuleSuppression#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#resource_group_name MonitorActionRuleSuppression#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.suppression">suppression</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression">MonitorActionRuleSuppressionSuppression</a></code> | suppression block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition">MonitorActionRuleSuppressionCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#description MonitorActionRuleSuppression#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#enabled MonitorActionRuleSuppression#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#id MonitorActionRuleSuppression#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.scope">scope</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope">MonitorActionRuleSuppressionScope</a></code> | scope block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#tags MonitorActionRuleSuppression#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts">MonitorActionRuleSuppressionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#name MonitorActionRuleSuppression#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#resource_group_name MonitorActionRuleSuppression#resource_group_name}.

---

##### `suppression`<sup>Required</sup> <a name="suppression" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.suppression"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression">MonitorActionRuleSuppressionSuppression</a>

suppression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#suppression MonitorActionRuleSuppression#suppression}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition">MonitorActionRuleSuppressionCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#condition MonitorActionRuleSuppression#condition}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#description MonitorActionRuleSuppression#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#enabled MonitorActionRuleSuppression#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#id MonitorActionRuleSuppression#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.scope"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope">MonitorActionRuleSuppressionScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#scope MonitorActionRuleSuppression#scope}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#tags MonitorActionRuleSuppression#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts">MonitorActionRuleSuppressionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#timeouts MonitorActionRuleSuppression#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putScope">put_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putSuppression">put_suppression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putCondition"></a>

```python
def put_condition(
  alert_context: MonitorActionRuleSuppressionConditionAlertContext = None,
  alert_rule_id: MonitorActionRuleSuppressionConditionAlertRuleId = None,
  description: MonitorActionRuleSuppressionConditionDescription = None,
  monitor: MonitorActionRuleSuppressionConditionMonitor = None,
  monitor_service: MonitorActionRuleSuppressionConditionMonitorService = None,
  severity: MonitorActionRuleSuppressionConditionSeverity = None,
  target_resource_type: MonitorActionRuleSuppressionConditionTargetResourceType = None
) -> None
```

###### `alert_context`<sup>Optional</sup> <a name="alert_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putCondition.parameter.alertContext"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext">MonitorActionRuleSuppressionConditionAlertContext</a>

alert_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#alert_context MonitorActionRuleSuppression#alert_context}

---

###### `alert_rule_id`<sup>Optional</sup> <a name="alert_rule_id" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putCondition.parameter.alertRuleId"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId">MonitorActionRuleSuppressionConditionAlertRuleId</a>

alert_rule_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#alert_rule_id MonitorActionRuleSuppression#alert_rule_id}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putCondition.parameter.description"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription">MonitorActionRuleSuppressionConditionDescription</a>

description block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#description MonitorActionRuleSuppression#description}

---

###### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putCondition.parameter.monitor"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor">MonitorActionRuleSuppressionConditionMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#monitor MonitorActionRuleSuppression#monitor}

---

###### `monitor_service`<sup>Optional</sup> <a name="monitor_service" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putCondition.parameter.monitorService"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService">MonitorActionRuleSuppressionConditionMonitorService</a>

monitor_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#monitor_service MonitorActionRuleSuppression#monitor_service}

---

###### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putCondition.parameter.severity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity">MonitorActionRuleSuppressionConditionSeverity</a>

severity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#severity MonitorActionRuleSuppression#severity}

---

###### `target_resource_type`<sup>Optional</sup> <a name="target_resource_type" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putCondition.parameter.targetResourceType"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType">MonitorActionRuleSuppressionConditionTargetResourceType</a>

target_resource_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#target_resource_type MonitorActionRuleSuppression#target_resource_type}

---

##### `put_scope` <a name="put_scope" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putScope"></a>

```python
def put_scope(
  resource_ids: typing.List[str],
  type: str
) -> None
```

###### `resource_ids`<sup>Required</sup> <a name="resource_ids" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putScope.parameter.resourceIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#resource_ids MonitorActionRuleSuppression#resource_ids}.

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putScope.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#type MonitorActionRuleSuppression#type}.

---

##### `put_suppression` <a name="put_suppression" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putSuppression"></a>

```python
def put_suppression(
  recurrence_type: str,
  schedule: MonitorActionRuleSuppressionSuppressionSchedule = None
) -> None
```

###### `recurrence_type`<sup>Required</sup> <a name="recurrence_type" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putSuppression.parameter.recurrenceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#recurrence_type MonitorActionRuleSuppression#recurrence_type}.

---

###### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putSuppression.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule">MonitorActionRuleSuppressionSuppressionSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#schedule MonitorActionRuleSuppression#schedule}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#create MonitorActionRuleSuppression#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#delete MonitorActionRuleSuppression#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#read MonitorActionRuleSuppression#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#update MonitorActionRuleSuppression#update}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppression.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppression.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppression.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference">MonitorActionRuleSuppressionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference">MonitorActionRuleSuppressionScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.suppression">suppression</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference">MonitorActionRuleSuppressionSuppressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference">MonitorActionRuleSuppressionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition">MonitorActionRuleSuppressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.scopeInput">scope_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope">MonitorActionRuleSuppressionScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.suppressionInput">suppression_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression">MonitorActionRuleSuppressionSuppression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts">MonitorActionRuleSuppressionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.condition"></a>

```python
condition: MonitorActionRuleSuppressionConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference">MonitorActionRuleSuppressionConditionOutputReference</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.scope"></a>

```python
scope: MonitorActionRuleSuppressionScopeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference">MonitorActionRuleSuppressionScopeOutputReference</a>

---

##### `suppression`<sup>Required</sup> <a name="suppression" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.suppression"></a>

```python
suppression: MonitorActionRuleSuppressionSuppressionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference">MonitorActionRuleSuppressionSuppressionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.timeouts"></a>

```python
timeouts: MonitorActionRuleSuppressionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference">MonitorActionRuleSuppressionTimeoutsOutputReference</a>

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.conditionInput"></a>

```python
condition_input: MonitorActionRuleSuppressionCondition
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition">MonitorActionRuleSuppressionCondition</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.scopeInput"></a>

```python
scope_input: MonitorActionRuleSuppressionScope
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope">MonitorActionRuleSuppressionScope</a>

---

##### `suppression_input`<sup>Optional</sup> <a name="suppression_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.suppressionInput"></a>

```python
suppression_input: MonitorActionRuleSuppressionSuppression
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression">MonitorActionRuleSuppressionSuppression</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MonitorActionRuleSuppressionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts">MonitorActionRuleSuppressionTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppression.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorActionRuleSuppressionCondition <a name="MonitorActionRuleSuppressionCondition" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition(
  alert_context: MonitorActionRuleSuppressionConditionAlertContext = None,
  alert_rule_id: MonitorActionRuleSuppressionConditionAlertRuleId = None,
  description: MonitorActionRuleSuppressionConditionDescription = None,
  monitor: MonitorActionRuleSuppressionConditionMonitor = None,
  monitor_service: MonitorActionRuleSuppressionConditionMonitorService = None,
  severity: MonitorActionRuleSuppressionConditionSeverity = None,
  target_resource_type: MonitorActionRuleSuppressionConditionTargetResourceType = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.alertContext">alert_context</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext">MonitorActionRuleSuppressionConditionAlertContext</a></code> | alert_context block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.alertRuleId">alert_rule_id</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId">MonitorActionRuleSuppressionConditionAlertRuleId</a></code> | alert_rule_id block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.description">description</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription">MonitorActionRuleSuppressionConditionDescription</a></code> | description block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor">MonitorActionRuleSuppressionConditionMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.monitorService">monitor_service</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService">MonitorActionRuleSuppressionConditionMonitorService</a></code> | monitor_service block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.severity">severity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity">MonitorActionRuleSuppressionConditionSeverity</a></code> | severity block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.targetResourceType">target_resource_type</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType">MonitorActionRuleSuppressionConditionTargetResourceType</a></code> | target_resource_type block. |

---

##### `alert_context`<sup>Optional</sup> <a name="alert_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.alertContext"></a>

```python
alert_context: MonitorActionRuleSuppressionConditionAlertContext
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext">MonitorActionRuleSuppressionConditionAlertContext</a>

alert_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#alert_context MonitorActionRuleSuppression#alert_context}

---

##### `alert_rule_id`<sup>Optional</sup> <a name="alert_rule_id" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.alertRuleId"></a>

```python
alert_rule_id: MonitorActionRuleSuppressionConditionAlertRuleId
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId">MonitorActionRuleSuppressionConditionAlertRuleId</a>

alert_rule_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#alert_rule_id MonitorActionRuleSuppression#alert_rule_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.description"></a>

```python
description: MonitorActionRuleSuppressionConditionDescription
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription">MonitorActionRuleSuppressionConditionDescription</a>

description block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#description MonitorActionRuleSuppression#description}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.monitor"></a>

```python
monitor: MonitorActionRuleSuppressionConditionMonitor
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor">MonitorActionRuleSuppressionConditionMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#monitor MonitorActionRuleSuppression#monitor}

---

##### `monitor_service`<sup>Optional</sup> <a name="monitor_service" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.monitorService"></a>

```python
monitor_service: MonitorActionRuleSuppressionConditionMonitorService
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService">MonitorActionRuleSuppressionConditionMonitorService</a>

monitor_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#monitor_service MonitorActionRuleSuppression#monitor_service}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.severity"></a>

```python
severity: MonitorActionRuleSuppressionConditionSeverity
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity">MonitorActionRuleSuppressionConditionSeverity</a>

severity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#severity MonitorActionRuleSuppression#severity}

---

##### `target_resource_type`<sup>Optional</sup> <a name="target_resource_type" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition.property.targetResourceType"></a>

```python
target_resource_type: MonitorActionRuleSuppressionConditionTargetResourceType
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType">MonitorActionRuleSuppressionConditionTargetResourceType</a>

target_resource_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#target_resource_type MonitorActionRuleSuppression#target_resource_type}

---

### MonitorActionRuleSuppressionConditionAlertContext <a name="MonitorActionRuleSuppressionConditionAlertContext" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext(
  operator: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}.

---

### MonitorActionRuleSuppressionConditionAlertRuleId <a name="MonitorActionRuleSuppressionConditionAlertRuleId" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId(
  operator: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}.

---

### MonitorActionRuleSuppressionConditionDescription <a name="MonitorActionRuleSuppressionConditionDescription" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription(
  operator: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}.

---

### MonitorActionRuleSuppressionConditionMonitor <a name="MonitorActionRuleSuppressionConditionMonitor" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor(
  operator: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}.

---

### MonitorActionRuleSuppressionConditionMonitorService <a name="MonitorActionRuleSuppressionConditionMonitorService" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService(
  operator: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}.

---

### MonitorActionRuleSuppressionConditionSeverity <a name="MonitorActionRuleSuppressionConditionSeverity" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity(
  operator: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}.

---

### MonitorActionRuleSuppressionConditionTargetResourceType <a name="MonitorActionRuleSuppressionConditionTargetResourceType" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType(
  operator: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}.

---

### MonitorActionRuleSuppressionConfig <a name="MonitorActionRuleSuppressionConfig" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  suppression: MonitorActionRuleSuppressionSuppression,
  condition: MonitorActionRuleSuppressionCondition = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  scope: MonitorActionRuleSuppressionScope = None,
  tags: typing.Mapping[str] = None,
  timeouts: MonitorActionRuleSuppressionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#name MonitorActionRuleSuppression#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#resource_group_name MonitorActionRuleSuppression#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.suppression">suppression</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression">MonitorActionRuleSuppressionSuppression</a></code> | suppression block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition">MonitorActionRuleSuppressionCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#description MonitorActionRuleSuppression#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#enabled MonitorActionRuleSuppression#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#id MonitorActionRuleSuppression#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope">MonitorActionRuleSuppressionScope</a></code> | scope block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#tags MonitorActionRuleSuppression#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts">MonitorActionRuleSuppressionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#name MonitorActionRuleSuppression#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#resource_group_name MonitorActionRuleSuppression#resource_group_name}.

---

##### `suppression`<sup>Required</sup> <a name="suppression" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.suppression"></a>

```python
suppression: MonitorActionRuleSuppressionSuppression
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression">MonitorActionRuleSuppressionSuppression</a>

suppression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#suppression MonitorActionRuleSuppression#suppression}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.condition"></a>

```python
condition: MonitorActionRuleSuppressionCondition
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition">MonitorActionRuleSuppressionCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#condition MonitorActionRuleSuppression#condition}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#description MonitorActionRuleSuppression#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#enabled MonitorActionRuleSuppression#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#id MonitorActionRuleSuppression#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.scope"></a>

```python
scope: MonitorActionRuleSuppressionScope
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope">MonitorActionRuleSuppressionScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#scope MonitorActionRuleSuppression#scope}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#tags MonitorActionRuleSuppression#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConfig.property.timeouts"></a>

```python
timeouts: MonitorActionRuleSuppressionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts">MonitorActionRuleSuppressionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#timeouts MonitorActionRuleSuppression#timeouts}

---

### MonitorActionRuleSuppressionScope <a name="MonitorActionRuleSuppressionScope" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppressionScope(
  resource_ids: typing.List[str],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope.property.resourceIds">resource_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#resource_ids MonitorActionRuleSuppression#resource_ids}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#type MonitorActionRuleSuppression#type}. |

---

##### `resource_ids`<sup>Required</sup> <a name="resource_ids" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope.property.resourceIds"></a>

```python
resource_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#resource_ids MonitorActionRuleSuppression#resource_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#type MonitorActionRuleSuppression#type}.

---

### MonitorActionRuleSuppressionSuppression <a name="MonitorActionRuleSuppressionSuppression" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression(
  recurrence_type: str,
  schedule: MonitorActionRuleSuppressionSuppressionSchedule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression.property.recurrenceType">recurrence_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#recurrence_type MonitorActionRuleSuppression#recurrence_type}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule">MonitorActionRuleSuppressionSuppressionSchedule</a></code> | schedule block. |

---

##### `recurrence_type`<sup>Required</sup> <a name="recurrence_type" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression.property.recurrenceType"></a>

```python
recurrence_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#recurrence_type MonitorActionRuleSuppression#recurrence_type}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression.property.schedule"></a>

```python
schedule: MonitorActionRuleSuppressionSuppressionSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule">MonitorActionRuleSuppressionSuppressionSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#schedule MonitorActionRuleSuppression#schedule}

---

### MonitorActionRuleSuppressionSuppressionSchedule <a name="MonitorActionRuleSuppressionSuppressionSchedule" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule(
  end_date_utc: str,
  start_date_utc: str,
  recurrence_monthly: typing.List[typing.Union[int, float]] = None,
  recurrence_weekly: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule.property.endDateUtc">end_date_utc</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#end_date_utc MonitorActionRuleSuppression#end_date_utc}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule.property.startDateUtc">start_date_utc</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#start_date_utc MonitorActionRuleSuppression#start_date_utc}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule.property.recurrenceMonthly">recurrence_monthly</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#recurrence_monthly MonitorActionRuleSuppression#recurrence_monthly}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule.property.recurrenceWeekly">recurrence_weekly</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#recurrence_weekly MonitorActionRuleSuppression#recurrence_weekly}. |

---

##### `end_date_utc`<sup>Required</sup> <a name="end_date_utc" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule.property.endDateUtc"></a>

```python
end_date_utc: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#end_date_utc MonitorActionRuleSuppression#end_date_utc}.

---

##### `start_date_utc`<sup>Required</sup> <a name="start_date_utc" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule.property.startDateUtc"></a>

```python
start_date_utc: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#start_date_utc MonitorActionRuleSuppression#start_date_utc}.

---

##### `recurrence_monthly`<sup>Optional</sup> <a name="recurrence_monthly" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule.property.recurrenceMonthly"></a>

```python
recurrence_monthly: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#recurrence_monthly MonitorActionRuleSuppression#recurrence_monthly}.

---

##### `recurrence_weekly`<sup>Optional</sup> <a name="recurrence_weekly" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule.property.recurrenceWeekly"></a>

```python
recurrence_weekly: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#recurrence_weekly MonitorActionRuleSuppression#recurrence_weekly}.

---

### MonitorActionRuleSuppressionTimeouts <a name="MonitorActionRuleSuppressionTimeouts" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#create MonitorActionRuleSuppression#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#delete MonitorActionRuleSuppression#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#read MonitorActionRuleSuppression#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#update MonitorActionRuleSuppression#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#create MonitorActionRuleSuppression#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#delete MonitorActionRuleSuppression#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#read MonitorActionRuleSuppression#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#update MonitorActionRuleSuppression#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorActionRuleSuppressionConditionAlertContextOutputReference <a name="MonitorActionRuleSuppressionConditionAlertContextOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext">MonitorActionRuleSuppressionConditionAlertContext</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference.property.internalValue"></a>

```python
internal_value: MonitorActionRuleSuppressionConditionAlertContext
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext">MonitorActionRuleSuppressionConditionAlertContext</a>

---


### MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference <a name="MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId">MonitorActionRuleSuppressionConditionAlertRuleId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference.property.internalValue"></a>

```python
internal_value: MonitorActionRuleSuppressionConditionAlertRuleId
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId">MonitorActionRuleSuppressionConditionAlertRuleId</a>

---


### MonitorActionRuleSuppressionConditionDescriptionOutputReference <a name="MonitorActionRuleSuppressionConditionDescriptionOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription">MonitorActionRuleSuppressionConditionDescription</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference.property.internalValue"></a>

```python
internal_value: MonitorActionRuleSuppressionConditionDescription
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription">MonitorActionRuleSuppressionConditionDescription</a>

---


### MonitorActionRuleSuppressionConditionMonitorOutputReference <a name="MonitorActionRuleSuppressionConditionMonitorOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor">MonitorActionRuleSuppressionConditionMonitor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference.property.internalValue"></a>

```python
internal_value: MonitorActionRuleSuppressionConditionMonitor
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor">MonitorActionRuleSuppressionConditionMonitor</a>

---


### MonitorActionRuleSuppressionConditionMonitorServiceOutputReference <a name="MonitorActionRuleSuppressionConditionMonitorServiceOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService">MonitorActionRuleSuppressionConditionMonitorService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference.property.internalValue"></a>

```python
internal_value: MonitorActionRuleSuppressionConditionMonitorService
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService">MonitorActionRuleSuppressionConditionMonitorService</a>

---


### MonitorActionRuleSuppressionConditionOutputReference <a name="MonitorActionRuleSuppressionConditionOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putAlertContext">put_alert_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putAlertRuleId">put_alert_rule_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putDescription">put_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putMonitor">put_monitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putMonitorService">put_monitor_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putSeverity">put_severity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putTargetResourceType">put_target_resource_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetAlertContext">reset_alert_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetAlertRuleId">reset_alert_rule_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetMonitor">reset_monitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetMonitorService">reset_monitor_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetSeverity">reset_severity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetTargetResourceType">reset_target_resource_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_alert_context` <a name="put_alert_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putAlertContext"></a>

```python
def put_alert_context(
  operator: str,
  values: typing.List[str]
) -> None
```

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putAlertContext.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}.

---

###### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putAlertContext.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}.

---

##### `put_alert_rule_id` <a name="put_alert_rule_id" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putAlertRuleId"></a>

```python
def put_alert_rule_id(
  operator: str,
  values: typing.List[str]
) -> None
```

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putAlertRuleId.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}.

---

###### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putAlertRuleId.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}.

---

##### `put_description` <a name="put_description" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putDescription"></a>

```python
def put_description(
  operator: str,
  values: typing.List[str]
) -> None
```

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putDescription.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}.

---

###### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putDescription.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}.

---

##### `put_monitor` <a name="put_monitor" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putMonitor"></a>

```python
def put_monitor(
  operator: str,
  values: typing.List[str]
) -> None
```

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putMonitor.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}.

---

###### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putMonitor.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}.

---

##### `put_monitor_service` <a name="put_monitor_service" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putMonitorService"></a>

```python
def put_monitor_service(
  operator: str,
  values: typing.List[str]
) -> None
```

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putMonitorService.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}.

---

###### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putMonitorService.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}.

---

##### `put_severity` <a name="put_severity" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putSeverity"></a>

```python
def put_severity(
  operator: str,
  values: typing.List[str]
) -> None
```

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putSeverity.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}.

---

###### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putSeverity.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}.

---

##### `put_target_resource_type` <a name="put_target_resource_type" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putTargetResourceType"></a>

```python
def put_target_resource_type(
  operator: str,
  values: typing.List[str]
) -> None
```

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putTargetResourceType.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#operator MonitorActionRuleSuppression#operator}.

---

###### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.putTargetResourceType.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#values MonitorActionRuleSuppression#values}.

---

##### `reset_alert_context` <a name="reset_alert_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetAlertContext"></a>

```python
def reset_alert_context() -> None
```

##### `reset_alert_rule_id` <a name="reset_alert_rule_id" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetAlertRuleId"></a>

```python
def reset_alert_rule_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_monitor` <a name="reset_monitor" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetMonitor"></a>

```python
def reset_monitor() -> None
```

##### `reset_monitor_service` <a name="reset_monitor_service" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetMonitorService"></a>

```python
def reset_monitor_service() -> None
```

##### `reset_severity` <a name="reset_severity" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetSeverity"></a>

```python
def reset_severity() -> None
```

##### `reset_target_resource_type` <a name="reset_target_resource_type" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.resetTargetResourceType"></a>

```python
def reset_target_resource_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.alertContext">alert_context</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference">MonitorActionRuleSuppressionConditionAlertContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.alertRuleId">alert_rule_id</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference">MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.description">description</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference">MonitorActionRuleSuppressionConditionDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference">MonitorActionRuleSuppressionConditionMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.monitorService">monitor_service</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference">MonitorActionRuleSuppressionConditionMonitorServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.severity">severity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference">MonitorActionRuleSuppressionConditionSeverityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.targetResourceType">target_resource_type</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference">MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.alertContextInput">alert_context_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext">MonitorActionRuleSuppressionConditionAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.alertRuleIdInput">alert_rule_id_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId">MonitorActionRuleSuppressionConditionAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.descriptionInput">description_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription">MonitorActionRuleSuppressionConditionDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.monitorInput">monitor_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor">MonitorActionRuleSuppressionConditionMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.monitorServiceInput">monitor_service_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService">MonitorActionRuleSuppressionConditionMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.severityInput">severity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity">MonitorActionRuleSuppressionConditionSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.targetResourceTypeInput">target_resource_type_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType">MonitorActionRuleSuppressionConditionTargetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition">MonitorActionRuleSuppressionCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alert_context`<sup>Required</sup> <a name="alert_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.alertContext"></a>

```python
alert_context: MonitorActionRuleSuppressionConditionAlertContextOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContextOutputReference">MonitorActionRuleSuppressionConditionAlertContextOutputReference</a>

---

##### `alert_rule_id`<sup>Required</sup> <a name="alert_rule_id" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.alertRuleId"></a>

```python
alert_rule_id: MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference">MonitorActionRuleSuppressionConditionAlertRuleIdOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.description"></a>

```python
description: MonitorActionRuleSuppressionConditionDescriptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescriptionOutputReference">MonitorActionRuleSuppressionConditionDescriptionOutputReference</a>

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.monitor"></a>

```python
monitor: MonitorActionRuleSuppressionConditionMonitorOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorOutputReference">MonitorActionRuleSuppressionConditionMonitorOutputReference</a>

---

##### `monitor_service`<sup>Required</sup> <a name="monitor_service" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.monitorService"></a>

```python
monitor_service: MonitorActionRuleSuppressionConditionMonitorServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorServiceOutputReference">MonitorActionRuleSuppressionConditionMonitorServiceOutputReference</a>

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.severity"></a>

```python
severity: MonitorActionRuleSuppressionConditionSeverityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference">MonitorActionRuleSuppressionConditionSeverityOutputReference</a>

---

##### `target_resource_type`<sup>Required</sup> <a name="target_resource_type" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.targetResourceType"></a>

```python
target_resource_type: MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference">MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference</a>

---

##### `alert_context_input`<sup>Optional</sup> <a name="alert_context_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.alertContextInput"></a>

```python
alert_context_input: MonitorActionRuleSuppressionConditionAlertContext
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertContext">MonitorActionRuleSuppressionConditionAlertContext</a>

---

##### `alert_rule_id_input`<sup>Optional</sup> <a name="alert_rule_id_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.alertRuleIdInput"></a>

```python
alert_rule_id_input: MonitorActionRuleSuppressionConditionAlertRuleId
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionAlertRuleId">MonitorActionRuleSuppressionConditionAlertRuleId</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.descriptionInput"></a>

```python
description_input: MonitorActionRuleSuppressionConditionDescription
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionDescription">MonitorActionRuleSuppressionConditionDescription</a>

---

##### `monitor_input`<sup>Optional</sup> <a name="monitor_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.monitorInput"></a>

```python
monitor_input: MonitorActionRuleSuppressionConditionMonitor
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitor">MonitorActionRuleSuppressionConditionMonitor</a>

---

##### `monitor_service_input`<sup>Optional</sup> <a name="monitor_service_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.monitorServiceInput"></a>

```python
monitor_service_input: MonitorActionRuleSuppressionConditionMonitorService
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionMonitorService">MonitorActionRuleSuppressionConditionMonitorService</a>

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.severityInput"></a>

```python
severity_input: MonitorActionRuleSuppressionConditionSeverity
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity">MonitorActionRuleSuppressionConditionSeverity</a>

---

##### `target_resource_type_input`<sup>Optional</sup> <a name="target_resource_type_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.targetResourceTypeInput"></a>

```python
target_resource_type_input: MonitorActionRuleSuppressionConditionTargetResourceType
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType">MonitorActionRuleSuppressionConditionTargetResourceType</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionOutputReference.property.internalValue"></a>

```python
internal_value: MonitorActionRuleSuppressionCondition
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionCondition">MonitorActionRuleSuppressionCondition</a>

---


### MonitorActionRuleSuppressionConditionSeverityOutputReference <a name="MonitorActionRuleSuppressionConditionSeverityOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity">MonitorActionRuleSuppressionConditionSeverity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverityOutputReference.property.internalValue"></a>

```python
internal_value: MonitorActionRuleSuppressionConditionSeverity
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionSeverity">MonitorActionRuleSuppressionConditionSeverity</a>

---


### MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference <a name="MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType">MonitorActionRuleSuppressionConditionTargetResourceType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceTypeOutputReference.property.internalValue"></a>

```python
internal_value: MonitorActionRuleSuppressionConditionTargetResourceType
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionConditionTargetResourceType">MonitorActionRuleSuppressionConditionTargetResourceType</a>

---


### MonitorActionRuleSuppressionScopeOutputReference <a name="MonitorActionRuleSuppressionScopeOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.resourceIdsInput">resource_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.resourceIds">resource_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope">MonitorActionRuleSuppressionScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_ids_input`<sup>Optional</sup> <a name="resource_ids_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.resourceIdsInput"></a>

```python
resource_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `resource_ids`<sup>Required</sup> <a name="resource_ids" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.resourceIds"></a>

```python
resource_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScopeOutputReference.property.internalValue"></a>

```python
internal_value: MonitorActionRuleSuppressionScope
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionScope">MonitorActionRuleSuppressionScope</a>

---


### MonitorActionRuleSuppressionSuppressionOutputReference <a name="MonitorActionRuleSuppressionSuppressionOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.resetSchedule">reset_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.putSchedule"></a>

```python
def put_schedule(
  end_date_utc: str,
  start_date_utc: str,
  recurrence_monthly: typing.List[typing.Union[int, float]] = None,
  recurrence_weekly: typing.List[str] = None
) -> None
```

###### `end_date_utc`<sup>Required</sup> <a name="end_date_utc" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.putSchedule.parameter.endDateUtc"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#end_date_utc MonitorActionRuleSuppression#end_date_utc}.

---

###### `start_date_utc`<sup>Required</sup> <a name="start_date_utc" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.putSchedule.parameter.startDateUtc"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#start_date_utc MonitorActionRuleSuppression#start_date_utc}.

---

###### `recurrence_monthly`<sup>Optional</sup> <a name="recurrence_monthly" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.putSchedule.parameter.recurrenceMonthly"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#recurrence_monthly MonitorActionRuleSuppression#recurrence_monthly}.

---

###### `recurrence_weekly`<sup>Optional</sup> <a name="recurrence_weekly" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.putSchedule.parameter.recurrenceWeekly"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/monitor_action_rule_suppression#recurrence_weekly MonitorActionRuleSuppression#recurrence_weekly}.

---

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.resetSchedule"></a>

```python
def reset_schedule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference">MonitorActionRuleSuppressionSuppressionScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.recurrenceTypeInput">recurrence_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.scheduleInput">schedule_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule">MonitorActionRuleSuppressionSuppressionSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.recurrenceType">recurrence_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression">MonitorActionRuleSuppressionSuppression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.schedule"></a>

```python
schedule: MonitorActionRuleSuppressionSuppressionScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference">MonitorActionRuleSuppressionSuppressionScheduleOutputReference</a>

---

##### `recurrence_type_input`<sup>Optional</sup> <a name="recurrence_type_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.recurrenceTypeInput"></a>

```python
recurrence_type_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.scheduleInput"></a>

```python
schedule_input: MonitorActionRuleSuppressionSuppressionSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule">MonitorActionRuleSuppressionSuppressionSchedule</a>

---

##### `recurrence_type`<sup>Required</sup> <a name="recurrence_type" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.recurrenceType"></a>

```python
recurrence_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionOutputReference.property.internalValue"></a>

```python
internal_value: MonitorActionRuleSuppressionSuppression
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppression">MonitorActionRuleSuppressionSuppression</a>

---


### MonitorActionRuleSuppressionSuppressionScheduleOutputReference <a name="MonitorActionRuleSuppressionSuppressionScheduleOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.resetRecurrenceMonthly">reset_recurrence_monthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.resetRecurrenceWeekly">reset_recurrence_weekly</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_recurrence_monthly` <a name="reset_recurrence_monthly" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.resetRecurrenceMonthly"></a>

```python
def reset_recurrence_monthly() -> None
```

##### `reset_recurrence_weekly` <a name="reset_recurrence_weekly" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.resetRecurrenceWeekly"></a>

```python
def reset_recurrence_weekly() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.endDateUtcInput">end_date_utc_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.recurrenceMonthlyInput">recurrence_monthly_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.recurrenceWeeklyInput">recurrence_weekly_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.startDateUtcInput">start_date_utc_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.endDateUtc">end_date_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.recurrenceMonthly">recurrence_monthly</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.recurrenceWeekly">recurrence_weekly</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.startDateUtc">start_date_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule">MonitorActionRuleSuppressionSuppressionSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_date_utc_input`<sup>Optional</sup> <a name="end_date_utc_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.endDateUtcInput"></a>

```python
end_date_utc_input: str
```

- *Type:* str

---

##### `recurrence_monthly_input`<sup>Optional</sup> <a name="recurrence_monthly_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.recurrenceMonthlyInput"></a>

```python
recurrence_monthly_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `recurrence_weekly_input`<sup>Optional</sup> <a name="recurrence_weekly_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.recurrenceWeeklyInput"></a>

```python
recurrence_weekly_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `start_date_utc_input`<sup>Optional</sup> <a name="start_date_utc_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.startDateUtcInput"></a>

```python
start_date_utc_input: str
```

- *Type:* str

---

##### `end_date_utc`<sup>Required</sup> <a name="end_date_utc" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.endDateUtc"></a>

```python
end_date_utc: str
```

- *Type:* str

---

##### `recurrence_monthly`<sup>Required</sup> <a name="recurrence_monthly" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.recurrenceMonthly"></a>

```python
recurrence_monthly: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `recurrence_weekly`<sup>Required</sup> <a name="recurrence_weekly" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.recurrenceWeekly"></a>

```python
recurrence_weekly: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `start_date_utc`<sup>Required</sup> <a name="start_date_utc" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.startDateUtc"></a>

```python
start_date_utc: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionScheduleOutputReference.property.internalValue"></a>

```python
internal_value: MonitorActionRuleSuppressionSuppressionSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionSuppressionSchedule">MonitorActionRuleSuppressionSuppressionSchedule</a>

---


### MonitorActionRuleSuppressionTimeoutsOutputReference <a name="MonitorActionRuleSuppressionTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_rule_suppression

monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts">MonitorActionRuleSuppressionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorActionRuleSuppressionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionRuleSuppression.MonitorActionRuleSuppressionTimeouts">MonitorActionRuleSuppressionTimeouts</a>]

---



