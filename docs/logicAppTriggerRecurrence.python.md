# `logicAppTriggerRecurrence` Submodule <a name="`logicAppTriggerRecurrence` Submodule" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogicAppTriggerRecurrence <a name="LogicAppTriggerRecurrence" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence azurerm_logic_app_trigger_recurrence}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_trigger_recurrence

logicAppTriggerRecurrence.LogicAppTriggerRecurrence(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  frequency: str,
  interval: typing.Union[int, float],
  logic_app_id: str,
  name: str,
  id: str = None,
  schedule: LogicAppTriggerRecurrenceSchedule = None,
  start_time: str = None,
  timeouts: LogicAppTriggerRecurrenceTimeouts = None,
  time_zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.frequency">frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#frequency LogicAppTriggerRecurrence#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.interval">interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#interval LogicAppTriggerRecurrence#interval}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.logicAppId">logic_app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#logic_app_id LogicAppTriggerRecurrence#logic_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#name LogicAppTriggerRecurrence#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#id LogicAppTriggerRecurrence#id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule">LogicAppTriggerRecurrenceSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#start_time LogicAppTriggerRecurrence#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts">LogicAppTriggerRecurrenceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#time_zone LogicAppTriggerRecurrence#time_zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.frequency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#frequency LogicAppTriggerRecurrence#frequency}.

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.interval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#interval LogicAppTriggerRecurrence#interval}.

---

##### `logic_app_id`<sup>Required</sup> <a name="logic_app_id" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.logicAppId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#logic_app_id LogicAppTriggerRecurrence#logic_app_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#name LogicAppTriggerRecurrence#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#id LogicAppTriggerRecurrence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule">LogicAppTriggerRecurrenceSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#schedule LogicAppTriggerRecurrence#schedule}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.startTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#start_time LogicAppTriggerRecurrence#start_time}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts">LogicAppTriggerRecurrenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#timeouts LogicAppTriggerRecurrence#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.Initializer.parameter.timeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#time_zone LogicAppTriggerRecurrence#time_zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.resetStartTime">reset_start_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.putSchedule"></a>

```python
def put_schedule(
  at_these_hours: typing.List[typing.Union[int, float]] = None,
  at_these_minutes: typing.List[typing.Union[int, float]] = None,
  on_these_days: typing.List[str] = None
) -> None
```

###### `at_these_hours`<sup>Optional</sup> <a name="at_these_hours" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.putSchedule.parameter.atTheseHours"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#at_these_hours LogicAppTriggerRecurrence#at_these_hours}.

---

###### `at_these_minutes`<sup>Optional</sup> <a name="at_these_minutes" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.putSchedule.parameter.atTheseMinutes"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#at_these_minutes LogicAppTriggerRecurrence#at_these_minutes}.

---

###### `on_these_days`<sup>Optional</sup> <a name="on_these_days" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.putSchedule.parameter.onTheseDays"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#on_these_days LogicAppTriggerRecurrence#on_these_days}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#create LogicAppTriggerRecurrence#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#delete LogicAppTriggerRecurrence#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#read LogicAppTriggerRecurrence#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#update LogicAppTriggerRecurrence#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.resetStartTime"></a>

```python
def reset_start_time() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LogicAppTriggerRecurrence resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_trigger_recurrence

logicAppTriggerRecurrence.LogicAppTriggerRecurrence.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_trigger_recurrence

logicAppTriggerRecurrence.LogicAppTriggerRecurrence.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_trigger_recurrence

logicAppTriggerRecurrence.LogicAppTriggerRecurrence.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_trigger_recurrence

logicAppTriggerRecurrence.LogicAppTriggerRecurrence.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LogicAppTriggerRecurrence resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LogicAppTriggerRecurrence to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LogicAppTriggerRecurrence that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogicAppTriggerRecurrence to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference">LogicAppTriggerRecurrenceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference">LogicAppTriggerRecurrenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.frequencyInput">frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.intervalInput">interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.logicAppIdInput">logic_app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.scheduleInput">schedule_input</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule">LogicAppTriggerRecurrenceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts">LogicAppTriggerRecurrenceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.logicAppId">logic_app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.schedule"></a>

```python
schedule: LogicAppTriggerRecurrenceScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference">LogicAppTriggerRecurrenceScheduleOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.timeouts"></a>

```python
timeouts: LogicAppTriggerRecurrenceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference">LogicAppTriggerRecurrenceTimeoutsOutputReference</a>

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.frequencyInput"></a>

```python
frequency_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.intervalInput"></a>

```python
interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `logic_app_id_input`<sup>Optional</sup> <a name="logic_app_id_input" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.logicAppIdInput"></a>

```python
logic_app_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.scheduleInput"></a>

```python
schedule_input: LogicAppTriggerRecurrenceSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule">LogicAppTriggerRecurrenceSchedule</a>

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LogicAppTriggerRecurrenceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts">LogicAppTriggerRecurrenceTimeouts</a>]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `logic_app_id`<sup>Required</sup> <a name="logic_app_id" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.logicAppId"></a>

```python
logic_app_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrence.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogicAppTriggerRecurrenceConfig <a name="LogicAppTriggerRecurrenceConfig" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_trigger_recurrence

logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  frequency: str,
  interval: typing.Union[int, float],
  logic_app_id: str,
  name: str,
  id: str = None,
  schedule: LogicAppTriggerRecurrenceSchedule = None,
  start_time: str = None,
  timeouts: LogicAppTriggerRecurrenceTimeouts = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.frequency">frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#frequency LogicAppTriggerRecurrence#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#interval LogicAppTriggerRecurrence#interval}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.logicAppId">logic_app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#logic_app_id LogicAppTriggerRecurrence#logic_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#name LogicAppTriggerRecurrence#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#id LogicAppTriggerRecurrence#id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule">LogicAppTriggerRecurrenceSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#start_time LogicAppTriggerRecurrence#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts">LogicAppTriggerRecurrenceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#time_zone LogicAppTriggerRecurrence#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#frequency LogicAppTriggerRecurrence#frequency}.

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#interval LogicAppTriggerRecurrence#interval}.

---

##### `logic_app_id`<sup>Required</sup> <a name="logic_app_id" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.logicAppId"></a>

```python
logic_app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#logic_app_id LogicAppTriggerRecurrence#logic_app_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#name LogicAppTriggerRecurrence#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#id LogicAppTriggerRecurrence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.schedule"></a>

```python
schedule: LogicAppTriggerRecurrenceSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule">LogicAppTriggerRecurrenceSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#schedule LogicAppTriggerRecurrence#schedule}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#start_time LogicAppTriggerRecurrence#start_time}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.timeouts"></a>

```python
timeouts: LogicAppTriggerRecurrenceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts">LogicAppTriggerRecurrenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#timeouts LogicAppTriggerRecurrence#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#time_zone LogicAppTriggerRecurrence#time_zone}.

---

### LogicAppTriggerRecurrenceSchedule <a name="LogicAppTriggerRecurrenceSchedule" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_trigger_recurrence

logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule(
  at_these_hours: typing.List[typing.Union[int, float]] = None,
  at_these_minutes: typing.List[typing.Union[int, float]] = None,
  on_these_days: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule.property.atTheseHours">at_these_hours</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#at_these_hours LogicAppTriggerRecurrence#at_these_hours}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule.property.atTheseMinutes">at_these_minutes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#at_these_minutes LogicAppTriggerRecurrence#at_these_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule.property.onTheseDays">on_these_days</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#on_these_days LogicAppTriggerRecurrence#on_these_days}. |

---

##### `at_these_hours`<sup>Optional</sup> <a name="at_these_hours" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule.property.atTheseHours"></a>

```python
at_these_hours: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#at_these_hours LogicAppTriggerRecurrence#at_these_hours}.

---

##### `at_these_minutes`<sup>Optional</sup> <a name="at_these_minutes" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule.property.atTheseMinutes"></a>

```python
at_these_minutes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#at_these_minutes LogicAppTriggerRecurrence#at_these_minutes}.

---

##### `on_these_days`<sup>Optional</sup> <a name="on_these_days" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule.property.onTheseDays"></a>

```python
on_these_days: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#on_these_days LogicAppTriggerRecurrence#on_these_days}.

---

### LogicAppTriggerRecurrenceTimeouts <a name="LogicAppTriggerRecurrenceTimeouts" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_trigger_recurrence

logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#create LogicAppTriggerRecurrence#create}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#delete LogicAppTriggerRecurrence#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#read LogicAppTriggerRecurrence#read}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#update LogicAppTriggerRecurrence#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#create LogicAppTriggerRecurrence#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#delete LogicAppTriggerRecurrence#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#read LogicAppTriggerRecurrence#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/logic_app_trigger_recurrence#update LogicAppTriggerRecurrence#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogicAppTriggerRecurrenceScheduleOutputReference <a name="LogicAppTriggerRecurrenceScheduleOutputReference" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_trigger_recurrence

logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.resetAtTheseHours">reset_at_these_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.resetAtTheseMinutes">reset_at_these_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.resetOnTheseDays">reset_on_these_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_at_these_hours` <a name="reset_at_these_hours" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.resetAtTheseHours"></a>

```python
def reset_at_these_hours() -> None
```

##### `reset_at_these_minutes` <a name="reset_at_these_minutes" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.resetAtTheseMinutes"></a>

```python
def reset_at_these_minutes() -> None
```

##### `reset_on_these_days` <a name="reset_on_these_days" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.resetOnTheseDays"></a>

```python
def reset_on_these_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.atTheseHoursInput">at_these_hours_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.atTheseMinutesInput">at_these_minutes_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.onTheseDaysInput">on_these_days_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.atTheseHours">at_these_hours</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.atTheseMinutes">at_these_minutes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.onTheseDays">on_these_days</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule">LogicAppTriggerRecurrenceSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `at_these_hours_input`<sup>Optional</sup> <a name="at_these_hours_input" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.atTheseHoursInput"></a>

```python
at_these_hours_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `at_these_minutes_input`<sup>Optional</sup> <a name="at_these_minutes_input" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.atTheseMinutesInput"></a>

```python
at_these_minutes_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `on_these_days_input`<sup>Optional</sup> <a name="on_these_days_input" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.onTheseDaysInput"></a>

```python
on_these_days_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `at_these_hours`<sup>Required</sup> <a name="at_these_hours" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.atTheseHours"></a>

```python
at_these_hours: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `at_these_minutes`<sup>Required</sup> <a name="at_these_minutes" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.atTheseMinutes"></a>

```python
at_these_minutes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `on_these_days`<sup>Required</sup> <a name="on_these_days" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.onTheseDays"></a>

```python
on_these_days: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceScheduleOutputReference.property.internalValue"></a>

```python
internal_value: LogicAppTriggerRecurrenceSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceSchedule">LogicAppTriggerRecurrenceSchedule</a>

---


### LogicAppTriggerRecurrenceTimeoutsOutputReference <a name="LogicAppTriggerRecurrenceTimeoutsOutputReference" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_trigger_recurrence

logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts">LogicAppTriggerRecurrenceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogicAppTriggerRecurrenceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logicAppTriggerRecurrence.LogicAppTriggerRecurrenceTimeouts">LogicAppTriggerRecurrenceTimeouts</a>]

---



