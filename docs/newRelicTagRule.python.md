# `newRelicTagRule` Submodule <a name="`newRelicTagRule` Submodule" id="@cdktf/provider-azurerm.newRelicTagRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NewRelicTagRule <a name="NewRelicTagRule" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule azurerm_new_relic_tag_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_tag_rule

newRelicTagRule.NewRelicTagRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  monitor_id: str,
  activity_log_enabled: typing.Union[bool, IResolvable] = None,
  azure_active_directory_log_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  log_tag_filter: typing.Union[IResolvable, typing.List[NewRelicTagRuleLogTagFilter]] = None,
  metric_enabled: typing.Union[bool, IResolvable] = None,
  metric_tag_filter: typing.Union[IResolvable, typing.List[NewRelicTagRuleMetricTagFilter]] = None,
  subscription_log_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: NewRelicTagRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.monitorId">monitor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#monitor_id NewRelicTagRule#monitor_id}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.activityLogEnabled">activity_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#activity_log_enabled NewRelicTagRule#activity_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.azureActiveDirectoryLogEnabled">azure_active_directory_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#azure_active_directory_log_enabled NewRelicTagRule#azure_active_directory_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#id NewRelicTagRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.logTagFilter">log_tag_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>]]</code> | log_tag_filter block. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.metricEnabled">metric_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#metric_enabled NewRelicTagRule#metric_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.metricTagFilter">metric_tag_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>]]</code> | metric_tag_filter block. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.subscriptionLogEnabled">subscription_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#subscription_log_enabled NewRelicTagRule#subscription_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `monitor_id`<sup>Required</sup> <a name="monitor_id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.monitorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#monitor_id NewRelicTagRule#monitor_id}.

---

##### `activity_log_enabled`<sup>Optional</sup> <a name="activity_log_enabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.activityLogEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#activity_log_enabled NewRelicTagRule#activity_log_enabled}.

---

##### `azure_active_directory_log_enabled`<sup>Optional</sup> <a name="azure_active_directory_log_enabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.azureActiveDirectoryLogEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#azure_active_directory_log_enabled NewRelicTagRule#azure_active_directory_log_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#id NewRelicTagRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_tag_filter`<sup>Optional</sup> <a name="log_tag_filter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.logTagFilter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>]]

log_tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#log_tag_filter NewRelicTagRule#log_tag_filter}

---

##### `metric_enabled`<sup>Optional</sup> <a name="metric_enabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.metricEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#metric_enabled NewRelicTagRule#metric_enabled}.

---

##### `metric_tag_filter`<sup>Optional</sup> <a name="metric_tag_filter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.metricTagFilter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>]]

metric_tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#metric_tag_filter NewRelicTagRule#metric_tag_filter}

---

##### `subscription_log_enabled`<sup>Optional</sup> <a name="subscription_log_enabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.subscriptionLogEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#subscription_log_enabled NewRelicTagRule#subscription_log_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#timeouts NewRelicTagRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putLogTagFilter">put_log_tag_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putMetricTagFilter">put_metric_tag_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetActivityLogEnabled">reset_activity_log_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetAzureActiveDirectoryLogEnabled">reset_azure_active_directory_log_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetLogTagFilter">reset_log_tag_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetMetricEnabled">reset_metric_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetMetricTagFilter">reset_metric_tag_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetSubscriptionLogEnabled">reset_subscription_log_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_log_tag_filter` <a name="put_log_tag_filter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putLogTagFilter"></a>

