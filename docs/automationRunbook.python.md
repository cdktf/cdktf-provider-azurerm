# `automationRunbook` Submodule <a name="`automationRunbook` Submodule" id="@cdktf/provider-azurerm.automationRunbook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRunbook <a name="AutomationRunbook" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook azurerm_automation_runbook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_runbook

automationRunbook.AutomationRunbook(
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
  location: str,
  log_progress: typing.Union[bool, IResolvable],
  log_verbose: typing.Union[bool, IResolvable],
  name: str,
  resource_group_name: str,
  runbook_type: str,
  content: str = None,
  description: str = None,
  draft: AutomationRunbookDraft = None,
  id: str = None,
  job_schedule: typing.Union[IResolvable, typing.List[AutomationRunbookJobSchedule]] = None,
  log_activity_trace_level: typing.Union[int, float] = None,
  publish_content_link: AutomationRunbookPublishContentLink = None,
  tags: typing.Mapping[str] = None,
  timeouts: AutomationRunbookTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.automationAccountName">automation_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#automation_account_name AutomationRunbook#automation_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#location AutomationRunbook#location}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.logProgress">log_progress</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#log_progress AutomationRunbook#log_progress}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.logVerbose">log_verbose</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#log_verbose AutomationRunbook#log_verbose}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#name AutomationRunbook#name}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#resource_group_name AutomationRunbook#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.runbookType">runbook_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#runbook_type AutomationRunbook#runbook_type}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#content AutomationRunbook#content}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#description AutomationRunbook#description}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.draft">draft</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a></code> | draft block. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#id AutomationRunbook#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.jobSchedule">job_schedule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#job_schedule AutomationRunbook#job_schedule}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.logActivityTraceLevel">log_activity_trace_level</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#log_activity_trace_level AutomationRunbook#log_activity_trace_level}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.publishContentLink">publish_content_link</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a></code> | publish_content_link block. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#tags AutomationRunbook#tags}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `automation_account_name`<sup>Required</sup> <a name="automation_account_name" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.automationAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#automation_account_name AutomationRunbook#automation_account_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#location AutomationRunbook#location}.

---

##### `log_progress`<sup>Required</sup> <a name="log_progress" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.logProgress"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#log_progress AutomationRunbook#log_progress}.

---

##### `log_verbose`<sup>Required</sup> <a name="log_verbose" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.logVerbose"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#log_verbose AutomationRunbook#log_verbose}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#name AutomationRunbook#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#resource_group_name AutomationRunbook#resource_group_name}.

---

##### `runbook_type`<sup>Required</sup> <a name="runbook_type" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.runbookType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#runbook_type AutomationRunbook#runbook_type}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#content AutomationRunbook#content}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#description AutomationRunbook#description}.

---

##### `draft`<sup>Optional</sup> <a name="draft" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.draft"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a>

draft block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#draft AutomationRunbook#draft}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#id AutomationRunbook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `job_schedule`<sup>Optional</sup> <a name="job_schedule" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.jobSchedule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#job_schedule AutomationRunbook#job_schedule}.

---

##### `log_activity_trace_level`<sup>Optional</sup> <a name="log_activity_trace_level" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.logActivityTraceLevel"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#log_activity_trace_level AutomationRunbook#log_activity_trace_level}.

---

##### `publish_content_link`<sup>Optional</sup> <a name="publish_content_link" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.publishContentLink"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a>

publish_content_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#publish_content_link AutomationRunbook#publish_content_link}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#tags AutomationRunbook#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#timeouts AutomationRunbook#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putDraft">put_draft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putJobSchedule">put_job_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putPublishContentLink">put_publish_content_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetDraft">reset_draft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetJobSchedule">reset_job_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetLogActivityTraceLevel">reset_log_activity_trace_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetPublishContentLink">reset_publish_content_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_draft` <a name="put_draft" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putDraft"></a>

```python
def put_draft(
  content_link: AutomationRunbookDraftContentLink = None,
  edit_mode_enabled: typing.Union[bool, IResolvable] = None,
  output_types: typing.List[str] = None,
  parameters: typing.Union[IResolvable, typing.List[AutomationRunbookDraftParameters]] = None
) -> None
```

###### `content_link`<sup>Optional</sup> <a name="content_link" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putDraft.parameter.contentLink"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a>

content_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#content_link AutomationRunbook#content_link}

---

###### `edit_mode_enabled`<sup>Optional</sup> <a name="edit_mode_enabled" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putDraft.parameter.editModeEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#edit_mode_enabled AutomationRunbook#edit_mode_enabled}.

---

###### `output_types`<sup>Optional</sup> <a name="output_types" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putDraft.parameter.outputTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#output_types AutomationRunbook#output_types}.

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putDraft.parameter.parameters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>]]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#parameters AutomationRunbook#parameters}

