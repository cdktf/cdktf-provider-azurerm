# `datadogMonitorTagRule` Submodule <a name="`datadogMonitorTagRule` Submodule" id="@cdktf/provider-azurerm.datadogMonitorTagRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatadogMonitorTagRule <a name="DatadogMonitorTagRule" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule azurerm_datadog_monitor_tag_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_tag_rule

datadogMonitorTagRule.DatadogMonitorTagRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datadog_monitor_id: str,
  id: str = None,
  log: typing.Union[IResolvable, typing.List[DatadogMonitorTagRuleLog]] = None,
  metric: typing.Union[IResolvable, typing.List[DatadogMonitorTagRuleMetric]] = None,
  name: str = None,
  timeouts: DatadogMonitorTagRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.datadogMonitorId">datadog_monitor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#datadog_monitor_id DatadogMonitorTagRule#datadog_monitor_id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#id DatadogMonitorTagRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.log">log</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>]]</code> | log block. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.metric">metric</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>]]</code> | metric block. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datadog_monitor_id`<sup>Required</sup> <a name="datadog_monitor_id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.datadogMonitorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#datadog_monitor_id DatadogMonitorTagRule#datadog_monitor_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#id DatadogMonitorTagRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log`<sup>Optional</sup> <a name="log" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.log"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>]]

log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#log DatadogMonitorTagRule#log}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.metric"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>]]

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#metric DatadogMonitorTagRule#metric}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#timeouts DatadogMonitorTagRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putLog">put_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putMetric">put_metric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetLog">reset_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetMetric">reset_metric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_log` <a name="put_log" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putLog"></a>

```python
def put_log(
  value: typing.Union[IResolvable, typing.List[DatadogMonitorTagRuleLog]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putLog.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>]]

---

##### `put_metric` <a name="put_metric" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putMetric"></a>

```python
def put_metric(
  value: typing.Union[IResolvable, typing.List[DatadogMonitorTagRuleMetric]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putMetric.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#create DatadogMonitorTagRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#delete DatadogMonitorTagRule#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#read DatadogMonitorTagRule#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#update DatadogMonitorTagRule#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log` <a name="reset_log" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetLog"></a>

```python
def reset_log() -> None
```

##### `reset_metric` <a name="reset_metric" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetMetric"></a>

```python
def reset_metric() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatadogMonitorTagRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_tag_rule

datadogMonitorTagRule.DatadogMonitorTagRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_tag_rule

datadogMonitorTagRule.DatadogMonitorTagRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_tag_rule

datadogMonitorTagRule.DatadogMonitorTagRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_tag_rule

datadogMonitorTagRule.DatadogMonitorTagRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatadogMonitorTagRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatadogMonitorTagRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatadogMonitorTagRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatadogMonitorTagRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.log">log</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList">DatadogMonitorTagRuleLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList">DatadogMonitorTagRuleMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference">DatadogMonitorTagRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.datadogMonitorIdInput">datadog_monitor_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.logInput">log_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.metricInput">metric_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.datadogMonitorId">datadog_monitor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log`<sup>Required</sup> <a name="log" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.log"></a>

```python
log: DatadogMonitorTagRuleLogList
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList">DatadogMonitorTagRuleLogList</a>

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.metric"></a>

```python
metric: DatadogMonitorTagRuleMetricList
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList">DatadogMonitorTagRuleMetricList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.timeouts"></a>

```python
timeouts: DatadogMonitorTagRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference">DatadogMonitorTagRuleTimeoutsOutputReference</a>

---

##### `datadog_monitor_id_input`<sup>Optional</sup> <a name="datadog_monitor_id_input" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.datadogMonitorIdInput"></a>

```python
datadog_monitor_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_input`<sup>Optional</sup> <a name="log_input" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.logInput"></a>

```python
log_input: typing.Union[IResolvable, typing.List[DatadogMonitorTagRuleLog]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>]]

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.metricInput"></a>

```python
metric_input: typing.Union[IResolvable, typing.List[DatadogMonitorTagRuleMetric]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatadogMonitorTagRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a>]

---

##### `datadog_monitor_id`<sup>Required</sup> <a name="datadog_monitor_id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.datadogMonitorId"></a>

```python
datadog_monitor_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatadogMonitorTagRuleConfig <a name="DatadogMonitorTagRuleConfig" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_tag_rule

datadogMonitorTagRule.DatadogMonitorTagRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datadog_monitor_id: str,
  id: str = None,
  log: typing.Union[IResolvable, typing.List[DatadogMonitorTagRuleLog]] = None,
  metric: typing.Union[IResolvable, typing.List[DatadogMonitorTagRuleMetric]] = None,
  name: str = None,
  timeouts: DatadogMonitorTagRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.datadogMonitorId">datadog_monitor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#datadog_monitor_id DatadogMonitorTagRule#datadog_monitor_id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#id DatadogMonitorTagRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.log">log</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>]]</code> | log block. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.metric">metric</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>]]</code> | metric block. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datadog_monitor_id`<sup>Required</sup> <a name="datadog_monitor_id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.datadogMonitorId"></a>

