# `mssqlJobStep` Submodule <a name="`mssqlJobStep` Submodule" id="@cdktf/provider-azurerm.mssqlJobStep"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlJobStep <a name="MssqlJobStep" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step azurerm_mssql_job_step}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_job_step

mssqlJobStep.MssqlJobStep(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  job_credential_id: str,
  job_id: str,
  job_step_index: typing.Union[int, float],
  job_target_group_id: str,
  name: str,
  sql_script: str,
  id: str = None,
  initial_retry_interval_seconds: typing.Union[int, float] = None,
  maximum_retry_interval_seconds: typing.Union[int, float] = None,
  output_target: MssqlJobStepOutputTarget = None,
  retry_attempts: typing.Union[int, float] = None,
  retry_interval_backoff_multiplier: typing.Union[int, float] = None,
  timeouts: MssqlJobStepTimeouts = None,
  timeout_seconds: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.jobCredentialId">job_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#job_credential_id MssqlJobStep#job_credential_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.jobId">job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#job_id MssqlJobStep#job_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.jobStepIndex">job_step_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#job_step_index MssqlJobStep#job_step_index}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.jobTargetGroupId">job_target_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#job_target_group_id MssqlJobStep#job_target_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#name MssqlJobStep#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.sqlScript">sql_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#sql_script MssqlJobStep#sql_script}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#id MssqlJobStep#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.initialRetryIntervalSeconds">initial_retry_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#initial_retry_interval_seconds MssqlJobStep#initial_retry_interval_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.maximumRetryIntervalSeconds">maximum_retry_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#maximum_retry_interval_seconds MssqlJobStep#maximum_retry_interval_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.outputTarget">output_target</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a></code> | output_target block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.retryAttempts">retry_attempts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#retry_attempts MssqlJobStep#retry_attempts}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.retryIntervalBackoffMultiplier">retry_interval_backoff_multiplier</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#retry_interval_backoff_multiplier MssqlJobStep#retry_interval_backoff_multiplier}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#timeout_seconds MssqlJobStep#timeout_seconds}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `job_credential_id`<sup>Required</sup> <a name="job_credential_id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.jobCredentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#job_credential_id MssqlJobStep#job_credential_id}.

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.jobId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#job_id MssqlJobStep#job_id}.

---

##### `job_step_index`<sup>Required</sup> <a name="job_step_index" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.jobStepIndex"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#job_step_index MssqlJobStep#job_step_index}.

---

##### `job_target_group_id`<sup>Required</sup> <a name="job_target_group_id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.jobTargetGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#job_target_group_id MssqlJobStep#job_target_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#name MssqlJobStep#name}.

---

##### `sql_script`<sup>Required</sup> <a name="sql_script" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.sqlScript"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#sql_script MssqlJobStep#sql_script}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#id MssqlJobStep#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_retry_interval_seconds`<sup>Optional</sup> <a name="initial_retry_interval_seconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.initialRetryIntervalSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#initial_retry_interval_seconds MssqlJobStep#initial_retry_interval_seconds}.

---

##### `maximum_retry_interval_seconds`<sup>Optional</sup> <a name="maximum_retry_interval_seconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.maximumRetryIntervalSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#maximum_retry_interval_seconds MssqlJobStep#maximum_retry_interval_seconds}.

---

##### `output_target`<sup>Optional</sup> <a name="output_target" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.outputTarget"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a>

output_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#output_target MssqlJobStep#output_target}

---

##### `retry_attempts`<sup>Optional</sup> <a name="retry_attempts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.retryAttempts"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#retry_attempts MssqlJobStep#retry_attempts}.

---

##### `retry_interval_backoff_multiplier`<sup>Optional</sup> <a name="retry_interval_backoff_multiplier" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.retryIntervalBackoffMultiplier"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#retry_interval_backoff_multiplier MssqlJobStep#retry_interval_backoff_multiplier}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#timeouts MssqlJobStep#timeouts}

---

##### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.timeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#timeout_seconds MssqlJobStep#timeout_seconds}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putOutputTarget">put_output_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetInitialRetryIntervalSeconds">reset_initial_retry_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetMaximumRetryIntervalSeconds">reset_maximum_retry_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetOutputTarget">reset_output_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetRetryAttempts">reset_retry_attempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetRetryIntervalBackoffMultiplier">reset_retry_interval_backoff_multiplier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetTimeoutSeconds">reset_timeout_seconds</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_output_target` <a name="put_output_target" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putOutputTarget"></a>

```python
def put_output_target(
  job_credential_id: str,
  mssql_database_id: str,
  table_name: str,
  schema_name: str = None
) -> None
```

###### `job_credential_id`<sup>Required</sup> <a name="job_credential_id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putOutputTarget.parameter.jobCredentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#job_credential_id MssqlJobStep#job_credential_id}.

---

###### `mssql_database_id`<sup>Required</sup> <a name="mssql_database_id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putOutputTarget.parameter.mssqlDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#mssql_database_id MssqlJobStep#mssql_database_id}.

---

###### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putOutputTarget.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#table_name MssqlJobStep#table_name}.

---

###### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putOutputTarget.parameter.schemaName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#schema_name MssqlJobStep#schema_name}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#create MssqlJobStep#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#delete MssqlJobStep#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#read MssqlJobStep#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#update MssqlJobStep#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_initial_retry_interval_seconds` <a name="reset_initial_retry_interval_seconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetInitialRetryIntervalSeconds"></a>

```python
def reset_initial_retry_interval_seconds() -> None
```

##### `reset_maximum_retry_interval_seconds` <a name="reset_maximum_retry_interval_seconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetMaximumRetryIntervalSeconds"></a>

```python
def reset_maximum_retry_interval_seconds() -> None
```

##### `reset_output_target` <a name="reset_output_target" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetOutputTarget"></a>

```python
def reset_output_target() -> None
```

##### `reset_retry_attempts` <a name="reset_retry_attempts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetRetryAttempts"></a>

```python
def reset_retry_attempts() -> None
```

##### `reset_retry_interval_backoff_multiplier` <a name="reset_retry_interval_backoff_multiplier" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetRetryIntervalBackoffMultiplier"></a>

```python
def reset_retry_interval_backoff_multiplier() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_timeout_seconds` <a name="reset_timeout_seconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetTimeoutSeconds"></a>

```python
def reset_timeout_seconds() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MssqlJobStep resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_job_step

mssqlJobStep.MssqlJobStep.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_job_step

mssqlJobStep.MssqlJobStep.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_job_step

mssqlJobStep.MssqlJobStep.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_job_step

mssqlJobStep.MssqlJobStep.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MssqlJobStep resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MssqlJobStep to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MssqlJobStep that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MssqlJobStep to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.outputTarget">output_target</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference">MssqlJobStepOutputTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference">MssqlJobStepTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.initialRetryIntervalSecondsInput">initial_retry_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobCredentialIdInput">job_credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobIdInput">job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobStepIndexInput">job_step_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobTargetGroupIdInput">job_target_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.maximumRetryIntervalSecondsInput">maximum_retry_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.outputTargetInput">output_target_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryAttemptsInput">retry_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryIntervalBackoffMultiplierInput">retry_interval_backoff_multiplier_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.sqlScriptInput">sql_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeoutSecondsInput">timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.initialRetryIntervalSeconds">initial_retry_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobCredentialId">job_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobStepIndex">job_step_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobTargetGroupId">job_target_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.maximumRetryIntervalSeconds">maximum_retry_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryAttempts">retry_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryIntervalBackoffMultiplier">retry_interval_backoff_multiplier</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.sqlScript">sql_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `output_target`<sup>Required</sup> <a name="output_target" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.outputTarget"></a>

```python
output_target: MssqlJobStepOutputTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference">MssqlJobStepOutputTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeouts"></a>

```python
timeouts: MssqlJobStepTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference">MssqlJobStepTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `initial_retry_interval_seconds_input`<sup>Optional</sup> <a name="initial_retry_interval_seconds_input" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.initialRetryIntervalSecondsInput"></a>

```python
initial_retry_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `job_credential_id_input`<sup>Optional</sup> <a name="job_credential_id_input" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobCredentialIdInput"></a>

```python
job_credential_id_input: str
```

- *Type:* str

---

##### `job_id_input`<sup>Optional</sup> <a name="job_id_input" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobIdInput"></a>

```python
job_id_input: str
```

- *Type:* str

---

##### `job_step_index_input`<sup>Optional</sup> <a name="job_step_index_input" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobStepIndexInput"></a>

```python
job_step_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `job_target_group_id_input`<sup>Optional</sup> <a name="job_target_group_id_input" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobTargetGroupIdInput"></a>

```python
job_target_group_id_input: str
```

- *Type:* str

---

##### `maximum_retry_interval_seconds_input`<sup>Optional</sup> <a name="maximum_retry_interval_seconds_input" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.maximumRetryIntervalSecondsInput"></a>

```python
maximum_retry_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `output_target_input`<sup>Optional</sup> <a name="output_target_input" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.outputTargetInput"></a>

```python
output_target_input: MssqlJobStepOutputTarget
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a>

---

##### `retry_attempts_input`<sup>Optional</sup> <a name="retry_attempts_input" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryAttemptsInput"></a>

```python
retry_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_interval_backoff_multiplier_input`<sup>Optional</sup> <a name="retry_interval_backoff_multiplier_input" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryIntervalBackoffMultiplierInput"></a>

```python
retry_interval_backoff_multiplier_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sql_script_input`<sup>Optional</sup> <a name="sql_script_input" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.sqlScriptInput"></a>

```python
sql_script_input: str
```

- *Type:* str

---

##### `timeout_seconds_input`<sup>Optional</sup> <a name="timeout_seconds_input" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeoutSecondsInput"></a>

```python
timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MssqlJobStepTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `initial_retry_interval_seconds`<sup>Required</sup> <a name="initial_retry_interval_seconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.initialRetryIntervalSeconds"></a>

```python
initial_retry_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `job_credential_id`<sup>Required</sup> <a name="job_credential_id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobCredentialId"></a>

```python
job_credential_id: str
```

- *Type:* str

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `job_step_index`<sup>Required</sup> <a name="job_step_index" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobStepIndex"></a>

```python
job_step_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `job_target_group_id`<sup>Required</sup> <a name="job_target_group_id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobTargetGroupId"></a>

```python
job_target_group_id: str
```

- *Type:* str

---

##### `maximum_retry_interval_seconds`<sup>Required</sup> <a name="maximum_retry_interval_seconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.maximumRetryIntervalSeconds"></a>

```python
maximum_retry_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `retry_attempts`<sup>Required</sup> <a name="retry_attempts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryAttempts"></a>

```python
retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_interval_backoff_multiplier`<sup>Required</sup> <a name="retry_interval_backoff_multiplier" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryIntervalBackoffMultiplier"></a>

```python
retry_interval_backoff_multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sql_script`<sup>Required</sup> <a name="sql_script" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.sqlScript"></a>

```python
sql_script: str
```

- *Type:* str

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlJobStepConfig <a name="MssqlJobStepConfig" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_job_step

mssqlJobStep.MssqlJobStepConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  job_credential_id: str,
  job_id: str,
  job_step_index: typing.Union[int, float],
  job_target_group_id: str,
  name: str,
  sql_script: str,
  id: str = None,
  initial_retry_interval_seconds: typing.Union[int, float] = None,
  maximum_retry_interval_seconds: typing.Union[int, float] = None,
  output_target: MssqlJobStepOutputTarget = None,
  retry_attempts: typing.Union[int, float] = None,
  retry_interval_backoff_multiplier: typing.Union[int, float] = None,
  timeouts: MssqlJobStepTimeouts = None,
  timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobCredentialId">job_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#job_credential_id MssqlJobStep#job_credential_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobId">job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#job_id MssqlJobStep#job_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobStepIndex">job_step_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#job_step_index MssqlJobStep#job_step_index}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobTargetGroupId">job_target_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#job_target_group_id MssqlJobStep#job_target_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#name MssqlJobStep#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.sqlScript">sql_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#sql_script MssqlJobStep#sql_script}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#id MssqlJobStep#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.initialRetryIntervalSeconds">initial_retry_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#initial_retry_interval_seconds MssqlJobStep#initial_retry_interval_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.maximumRetryIntervalSeconds">maximum_retry_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#maximum_retry_interval_seconds MssqlJobStep#maximum_retry_interval_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.outputTarget">output_target</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a></code> | output_target block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.retryAttempts">retry_attempts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#retry_attempts MssqlJobStep#retry_attempts}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.retryIntervalBackoffMultiplier">retry_interval_backoff_multiplier</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#retry_interval_backoff_multiplier MssqlJobStep#retry_interval_backoff_multiplier}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#timeout_seconds MssqlJobStep#timeout_seconds}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `job_credential_id`<sup>Required</sup> <a name="job_credential_id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobCredentialId"></a>

```python
job_credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#job_credential_id MssqlJobStep#job_credential_id}.

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#job_id MssqlJobStep#job_id}.

---

##### `job_step_index`<sup>Required</sup> <a name="job_step_index" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobStepIndex"></a>

```python
job_step_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#job_step_index MssqlJobStep#job_step_index}.

---

##### `job_target_group_id`<sup>Required</sup> <a name="job_target_group_id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobTargetGroupId"></a>

```python
job_target_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#job_target_group_id MssqlJobStep#job_target_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#name MssqlJobStep#name}.

---

##### `sql_script`<sup>Required</sup> <a name="sql_script" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.sqlScript"></a>

```python
sql_script: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#sql_script MssqlJobStep#sql_script}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#id MssqlJobStep#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_retry_interval_seconds`<sup>Optional</sup> <a name="initial_retry_interval_seconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.initialRetryIntervalSeconds"></a>

```python
initial_retry_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#initial_retry_interval_seconds MssqlJobStep#initial_retry_interval_seconds}.

---

##### `maximum_retry_interval_seconds`<sup>Optional</sup> <a name="maximum_retry_interval_seconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.maximumRetryIntervalSeconds"></a>

```python
maximum_retry_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#maximum_retry_interval_seconds MssqlJobStep#maximum_retry_interval_seconds}.

---

##### `output_target`<sup>Optional</sup> <a name="output_target" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.outputTarget"></a>

```python
output_target: MssqlJobStepOutputTarget
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a>

output_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#output_target MssqlJobStep#output_target}

---

##### `retry_attempts`<sup>Optional</sup> <a name="retry_attempts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.retryAttempts"></a>

```python
retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#retry_attempts MssqlJobStep#retry_attempts}.

---

##### `retry_interval_backoff_multiplier`<sup>Optional</sup> <a name="retry_interval_backoff_multiplier" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.retryIntervalBackoffMultiplier"></a>

```python
retry_interval_backoff_multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#retry_interval_backoff_multiplier MssqlJobStep#retry_interval_backoff_multiplier}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.timeouts"></a>

```python
timeouts: MssqlJobStepTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#timeouts MssqlJobStep#timeouts}

---

##### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#timeout_seconds MssqlJobStep#timeout_seconds}.

---

### MssqlJobStepOutputTarget <a name="MssqlJobStepOutputTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_job_step

mssqlJobStep.MssqlJobStepOutputTarget(
  job_credential_id: str,
  mssql_database_id: str,
  table_name: str,
  schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.jobCredentialId">job_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#job_credential_id MssqlJobStep#job_credential_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.mssqlDatabaseId">mssql_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#mssql_database_id MssqlJobStep#mssql_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#table_name MssqlJobStep#table_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#schema_name MssqlJobStep#schema_name}. |

---

##### `job_credential_id`<sup>Required</sup> <a name="job_credential_id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.jobCredentialId"></a>

```python
job_credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#job_credential_id MssqlJobStep#job_credential_id}.

---

##### `mssql_database_id`<sup>Required</sup> <a name="mssql_database_id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.mssqlDatabaseId"></a>

```python
mssql_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#mssql_database_id MssqlJobStep#mssql_database_id}.

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#table_name MssqlJobStep#table_name}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#schema_name MssqlJobStep#schema_name}.

---

### MssqlJobStepTimeouts <a name="MssqlJobStepTimeouts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_job_step

mssqlJobStep.MssqlJobStepTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#create MssqlJobStep#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#delete MssqlJobStep#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#read MssqlJobStep#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#update MssqlJobStep#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#create MssqlJobStep#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#delete MssqlJobStep#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#read MssqlJobStep#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_job_step#update MssqlJobStep#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlJobStepOutputTargetOutputReference <a name="MssqlJobStepOutputTargetOutputReference" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_job_step

mssqlJobStep.MssqlJobStepOutputTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.jobCredentialIdInput">job_credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.mssqlDatabaseIdInput">mssql_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.jobCredentialId">job_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.mssqlDatabaseId">mssql_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `job_credential_id_input`<sup>Optional</sup> <a name="job_credential_id_input" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.jobCredentialIdInput"></a>

```python
job_credential_id_input: str
```

- *Type:* str

---

##### `mssql_database_id_input`<sup>Optional</sup> <a name="mssql_database_id_input" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.mssqlDatabaseIdInput"></a>

```python
mssql_database_id_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `job_credential_id`<sup>Required</sup> <a name="job_credential_id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.jobCredentialId"></a>

```python
job_credential_id: str
```

- *Type:* str

---

##### `mssql_database_id`<sup>Required</sup> <a name="mssql_database_id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.mssqlDatabaseId"></a>

```python
mssql_database_id: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.internalValue"></a>

```python
internal_value: MssqlJobStepOutputTarget
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a>

---


### MssqlJobStepTimeoutsOutputReference <a name="MssqlJobStepTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_job_step

mssqlJobStep.MssqlJobStepTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MssqlJobStepTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a>]

---