---

##### `put_job_schedule` <a name="put_job_schedule" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putJobSchedule"></a>

```python
def put_job_schedule(
  value: typing.Union[IResolvable, typing.List[AutomationRunbookJobSchedule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putJobSchedule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>]]

---

##### `put_publish_content_link` <a name="put_publish_content_link" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putPublishContentLink"></a>

```python
def put_publish_content_link(
  uri: str,
  hash: AutomationRunbookPublishContentLinkHash = None,
  version: str = None
) -> None
```

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putPublishContentLink.parameter.uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#uri AutomationRunbook#uri}.

---

###### `hash`<sup>Optional</sup> <a name="hash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putPublishContentLink.parameter.hash"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a>

hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#hash AutomationRunbook#hash}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putPublishContentLink.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#version AutomationRunbook#version}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#create AutomationRunbook#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#delete AutomationRunbook#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#read AutomationRunbook#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#update AutomationRunbook#update}.

---

##### `reset_content` <a name="reset_content" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_draft` <a name="reset_draft" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetDraft"></a>

```python
def reset_draft() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_job_schedule` <a name="reset_job_schedule" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetJobSchedule"></a>

```python
def reset_job_schedule() -> None
```

##### `reset_log_activity_trace_level` <a name="reset_log_activity_trace_level" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetLogActivityTraceLevel"></a>

```python
def reset_log_activity_trace_level() -> None
```

##### `reset_publish_content_link` <a name="reset_publish_content_link" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetPublishContentLink"></a>

```python
def reset_publish_content_link() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AutomationRunbook resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_runbook

automationRunbook.AutomationRunbook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_runbook

automationRunbook.AutomationRunbook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_runbook

automationRunbook.AutomationRunbook.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_runbook

automationRunbook.AutomationRunbook.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AutomationRunbook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AutomationRunbook to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AutomationRunbook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AutomationRunbook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.draft">draft</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference">AutomationRunbookDraftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.jobSchedule">job_schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList">AutomationRunbookJobScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.publishContentLink">publish_content_link</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference">AutomationRunbookPublishContentLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference">AutomationRunbookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.automationAccountNameInput">automation_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.draftInput">draft_input</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.jobScheduleInput">job_schedule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logActivityTraceLevelInput">log_activity_trace_level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logProgressInput">log_progress_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logVerboseInput">log_verbose_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.publishContentLinkInput">publish_content_link_input</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.runbookTypeInput">runbook_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.automationAccountName">automation_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logActivityTraceLevel">log_activity_trace_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logProgress">log_progress</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logVerbose">log_verbose</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.runbookType">runbook_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `draft`<sup>Required</sup> <a name="draft" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.draft"></a>

```python
draft: AutomationRunbookDraftOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference">AutomationRunbookDraftOutputReference</a>

---

##### `job_schedule`<sup>Required</sup> <a name="job_schedule" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.jobSchedule"></a>

```python
job_schedule: AutomationRunbookJobScheduleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList">AutomationRunbookJobScheduleList</a>

---

##### `publish_content_link`<sup>Required</sup> <a name="publish_content_link" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.publishContentLink"></a>

```python
publish_content_link: AutomationRunbookPublishContentLinkOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference">AutomationRunbookPublishContentLinkOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.timeouts"></a>

```python
timeouts: AutomationRunbookTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference">AutomationRunbookTimeoutsOutputReference</a>

---

##### `automation_account_name_input`<sup>Optional</sup> <a name="automation_account_name_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.automationAccountNameInput"></a>

```python
automation_account_name_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `draft_input`<sup>Optional</sup> <a name="draft_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.draftInput"></a>