```python
datadog_monitor_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#datadog_monitor_id DatadogMonitorTagRule#datadog_monitor_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#id DatadogMonitorTagRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log`<sup>Optional</sup> <a name="log" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.log"></a>

```python
log: typing.Union[IResolvable, typing.List[DatadogMonitorTagRuleLog]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>]]

log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#log DatadogMonitorTagRule#log}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.metric"></a>

```python
metric: typing.Union[IResolvable, typing.List[DatadogMonitorTagRuleMetric]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>]]

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#metric DatadogMonitorTagRule#metric}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleConfig.property.timeouts"></a>

```python
timeouts: DatadogMonitorTagRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#timeouts DatadogMonitorTagRule#timeouts}

---

### DatadogMonitorTagRuleLog <a name="DatadogMonitorTagRuleLog" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_tag_rule

datadogMonitorTagRule.DatadogMonitorTagRuleLog(
  aad_log_enabled: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DatadogMonitorTagRuleLogFilter]] = None,
  resource_log_enabled: typing.Union[bool, IResolvable] = None,
  subscription_log_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.aadLogEnabled">aad_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#aad_log_enabled DatadogMonitorTagRule#aad_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.resourceLogEnabled">resource_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#resource_log_enabled DatadogMonitorTagRule#resource_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.subscriptionLogEnabled">subscription_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#subscription_log_enabled DatadogMonitorTagRule#subscription_log_enabled}. |

---

##### `aad_log_enabled`<sup>Optional</sup> <a name="aad_log_enabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.aadLogEnabled"></a>

```python
aad_log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#aad_log_enabled DatadogMonitorTagRule#aad_log_enabled}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DatadogMonitorTagRuleLogFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#filter DatadogMonitorTagRule#filter}

---

##### `resource_log_enabled`<sup>Optional</sup> <a name="resource_log_enabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.resourceLogEnabled"></a>

```python
resource_log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#resource_log_enabled DatadogMonitorTagRule#resource_log_enabled}.

---

##### `subscription_log_enabled`<sup>Optional</sup> <a name="subscription_log_enabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog.property.subscriptionLogEnabled"></a>

```python
subscription_log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#subscription_log_enabled DatadogMonitorTagRule#subscription_log_enabled}.

---

### DatadogMonitorTagRuleLogFilter <a name="DatadogMonitorTagRuleLogFilter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_tag_rule

datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter(
  action: str,
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#action DatadogMonitorTagRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#value DatadogMonitorTagRule#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#action DatadogMonitorTagRule#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#value DatadogMonitorTagRule#value}.

---

### DatadogMonitorTagRuleMetric <a name="DatadogMonitorTagRuleMetric" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_tag_rule

datadogMonitorTagRule.DatadogMonitorTagRuleMetric(
  filter: typing.Union[IResolvable, typing.List[DatadogMonitorTagRuleMetricFilter]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a>]]</code> | filter block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DatadogMonitorTagRuleMetricFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#filter DatadogMonitorTagRule#filter}

---

### DatadogMonitorTagRuleMetricFilter <a name="DatadogMonitorTagRuleMetricFilter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_tag_rule

datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter(
  action: str,
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#action DatadogMonitorTagRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#value DatadogMonitorTagRule#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#action DatadogMonitorTagRule#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#name DatadogMonitorTagRule#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#value DatadogMonitorTagRule#value}.

---

### DatadogMonitorTagRuleTimeouts <a name="DatadogMonitorTagRuleTimeouts" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_tag_rule

datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#create DatadogMonitorTagRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#delete DatadogMonitorTagRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#read DatadogMonitorTagRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#update DatadogMonitorTagRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#create DatadogMonitorTagRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#delete DatadogMonitorTagRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#read DatadogMonitorTagRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/datadog_monitor_tag_rule#update DatadogMonitorTagRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatadogMonitorTagRuleLogFilterList <a name="DatadogMonitorTagRuleLogFilterList" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_tag_rule

datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatadogMonitorTagRuleLogFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatadogMonitorTagRuleLogFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a>]]

---


### DatadogMonitorTagRuleLogFilterOutputReference <a name="DatadogMonitorTagRuleLogFilterOutputReference" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_tag_rule

datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatadogMonitorTagRuleLogFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a>]

---


### DatadogMonitorTagRuleLogList <a name="DatadogMonitorTagRuleLogList" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_tag_rule

datadogMonitorTagRule.DatadogMonitorTagRuleLogList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatadogMonitorTagRuleLogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatadogMonitorTagRuleLog]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>]]

---


### DatadogMonitorTagRuleLogOutputReference <a name="DatadogMonitorTagRuleLogOutputReference" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_tag_rule

datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetAadLogEnabled">reset_aad_log_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetResourceLogEnabled">reset_resource_log_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetSubscriptionLogEnabled">reset_subscription_log_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter` <a name="put_filter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DatadogMonitorTagRuleLogFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a>]]

---

##### `reset_aad_log_enabled` <a name="reset_aad_log_enabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetAadLogEnabled"></a>

```python
def reset_aad_log_enabled() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_resource_log_enabled` <a name="reset_resource_log_enabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetResourceLogEnabled"></a>

```python
def reset_resource_log_enabled() -> None
```

##### `reset_subscription_log_enabled` <a name="reset_subscription_log_enabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.resetSubscriptionLogEnabled"></a>

```python
def reset_subscription_log_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList">DatadogMonitorTagRuleLogFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.aadLogEnabledInput">aad_log_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.resourceLogEnabledInput">resource_log_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.subscriptionLogEnabledInput">subscription_log_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.aadLogEnabled">aad_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.resourceLogEnabled">resource_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.subscriptionLogEnabled">subscription_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.filter"></a>

```python
filter: DatadogMonitorTagRuleLogFilterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilterList">DatadogMonitorTagRuleLogFilterList</a>

---

##### `aad_log_enabled_input`<sup>Optional</sup> <a name="aad_log_enabled_input" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.aadLogEnabledInput"></a>

```python
aad_log_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DatadogMonitorTagRuleLogFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogFilter">DatadogMonitorTagRuleLogFilter</a>]]

---

##### `resource_log_enabled_input`<sup>Optional</sup> <a name="resource_log_enabled_input" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.resourceLogEnabledInput"></a>

```python
resource_log_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subscription_log_enabled_input`<sup>Optional</sup> <a name="subscription_log_enabled_input" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.subscriptionLogEnabledInput"></a>

```python
subscription_log_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aad_log_enabled`<sup>Required</sup> <a name="aad_log_enabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.aadLogEnabled"></a>

```python
aad_log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_log_enabled`<sup>Required</sup> <a name="resource_log_enabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.resourceLogEnabled"></a>

```python
resource_log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subscription_log_enabled`<sup>Required</sup> <a name="subscription_log_enabled" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.subscriptionLogEnabled"></a>

```python
subscription_log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLogOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatadogMonitorTagRuleLog]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleLog">DatadogMonitorTagRuleLog</a>]

---


### DatadogMonitorTagRuleMetricFilterList <a name="DatadogMonitorTagRuleMetricFilterList" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_tag_rule

datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatadogMonitorTagRuleMetricFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatadogMonitorTagRuleMetricFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a>]]

---


### DatadogMonitorTagRuleMetricFilterOutputReference <a name="DatadogMonitorTagRuleMetricFilterOutputReference" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_tag_rule

datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatadogMonitorTagRuleMetricFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a>]

---


### DatadogMonitorTagRuleMetricList <a name="DatadogMonitorTagRuleMetricList" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_tag_rule

datadogMonitorTagRule.DatadogMonitorTagRuleMetricList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatadogMonitorTagRuleMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatadogMonitorTagRuleMetric]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>]]

---


### DatadogMonitorTagRuleMetricOutputReference <a name="DatadogMonitorTagRuleMetricOutputReference" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_tag_rule

datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter` <a name="put_filter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DatadogMonitorTagRuleMetricFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList">DatadogMonitorTagRuleMetricFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.filter"></a>

```python
filter: DatadogMonitorTagRuleMetricFilterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilterList">DatadogMonitorTagRuleMetricFilterList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DatadogMonitorTagRuleMetricFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricFilter">DatadogMonitorTagRuleMetricFilter</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetricOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatadogMonitorTagRuleMetric]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleMetric">DatadogMonitorTagRuleMetric</a>]

---


### DatadogMonitorTagRuleTimeoutsOutputReference <a name="DatadogMonitorTagRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_tag_rule

datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatadogMonitorTagRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.datadogMonitorTagRule.DatadogMonitorTagRuleTimeouts">DatadogMonitorTagRuleTimeouts</a>]

---



