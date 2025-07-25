# `automationJobSchedule` Submodule <a name="`automationJobSchedule` Submodule" id="@cdktf/provider-azurerm.automationJobSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationJobSchedule <a name="AutomationJobSchedule" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule azurerm_automation_job_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_job_schedule

automationJobSchedule.AutomationJobSchedule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  automation_account_name: str,
  resource_group_name: str,
  runbook_name: str,
  schedule_name: str,
  id: str = None,
  job_schedule_id: str = None,
  parameters: typing.Mapping[str] = None,
  run_on: str = None,
  timeouts: AutomationJobScheduleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.automationAccountName">automation_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#automation_account_name AutomationJobSchedule#automation_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#resource_group_name AutomationJobSchedule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.runbookName">runbook_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#runbook_name AutomationJobSchedule#runbook_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.scheduleName">schedule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#schedule_name AutomationJobSchedule#schedule_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#id AutomationJobSchedule#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.jobScheduleId">job_schedule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#job_schedule_id AutomationJobSchedule#job_schedule_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#parameters AutomationJobSchedule#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.runOn">run_on</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#run_on AutomationJobSchedule#run_on}. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts">AutomationJobScheduleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `automation_account_name`<sup>Required</sup> <a name="automation_account_name" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.automationAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#automation_account_name AutomationJobSchedule#automation_account_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#resource_group_name AutomationJobSchedule#resource_group_name}.

---

##### `runbook_name`<sup>Required</sup> <a name="runbook_name" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.runbookName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#runbook_name AutomationJobSchedule#runbook_name}.

---

##### `schedule_name`<sup>Required</sup> <a name="schedule_name" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.scheduleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#schedule_name AutomationJobSchedule#schedule_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#id AutomationJobSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `job_schedule_id`<sup>Optional</sup> <a name="job_schedule_id" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.jobScheduleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#job_schedule_id AutomationJobSchedule#job_schedule_id}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#parameters AutomationJobSchedule#parameters}.

---

##### `run_on`<sup>Optional</sup> <a name="run_on" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.runOn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#run_on AutomationJobSchedule#run_on}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts">AutomationJobScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#timeouts AutomationJobSchedule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.resetJobScheduleId">reset_job_schedule_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.resetRunOn">reset_run_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#create AutomationJobSchedule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#delete AutomationJobSchedule#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#read AutomationJobSchedule#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_job_schedule_id` <a name="reset_job_schedule_id" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.resetJobScheduleId"></a>

```python
def reset_job_schedule_id() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_run_on` <a name="reset_run_on" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.resetRunOn"></a>

```python
def reset_run_on() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AutomationJobSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_job_schedule

automationJobSchedule.AutomationJobSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_job_schedule

automationJobSchedule.AutomationJobSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_job_schedule

automationJobSchedule.AutomationJobSchedule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_job_schedule

automationJobSchedule.AutomationJobSchedule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AutomationJobSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AutomationJobSchedule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AutomationJobSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AutomationJobSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.resourceManagerId">resource_manager_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference">AutomationJobScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.automationAccountNameInput">automation_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.jobScheduleIdInput">job_schedule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.runbookNameInput">runbook_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.runOnInput">run_on_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.scheduleNameInput">schedule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts">AutomationJobScheduleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.automationAccountName">automation_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.jobScheduleId">job_schedule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.runbookName">runbook_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.runOn">run_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.scheduleName">schedule_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `resource_manager_id`<sup>Required</sup> <a name="resource_manager_id" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.resourceManagerId"></a>

```python
resource_manager_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.timeouts"></a>

```python
timeouts: AutomationJobScheduleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference">AutomationJobScheduleTimeoutsOutputReference</a>

---

##### `automation_account_name_input`<sup>Optional</sup> <a name="automation_account_name_input" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.automationAccountNameInput"></a>

```python
automation_account_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `job_schedule_id_input`<sup>Optional</sup> <a name="job_schedule_id_input" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.jobScheduleIdInput"></a>