```python
draft_input: AutomationRunbookDraft
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `job_schedule_input`<sup>Optional</sup> <a name="job_schedule_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.jobScheduleInput"></a>

```python
job_schedule_input: typing.Union[IResolvable, typing.List[AutomationRunbookJobSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>]]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `log_activity_trace_level_input`<sup>Optional</sup> <a name="log_activity_trace_level_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logActivityTraceLevelInput"></a>

```python
log_activity_trace_level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_progress_input`<sup>Optional</sup> <a name="log_progress_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logProgressInput"></a>

```python
log_progress_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_verbose_input`<sup>Optional</sup> <a name="log_verbose_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logVerboseInput"></a>

```python
log_verbose_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `publish_content_link_input`<sup>Optional</sup> <a name="publish_content_link_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.publishContentLinkInput"></a>

```python
publish_content_link_input: AutomationRunbookPublishContentLink
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a>

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `runbook_type_input`<sup>Optional</sup> <a name="runbook_type_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.runbookTypeInput"></a>

```python
runbook_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AutomationRunbookTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a>]

---

##### `automation_account_name`<sup>Required</sup> <a name="automation_account_name" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.automationAccountName"></a>

```python
automation_account_name: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `log_activity_trace_level`<sup>Required</sup> <a name="log_activity_trace_level" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logActivityTraceLevel"></a>

```python
log_activity_trace_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_progress`<sup>Required</sup> <a name="log_progress" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logProgress"></a>

```python
log_progress: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_verbose`<sup>Required</sup> <a name="log_verbose" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logVerbose"></a>

```python
log_verbose: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `runbook_type`<sup>Required</sup> <a name="runbook_type" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.runbookType"></a>

```python
runbook_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRunbookConfig <a name="AutomationRunbookConfig" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_runbook

automationRunbook.AutomationRunbookConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  automation_account_name: str,
  location: str,
  log_progress: typing.Union[bool, IResolvable],
  log_verbose: typing.Union[bool, IResolvable],
  name: str,
  resource_group_name: str,
  runbook_type: str,
  content: str = None,
  description: str = None,
  draft: AutomationRunbookDraft = None,
  id: str = None,
  job_schedule: typing.Union[IResolvable, typing.List[AutomationRunbookJobSchedule]] = None,
  log_activity_trace_level: typing.Union[int, float] = None,
  publish_content_link: AutomationRunbookPublishContentLink = None,
  tags: typing.Mapping[str] = None,
  timeouts: AutomationRunbookTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.automationAccountName">automation_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#automation_account_name AutomationRunbook#automation_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#location AutomationRunbook#location}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.logProgress">log_progress</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#log_progress AutomationRunbook#log_progress}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.logVerbose">log_verbose</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#log_verbose AutomationRunbook#log_verbose}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#name AutomationRunbook#name}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#resource_group_name AutomationRunbook#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.runbookType">runbook_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#runbook_type AutomationRunbook#runbook_type}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#content AutomationRunbook#content}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#description AutomationRunbook#description}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.draft">draft</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a></code> | draft block. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#id AutomationRunbook#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.jobSchedule">job_schedule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#job_schedule AutomationRunbook#job_schedule}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.logActivityTraceLevel">log_activity_trace_level</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#log_activity_trace_level AutomationRunbook#log_activity_trace_level}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.publishContentLink">publish_content_link</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a></code> | publish_content_link block. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#tags AutomationRunbook#tags}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `automation_account_name`<sup>Required</sup> <a name="automation_account_name" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.automationAccountName"></a>

```python
automation_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#automation_account_name AutomationRunbook#automation_account_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#location AutomationRunbook#location}.

---

##### `log_progress`<sup>Required</sup> <a name="log_progress" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.logProgress"></a>

```python
log_progress: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#log_progress AutomationRunbook#log_progress}.

---

##### `log_verbose`<sup>Required</sup> <a name="log_verbose" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.logVerbose"></a>