```python
def put_log_tag_filter(
  value: typing.Union[IResolvable, typing.List[NewRelicTagRuleLogTagFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putLogTagFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>]]

---

##### `put_metric_tag_filter` <a name="put_metric_tag_filter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putMetricTagFilter"></a>

```python
def put_metric_tag_filter(
  value: typing.Union[IResolvable, typing.List[NewRelicTagRuleMetricTagFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putMetricTagFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#create NewRelicTagRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#delete NewRelicTagRule#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#read NewRelicTagRule#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#update NewRelicTagRule#update}.

---

##### `reset_activity_log_enabled` <a name="reset_activity_log_enabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetActivityLogEnabled"></a>

```python
def reset_activity_log_enabled() -> None
```

##### `reset_azure_active_directory_log_enabled` <a name="reset_azure_active_directory_log_enabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetAzureActiveDirectoryLogEnabled"></a>

```python
def reset_azure_active_directory_log_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log_tag_filter` <a name="reset_log_tag_filter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetLogTagFilter"></a>

```python
def reset_log_tag_filter() -> None
```

##### `reset_metric_enabled` <a name="reset_metric_enabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetMetricEnabled"></a>

```python
def reset_metric_enabled() -> None
```

##### `reset_metric_tag_filter` <a name="reset_metric_tag_filter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetMetricTagFilter"></a>

```python
def reset_metric_tag_filter() -> None
```

##### `reset_subscription_log_enabled` <a name="reset_subscription_log_enabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetSubscriptionLogEnabled"></a>

```python
def reset_subscription_log_enabled() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NewRelicTagRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_tag_rule

newRelicTagRule.NewRelicTagRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_tag_rule

newRelicTagRule.NewRelicTagRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_tag_rule

newRelicTagRule.NewRelicTagRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_tag_rule

newRelicTagRule.NewRelicTagRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NewRelicTagRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NewRelicTagRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NewRelicTagRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NewRelicTagRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.logTagFilter">log_tag_filter</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList">NewRelicTagRuleLogTagFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricTagFilter">metric_tag_filter</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList">NewRelicTagRuleMetricTagFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference">NewRelicTagRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.activityLogEnabledInput">activity_log_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.azureActiveDirectoryLogEnabledInput">azure_active_directory_log_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.logTagFilterInput">log_tag_filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricEnabledInput">metric_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricTagFilterInput">metric_tag_filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.monitorIdInput">monitor_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.subscriptionLogEnabledInput">subscription_log_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.activityLogEnabled">activity_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.azureActiveDirectoryLogEnabled">azure_active_directory_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricEnabled">metric_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.monitorId">monitor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.subscriptionLogEnabled">subscription_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log_tag_filter`<sup>Required</sup> <a name="log_tag_filter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.logTagFilter"></a>

```python
log_tag_filter: NewRelicTagRuleLogTagFilterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList">NewRelicTagRuleLogTagFilterList</a>

---

##### `metric_tag_filter`<sup>Required</sup> <a name="metric_tag_filter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricTagFilter"></a>

```python
metric_tag_filter: NewRelicTagRuleMetricTagFilterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList">NewRelicTagRuleMetricTagFilterList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.timeouts"></a>

```python
timeouts: NewRelicTagRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference">NewRelicTagRuleTimeoutsOutputReference</a>

---

##### `activity_log_enabled_input`<sup>Optional</sup> <a name="activity_log_enabled_input" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.activityLogEnabledInput"></a>

```python
activity_log_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `azure_active_directory_log_enabled_input`<sup>Optional</sup> <a name="azure_active_directory_log_enabled_input" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.azureActiveDirectoryLogEnabledInput"></a>

```python
azure_active_directory_log_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_tag_filter_input`<sup>Optional</sup> <a name="log_tag_filter_input" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.logTagFilterInput"></a>

```python
log_tag_filter_input: typing.Union[IResolvable, typing.List[NewRelicTagRuleLogTagFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>]]

---

##### `metric_enabled_input`<sup>Optional</sup> <a name="metric_enabled_input" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricEnabledInput"></a>

```python
metric_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metric_tag_filter_input`<sup>Optional</sup> <a name="metric_tag_filter_input" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricTagFilterInput"></a>

```python
metric_tag_filter_input: typing.Union[IResolvable, typing.List[NewRelicTagRuleMetricTagFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>]]

---

##### `monitor_id_input`<sup>Optional</sup> <a name="monitor_id_input" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.monitorIdInput"></a>

```python
monitor_id_input: str
```

- *Type:* str

---

##### `subscription_log_enabled_input`<sup>Optional</sup> <a name="subscription_log_enabled_input" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.subscriptionLogEnabledInput"></a>

```python
subscription_log_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NewRelicTagRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a>]

---

##### `activity_log_enabled`<sup>Required</sup> <a name="activity_log_enabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.activityLogEnabled"></a>

```python
activity_log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `azure_active_directory_log_enabled`<sup>Required</sup> <a name="azure_active_directory_log_enabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.azureActiveDirectoryLogEnabled"></a>

```python
azure_active_directory_log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metric_enabled`<sup>Required</sup> <a name="metric_enabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricEnabled"></a>

```python
metric_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `monitor_id`<sup>Required</sup> <a name="monitor_id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.monitorId"></a>

```python
monitor_id: str
```

- *Type:* str

---

##### `subscription_log_enabled`<sup>Required</sup> <a name="subscription_log_enabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.subscriptionLogEnabled"></a>

```python
subscription_log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NewRelicTagRuleConfig <a name="NewRelicTagRuleConfig" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_tag_rule

newRelicTagRule.NewRelicTagRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  monitor_id: str,
  activity_log_enabled: typing.Union[bool, IResolvable] = None,
  azure_active_directory_log_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  log_tag_filter: typing.Union[IResolvable, typing.List[NewRelicTagRuleLogTagFilter]] = None,
  metric_enabled: typing.Union[bool, IResolvable] = None,
  metric_tag_filter: typing.Union[IResolvable, typing.List[NewRelicTagRuleMetricTagFilter]] = None,
  subscription_log_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: NewRelicTagRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.monitorId">monitor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#monitor_id NewRelicTagRule#monitor_id}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.activityLogEnabled">activity_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#activity_log_enabled NewRelicTagRule#activity_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.azureActiveDirectoryLogEnabled">azure_active_directory_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#azure_active_directory_log_enabled NewRelicTagRule#azure_active_directory_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#id NewRelicTagRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.logTagFilter">log_tag_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>]]</code> | log_tag_filter block. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.metricEnabled">metric_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#metric_enabled NewRelicTagRule#metric_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.metricTagFilter">metric_tag_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>]]</code> | metric_tag_filter block. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.subscriptionLogEnabled">subscription_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#subscription_log_enabled NewRelicTagRule#subscription_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `monitor_id`<sup>Required</sup> <a name="monitor_id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.monitorId"></a>

```python
monitor_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#monitor_id NewRelicTagRule#monitor_id}.

---

##### `activity_log_enabled`<sup>Optional</sup> <a name="activity_log_enabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.activityLogEnabled"></a>

```python
activity_log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#activity_log_enabled NewRelicTagRule#activity_log_enabled}.

---

##### `azure_active_directory_log_enabled`<sup>Optional</sup> <a name="azure_active_directory_log_enabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.azureActiveDirectoryLogEnabled"></a>

```python
azure_active_directory_log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#azure_active_directory_log_enabled NewRelicTagRule#azure_active_directory_log_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#id NewRelicTagRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_tag_filter`<sup>Optional</sup> <a name="log_tag_filter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.logTagFilter"></a>

```python
log_tag_filter: typing.Union[IResolvable, typing.List[NewRelicTagRuleLogTagFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>]]

log_tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#log_tag_filter NewRelicTagRule#log_tag_filter}

---

##### `metric_enabled`<sup>Optional</sup> <a name="metric_enabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.metricEnabled"></a>

```python
metric_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#metric_enabled NewRelicTagRule#metric_enabled}.

---

##### `metric_tag_filter`<sup>Optional</sup> <a name="metric_tag_filter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.metricTagFilter"></a>

```python
metric_tag_filter: typing.Union[IResolvable, typing.List[NewRelicTagRuleMetricTagFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>]]

metric_tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#metric_tag_filter NewRelicTagRule#metric_tag_filter}

---

##### `subscription_log_enabled`<sup>Optional</sup> <a name="subscription_log_enabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.subscriptionLogEnabled"></a>

```python
subscription_log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#subscription_log_enabled NewRelicTagRule#subscription_log_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.timeouts"></a>

```python
timeouts: NewRelicTagRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#timeouts NewRelicTagRule#timeouts}

---

### NewRelicTagRuleLogTagFilter <a name="NewRelicTagRuleLogTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_tag_rule

newRelicTagRule.NewRelicTagRuleLogTagFilter(
  action: str,
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#action NewRelicTagRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#name NewRelicTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#value NewRelicTagRule#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#action NewRelicTagRule#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#name NewRelicTagRule#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#value NewRelicTagRule#value}.

---

### NewRelicTagRuleMetricTagFilter <a name="NewRelicTagRuleMetricTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_tag_rule

newRelicTagRule.NewRelicTagRuleMetricTagFilter(
  action: str,
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#action NewRelicTagRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#name NewRelicTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#value NewRelicTagRule#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#action NewRelicTagRule#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#name NewRelicTagRule#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#value NewRelicTagRule#value}.

---

### NewRelicTagRuleTimeouts <a name="NewRelicTagRuleTimeouts" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_tag_rule

newRelicTagRule.NewRelicTagRuleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#create NewRelicTagRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#delete NewRelicTagRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#read NewRelicTagRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#update NewRelicTagRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#create NewRelicTagRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#delete NewRelicTagRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#read NewRelicTagRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/new_relic_tag_rule#update NewRelicTagRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NewRelicTagRuleLogTagFilterList <a name="NewRelicTagRuleLogTagFilterList" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_tag_rule

newRelicTagRule.NewRelicTagRuleLogTagFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NewRelicTagRuleLogTagFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NewRelicTagRuleLogTagFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>]]

---


### NewRelicTagRuleLogTagFilterOutputReference <a name="NewRelicTagRuleLogTagFilterOutputReference" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_tag_rule

newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NewRelicTagRuleLogTagFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>]

---


### NewRelicTagRuleMetricTagFilterList <a name="NewRelicTagRuleMetricTagFilterList" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_tag_rule

newRelicTagRule.NewRelicTagRuleMetricTagFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NewRelicTagRuleMetricTagFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NewRelicTagRuleMetricTagFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>]]

---


### NewRelicTagRuleMetricTagFilterOutputReference <a name="NewRelicTagRuleMetricTagFilterOutputReference" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_tag_rule

newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NewRelicTagRuleMetricTagFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>]

---


### NewRelicTagRuleTimeoutsOutputReference <a name="NewRelicTagRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_tag_rule

newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NewRelicTagRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a>]

---