```python
job_schedule_id_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `runbook_name_input`<sup>Optional</sup> <a name="runbook_name_input" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.runbookNameInput"></a>

```python
runbook_name_input: str
```

- *Type:* str

---

##### `run_on_input`<sup>Optional</sup> <a name="run_on_input" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.runOnInput"></a>

```python
run_on_input: str
```

- *Type:* str

---

##### `schedule_name_input`<sup>Optional</sup> <a name="schedule_name_input" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.scheduleNameInput"></a>

```python
schedule_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AutomationJobScheduleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts">AutomationJobScheduleTimeouts</a>]

---

##### `automation_account_name`<sup>Required</sup> <a name="automation_account_name" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.automationAccountName"></a>

```python
automation_account_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `job_schedule_id`<sup>Required</sup> <a name="job_schedule_id" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.jobScheduleId"></a>

```python
job_schedule_id: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `runbook_name`<sup>Required</sup> <a name="runbook_name" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.runbookName"></a>

```python
runbook_name: str
```

- *Type:* str

---

##### `run_on`<sup>Required</sup> <a name="run_on" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.runOn"></a>

```python
run_on: str
```

- *Type:* str

---

##### `schedule_name`<sup>Required</sup> <a name="schedule_name" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.scheduleName"></a>

```python
schedule_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationJobScheduleConfig <a name="AutomationJobScheduleConfig" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_job_schedule

automationJobSchedule.AutomationJobScheduleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  automation_account_name: str,
  resource_group_name: str,
  runbook_name: str,
  schedule_name: str,
  id: str = None,
  job_schedule_id: str = None,
  parameters: typing.Mapping[str] = None,
  run_on: str = None,
  timeouts: AutomationJobScheduleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.automationAccountName">automation_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#automation_account_name AutomationJobSchedule#automation_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#resource_group_name AutomationJobSchedule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.runbookName">runbook_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#runbook_name AutomationJobSchedule#runbook_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.scheduleName">schedule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#schedule_name AutomationJobSchedule#schedule_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#id AutomationJobSchedule#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.jobScheduleId">job_schedule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#job_schedule_id AutomationJobSchedule#job_schedule_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#parameters AutomationJobSchedule#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.runOn">run_on</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#run_on AutomationJobSchedule#run_on}. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts">AutomationJobScheduleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `automation_account_name`<sup>Required</sup> <a name="automation_account_name" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.automationAccountName"></a>

```python
automation_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#automation_account_name AutomationJobSchedule#automation_account_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#resource_group_name AutomationJobSchedule#resource_group_name}.

---

##### `runbook_name`<sup>Required</sup> <a name="runbook_name" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.runbookName"></a>

```python
runbook_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#runbook_name AutomationJobSchedule#runbook_name}.

---

##### `schedule_name`<sup>Required</sup> <a name="schedule_name" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.scheduleName"></a>

```python
schedule_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#schedule_name AutomationJobSchedule#schedule_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#id AutomationJobSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `job_schedule_id`<sup>Optional</sup> <a name="job_schedule_id" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.jobScheduleId"></a>

```python
job_schedule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#job_schedule_id AutomationJobSchedule#job_schedule_id}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#parameters AutomationJobSchedule#parameters}.

---

##### `run_on`<sup>Optional</sup> <a name="run_on" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.runOn"></a>

```python
run_on: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#run_on AutomationJobSchedule#run_on}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.timeouts"></a>

```python
timeouts: AutomationJobScheduleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts">AutomationJobScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#timeouts AutomationJobSchedule#timeouts}

---

### AutomationJobScheduleTimeouts <a name="AutomationJobScheduleTimeouts" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_job_schedule

automationJobSchedule.AutomationJobScheduleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#create AutomationJobSchedule#create}. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#delete AutomationJobSchedule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#read AutomationJobSchedule#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#create AutomationJobSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#delete AutomationJobSchedule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/automation_job_schedule#read AutomationJobSchedule#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationJobScheduleTimeoutsOutputReference <a name="AutomationJobScheduleTimeoutsOutputReference" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_job_schedule

automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts">AutomationJobScheduleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AutomationJobScheduleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts">AutomationJobScheduleTimeouts</a>]

---