```python
log_verbose: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#log_verbose AutomationRunbook#log_verbose}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#name AutomationRunbook#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#resource_group_name AutomationRunbook#resource_group_name}.

---

##### `runbook_type`<sup>Required</sup> <a name="runbook_type" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.runbookType"></a>

```python
runbook_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#runbook_type AutomationRunbook#runbook_type}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#content AutomationRunbook#content}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#description AutomationRunbook#description}.

---

##### `draft`<sup>Optional</sup> <a name="draft" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.draft"></a>

```python
draft: AutomationRunbookDraft
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a>

draft block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#draft AutomationRunbook#draft}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#id AutomationRunbook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `job_schedule`<sup>Optional</sup> <a name="job_schedule" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.jobSchedule"></a>

```python
job_schedule: typing.Union[IResolvable, typing.List[AutomationRunbookJobSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#job_schedule AutomationRunbook#job_schedule}.

---

##### `log_activity_trace_level`<sup>Optional</sup> <a name="log_activity_trace_level" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.logActivityTraceLevel"></a>

```python
log_activity_trace_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#log_activity_trace_level AutomationRunbook#log_activity_trace_level}.

---

##### `publish_content_link`<sup>Optional</sup> <a name="publish_content_link" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.publishContentLink"></a>

```python
publish_content_link: AutomationRunbookPublishContentLink
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a>

publish_content_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#publish_content_link AutomationRunbook#publish_content_link}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#tags AutomationRunbook#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.timeouts"></a>

```python
timeouts: AutomationRunbookTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#timeouts AutomationRunbook#timeouts}

---

### AutomationRunbookDraft <a name="AutomationRunbookDraft" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_runbook

automationRunbook.AutomationRunbookDraft(
  content_link: AutomationRunbookDraftContentLink = None,
  edit_mode_enabled: typing.Union[bool, IResolvable] = None,
  output_types: typing.List[str] = None,
  parameters: typing.Union[IResolvable, typing.List[AutomationRunbookDraftParameters]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.contentLink">content_link</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a></code> | content_link block. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.editModeEnabled">edit_mode_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#edit_mode_enabled AutomationRunbook#edit_mode_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.outputTypes">output_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#output_types AutomationRunbook#output_types}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.parameters">parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>]]</code> | parameters block. |

---

##### `content_link`<sup>Optional</sup> <a name="content_link" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.contentLink"></a>

```python
content_link: AutomationRunbookDraftContentLink
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a>

content_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#content_link AutomationRunbook#content_link}

---

##### `edit_mode_enabled`<sup>Optional</sup> <a name="edit_mode_enabled" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.editModeEnabled"></a>

```python
edit_mode_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#edit_mode_enabled AutomationRunbook#edit_mode_enabled}.

---

##### `output_types`<sup>Optional</sup> <a name="output_types" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.outputTypes"></a>

```python
output_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#output_types AutomationRunbook#output_types}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.parameters"></a>

```python
parameters: typing.Union[IResolvable, typing.List[AutomationRunbookDraftParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>]]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#parameters AutomationRunbook#parameters}

---

### AutomationRunbookDraftContentLink <a name="AutomationRunbookDraftContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_runbook

automationRunbook.AutomationRunbookDraftContentLink(
  uri: str,
  hash: AutomationRunbookDraftContentLinkHash = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#uri AutomationRunbook#uri}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.property.hash">hash</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a></code> | hash block. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#version AutomationRunbook#version}. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#uri AutomationRunbook#uri}.

---

##### `hash`<sup>Optional</sup> <a name="hash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.property.hash"></a>

```python
hash: AutomationRunbookDraftContentLinkHash
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a>

hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#hash AutomationRunbook#hash}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#version AutomationRunbook#version}.

---

### AutomationRunbookDraftContentLinkHash <a name="AutomationRunbookDraftContentLinkHash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_runbook

automationRunbook.AutomationRunbookDraftContentLinkHash(
  algorithm: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash.property.algorithm">algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#algorithm AutomationRunbook#algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#value AutomationRunbook#value}. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#algorithm AutomationRunbook#algorithm}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#value AutomationRunbook#value}.

---

### AutomationRunbookDraftParameters <a name="AutomationRunbookDraftParameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_runbook

automationRunbook.AutomationRunbookDraftParameters(
  key: str,
  type: str,
  default_value: str = None,
  mandatory: typing.Union[bool, IResolvable] = None,
  position: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#key AutomationRunbook#key}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#type AutomationRunbook#type}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.defaultValue">default_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#default_value AutomationRunbook#default_value}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.mandatory">mandatory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#mandatory AutomationRunbook#mandatory}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#position AutomationRunbook#position}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#key AutomationRunbook#key}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#type AutomationRunbook#type}.

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#default_value AutomationRunbook#default_value}.

---

##### `mandatory`<sup>Optional</sup> <a name="mandatory" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.mandatory"></a>

```python
mandatory: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#mandatory AutomationRunbook#mandatory}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#position AutomationRunbook#position}.

---

### AutomationRunbookJobSchedule <a name="AutomationRunbookJobSchedule" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_runbook

automationRunbook.AutomationRunbookJobSchedule(
  job_schedule_id: str = None,
  parameters: typing.Mapping[str] = None,
  run_on: str = None,
  schedule_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.jobScheduleId">job_schedule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#job_schedule_id AutomationRunbook#job_schedule_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#parameters AutomationRunbook#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.runOn">run_on</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#run_on AutomationRunbook#run_on}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.scheduleName">schedule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#schedule_name AutomationRunbook#schedule_name}. |

---

##### `job_schedule_id`<sup>Optional</sup> <a name="job_schedule_id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.jobScheduleId"></a>

```python
job_schedule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#job_schedule_id AutomationRunbook#job_schedule_id}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#parameters AutomationRunbook#parameters}.

---

##### `run_on`<sup>Optional</sup> <a name="run_on" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.runOn"></a>

```python
run_on: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#run_on AutomationRunbook#run_on}.

---

##### `schedule_name`<sup>Optional</sup> <a name="schedule_name" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.scheduleName"></a>

```python
schedule_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#schedule_name AutomationRunbook#schedule_name}.

---

### AutomationRunbookPublishContentLink <a name="AutomationRunbookPublishContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_runbook

automationRunbook.AutomationRunbookPublishContentLink(
  uri: str,
  hash: AutomationRunbookPublishContentLinkHash = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#uri AutomationRunbook#uri}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.property.hash">hash</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a></code> | hash block. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#version AutomationRunbook#version}. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#uri AutomationRunbook#uri}.

---

##### `hash`<sup>Optional</sup> <a name="hash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.property.hash"></a>

```python
hash: AutomationRunbookPublishContentLinkHash
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a>

hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#hash AutomationRunbook#hash}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#version AutomationRunbook#version}.

---

### AutomationRunbookPublishContentLinkHash <a name="AutomationRunbookPublishContentLinkHash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_runbook

automationRunbook.AutomationRunbookPublishContentLinkHash(
  algorithm: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash.property.algorithm">algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#algorithm AutomationRunbook#algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#value AutomationRunbook#value}. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#algorithm AutomationRunbook#algorithm}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#value AutomationRunbook#value}.

---

### AutomationRunbookTimeouts <a name="AutomationRunbookTimeouts" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_runbook

automationRunbook.AutomationRunbookTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#create AutomationRunbook#create}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#delete AutomationRunbook#delete}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#read AutomationRunbook#read}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#update AutomationRunbook#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#create AutomationRunbook#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#delete AutomationRunbook#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#read AutomationRunbook#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#update AutomationRunbook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationRunbookDraftContentLinkHashOutputReference <a name="AutomationRunbookDraftContentLinkHashOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_runbook

automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.internalValue"></a>

```python
internal_value: AutomationRunbookDraftContentLinkHash
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a>

---


### AutomationRunbookDraftContentLinkOutputReference <a name="AutomationRunbookDraftContentLinkOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_runbook

automationRunbook.AutomationRunbookDraftContentLinkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.putHash">put_hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resetHash">reset_hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_hash` <a name="put_hash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.putHash"></a>

```python
def put_hash(
  algorithm: str,
  value: str
) -> None
```

###### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.putHash.parameter.algorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#algorithm AutomationRunbook#algorithm}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.putHash.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#value AutomationRunbook#value}.

---

##### `reset_hash` <a name="reset_hash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resetHash"></a>

```python
def reset_hash() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.hash">hash</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference">AutomationRunbookDraftContentLinkHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.hashInput">hash_input</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.hash"></a>

```python
hash: AutomationRunbookDraftContentLinkHashOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference">AutomationRunbookDraftContentLinkHashOutputReference</a>

---

##### `hash_input`<sup>Optional</sup> <a name="hash_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.hashInput"></a>

```python
hash_input: AutomationRunbookDraftContentLinkHash
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a>

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.internalValue"></a>

```python
internal_value: AutomationRunbookDraftContentLink
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a>

---


### AutomationRunbookDraftOutputReference <a name="AutomationRunbookDraftOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_runbook

automationRunbook.AutomationRunbookDraftOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putContentLink">put_content_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetContentLink">reset_content_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetEditModeEnabled">reset_edit_mode_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetOutputTypes">reset_output_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_content_link` <a name="put_content_link" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putContentLink"></a>

```python
def put_content_link(
  uri: str,
  hash: AutomationRunbookDraftContentLinkHash = None,
  version: str = None
) -> None
```

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putContentLink.parameter.uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#uri AutomationRunbook#uri}.

---

###### `hash`<sup>Optional</sup> <a name="hash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putContentLink.parameter.hash"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a>

hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#hash AutomationRunbook#hash}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putContentLink.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#version AutomationRunbook#version}.

---

##### `put_parameters` <a name="put_parameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putParameters"></a>

```python
def put_parameters(
  value: typing.Union[IResolvable, typing.List[AutomationRunbookDraftParameters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putParameters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>]]

---

##### `reset_content_link` <a name="reset_content_link" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetContentLink"></a>

```python
def reset_content_link() -> None
```

##### `reset_edit_mode_enabled` <a name="reset_edit_mode_enabled" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetEditModeEnabled"></a>

```python
def reset_edit_mode_enabled() -> None
```

##### `reset_output_types` <a name="reset_output_types" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetOutputTypes"></a>

```python
def reset_output_types() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.contentLink">content_link</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference">AutomationRunbookDraftContentLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList">AutomationRunbookDraftParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.contentLinkInput">content_link_input</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.editModeEnabledInput">edit_mode_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.outputTypesInput">output_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.editModeEnabled">edit_mode_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.outputTypes">output_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_link`<sup>Required</sup> <a name="content_link" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.contentLink"></a>

```python
content_link: AutomationRunbookDraftContentLinkOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference">AutomationRunbookDraftContentLinkOutputReference</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.parameters"></a>

```python
parameters: AutomationRunbookDraftParametersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList">AutomationRunbookDraftParametersList</a>

---

##### `content_link_input`<sup>Optional</sup> <a name="content_link_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.contentLinkInput"></a>

```python
content_link_input: AutomationRunbookDraftContentLink
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a>

---

##### `edit_mode_enabled_input`<sup>Optional</sup> <a name="edit_mode_enabled_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.editModeEnabledInput"></a>

```python
edit_mode_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `output_types_input`<sup>Optional</sup> <a name="output_types_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.outputTypesInput"></a>

```python
output_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Union[IResolvable, typing.List[AutomationRunbookDraftParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>]]

---

##### `edit_mode_enabled`<sup>Required</sup> <a name="edit_mode_enabled" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.editModeEnabled"></a>

```python
edit_mode_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `output_types`<sup>Required</sup> <a name="output_types" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.outputTypes"></a>

```python
output_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.internalValue"></a>

```python
internal_value: AutomationRunbookDraft
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a>

---


### AutomationRunbookDraftParametersList <a name="AutomationRunbookDraftParametersList" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_runbook

automationRunbook.AutomationRunbookDraftParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AutomationRunbookDraftParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AutomationRunbookDraftParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>]]

---


### AutomationRunbookDraftParametersOutputReference <a name="AutomationRunbookDraftParametersOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_runbook

automationRunbook.AutomationRunbookDraftParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resetMandatory">reset_mandatory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resetPosition">reset_position</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_value` <a name="reset_default_value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_mandatory` <a name="reset_mandatory" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resetMandatory"></a>

```python
def reset_mandatory() -> None
```

##### `reset_position` <a name="reset_position" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resetPosition"></a>

```python
def reset_position() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.defaultValueInput">default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.mandatoryInput">mandatory_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.mandatory">mandatory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.defaultValueInput"></a>

```python
default_value_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `mandatory_input`<sup>Optional</sup> <a name="mandatory_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.mandatoryInput"></a>

```python
mandatory_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `mandatory`<sup>Required</sup> <a name="mandatory" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.mandatory"></a>

```python
mandatory: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AutomationRunbookDraftParameters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>]

---


### AutomationRunbookJobScheduleList <a name="AutomationRunbookJobScheduleList" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_runbook

automationRunbook.AutomationRunbookJobScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AutomationRunbookJobScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AutomationRunbookJobSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>]]

---


### AutomationRunbookJobScheduleOutputReference <a name="AutomationRunbookJobScheduleOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_runbook

automationRunbook.AutomationRunbookJobScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetJobScheduleId">reset_job_schedule_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetRunOn">reset_run_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetScheduleName">reset_schedule_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_job_schedule_id` <a name="reset_job_schedule_id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetJobScheduleId"></a>

```python
def reset_job_schedule_id() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_run_on` <a name="reset_run_on" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetRunOn"></a>

```python
def reset_run_on() -> None
```

##### `reset_schedule_name` <a name="reset_schedule_name" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetScheduleName"></a>

```python
def reset_schedule_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.jobScheduleIdInput">job_schedule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.runOnInput">run_on_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.scheduleNameInput">schedule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.jobScheduleId">job_schedule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.runOn">run_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.scheduleName">schedule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `job_schedule_id_input`<sup>Optional</sup> <a name="job_schedule_id_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.jobScheduleIdInput"></a>

```python
job_schedule_id_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `run_on_input`<sup>Optional</sup> <a name="run_on_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.runOnInput"></a>

```python
run_on_input: str
```

- *Type:* str

---

##### `schedule_name_input`<sup>Optional</sup> <a name="schedule_name_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.scheduleNameInput"></a>

```python
schedule_name_input: str
```

- *Type:* str

---

##### `job_schedule_id`<sup>Required</sup> <a name="job_schedule_id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.jobScheduleId"></a>

```python
job_schedule_id: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `run_on`<sup>Required</sup> <a name="run_on" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.runOn"></a>

```python
run_on: str
```

- *Type:* str

---

##### `schedule_name`<sup>Required</sup> <a name="schedule_name" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.scheduleName"></a>

```python
schedule_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AutomationRunbookJobSchedule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>]

---


### AutomationRunbookPublishContentLinkHashOutputReference <a name="AutomationRunbookPublishContentLinkHashOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_runbook

automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.internalValue"></a>

```python
internal_value: AutomationRunbookPublishContentLinkHash
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a>

---


### AutomationRunbookPublishContentLinkOutputReference <a name="AutomationRunbookPublishContentLinkOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_runbook

automationRunbook.AutomationRunbookPublishContentLinkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.putHash">put_hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resetHash">reset_hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_hash` <a name="put_hash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.putHash"></a>

```python
def put_hash(
  algorithm: str,
  value: str
) -> None
```

###### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.putHash.parameter.algorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#algorithm AutomationRunbook#algorithm}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.putHash.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/automation_runbook#value AutomationRunbook#value}.

---

##### `reset_hash` <a name="reset_hash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resetHash"></a>

```python
def reset_hash() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.hash">hash</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference">AutomationRunbookPublishContentLinkHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.hashInput">hash_input</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.hash"></a>

```python
hash: AutomationRunbookPublishContentLinkHashOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference">AutomationRunbookPublishContentLinkHashOutputReference</a>

---

##### `hash_input`<sup>Optional</sup> <a name="hash_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.hashInput"></a>

```python
hash_input: AutomationRunbookPublishContentLinkHash
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a>

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.internalValue"></a>

```python
internal_value: AutomationRunbookPublishContentLink
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a>

---


### AutomationRunbookTimeoutsOutputReference <a name="AutomationRunbookTimeoutsOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_runbook

automationRunbook.AutomationRunbookTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AutomationRunbookTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a>]

---



