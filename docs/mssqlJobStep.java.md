# `mssqlJobStep` Submodule <a name="`mssqlJobStep` Submodule" id="@cdktf/provider-azurerm.mssqlJobStep"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlJobStep <a name="MssqlJobStep" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step azurerm_mssql_job_step}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_job_step.MssqlJobStep;

MssqlJobStep.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .jobId(java.lang.String)
    .jobStepIndex(java.lang.Number)
    .jobTargetGroupId(java.lang.String)
    .name(java.lang.String)
    .sqlScript(java.lang.String)
//  .id(java.lang.String)
//  .initialRetryIntervalSeconds(java.lang.Number)
//  .jobCredentialId(java.lang.String)
//  .maximumRetryIntervalSeconds(java.lang.Number)
//  .outputTarget(MssqlJobStepOutputTarget)
//  .retryAttempts(java.lang.Number)
//  .retryIntervalBackoffMultiplier(java.lang.Number)
//  .timeouts(MssqlJobStepTimeouts)
//  .timeoutSeconds(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.jobId">jobId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#job_id MssqlJobStep#job_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.jobStepIndex">jobStepIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#job_step_index MssqlJobStep#job_step_index}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.jobTargetGroupId">jobTargetGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#job_target_group_id MssqlJobStep#job_target_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#name MssqlJobStep#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.sqlScript">sqlScript</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#sql_script MssqlJobStep#sql_script}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#id MssqlJobStep#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.initialRetryIntervalSeconds">initialRetryIntervalSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#initial_retry_interval_seconds MssqlJobStep#initial_retry_interval_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.jobCredentialId">jobCredentialId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#job_credential_id MssqlJobStep#job_credential_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.maximumRetryIntervalSeconds">maximumRetryIntervalSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#maximum_retry_interval_seconds MssqlJobStep#maximum_retry_interval_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.outputTarget">outputTarget</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a></code> | output_target block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.retryAttempts">retryAttempts</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#retry_attempts MssqlJobStep#retry_attempts}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.retryIntervalBackoffMultiplier">retryIntervalBackoffMultiplier</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#retry_interval_backoff_multiplier MssqlJobStep#retry_interval_backoff_multiplier}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#timeout_seconds MssqlJobStep#timeout_seconds}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.jobId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#job_id MssqlJobStep#job_id}.

---

##### `jobStepIndex`<sup>Required</sup> <a name="jobStepIndex" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.jobStepIndex"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#job_step_index MssqlJobStep#job_step_index}.

---

##### `jobTargetGroupId`<sup>Required</sup> <a name="jobTargetGroupId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.jobTargetGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#job_target_group_id MssqlJobStep#job_target_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#name MssqlJobStep#name}.

---

##### `sqlScript`<sup>Required</sup> <a name="sqlScript" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.sqlScript"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#sql_script MssqlJobStep#sql_script}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#id MssqlJobStep#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialRetryIntervalSeconds`<sup>Optional</sup> <a name="initialRetryIntervalSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.initialRetryIntervalSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#initial_retry_interval_seconds MssqlJobStep#initial_retry_interval_seconds}.

---

##### `jobCredentialId`<sup>Optional</sup> <a name="jobCredentialId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.jobCredentialId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#job_credential_id MssqlJobStep#job_credential_id}.

---

##### `maximumRetryIntervalSeconds`<sup>Optional</sup> <a name="maximumRetryIntervalSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.maximumRetryIntervalSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#maximum_retry_interval_seconds MssqlJobStep#maximum_retry_interval_seconds}.

---

##### `outputTarget`<sup>Optional</sup> <a name="outputTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.outputTarget"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a>

output_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#output_target MssqlJobStep#output_target}

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.retryAttempts"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#retry_attempts MssqlJobStep#retry_attempts}.

---

##### `retryIntervalBackoffMultiplier`<sup>Optional</sup> <a name="retryIntervalBackoffMultiplier" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.retryIntervalBackoffMultiplier"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#retry_interval_backoff_multiplier MssqlJobStep#retry_interval_backoff_multiplier}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#timeouts MssqlJobStep#timeouts}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.timeoutSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#timeout_seconds MssqlJobStep#timeout_seconds}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putOutputTarget">putOutputTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetInitialRetryIntervalSeconds">resetInitialRetryIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetJobCredentialId">resetJobCredentialId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetMaximumRetryIntervalSeconds">resetMaximumRetryIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetOutputTarget">resetOutputTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetRetryAttempts">resetRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetRetryIntervalBackoffMultiplier">resetRetryIntervalBackoffMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOutputTarget` <a name="putOutputTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putOutputTarget"></a>

```java
public void putOutputTarget(MssqlJobStepOutputTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putOutputTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putTimeouts"></a>

```java
public void putTimeouts(MssqlJobStepTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetId"></a>

```java
public void resetId()
```

##### `resetInitialRetryIntervalSeconds` <a name="resetInitialRetryIntervalSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetInitialRetryIntervalSeconds"></a>

```java
public void resetInitialRetryIntervalSeconds()
```

##### `resetJobCredentialId` <a name="resetJobCredentialId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetJobCredentialId"></a>

```java
public void resetJobCredentialId()
```

##### `resetMaximumRetryIntervalSeconds` <a name="resetMaximumRetryIntervalSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetMaximumRetryIntervalSeconds"></a>

```java
public void resetMaximumRetryIntervalSeconds()
```

##### `resetOutputTarget` <a name="resetOutputTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetOutputTarget"></a>

```java
public void resetOutputTarget()
```

##### `resetRetryAttempts` <a name="resetRetryAttempts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetRetryAttempts"></a>

```java
public void resetRetryAttempts()
```

##### `resetRetryIntervalBackoffMultiplier` <a name="resetRetryIntervalBackoffMultiplier" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetRetryIntervalBackoffMultiplier"></a>

```java
public void resetRetryIntervalBackoffMultiplier()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetTimeoutSeconds"></a>

```java
public void resetTimeoutSeconds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlJobStep resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_job_step.MssqlJobStep;

MssqlJobStep.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_job_step.MssqlJobStep;

MssqlJobStep.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_job_step.MssqlJobStep;

MssqlJobStep.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_job_step.MssqlJobStep;

MssqlJobStep.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MssqlJobStep.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MssqlJobStep resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MssqlJobStep to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MssqlJobStep that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MssqlJobStep to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.outputTarget">outputTarget</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference">MssqlJobStepOutputTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference">MssqlJobStepTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.initialRetryIntervalSecondsInput">initialRetryIntervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobCredentialIdInput">jobCredentialIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobIdInput">jobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobStepIndexInput">jobStepIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobTargetGroupIdInput">jobTargetGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.maximumRetryIntervalSecondsInput">maximumRetryIntervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.outputTargetInput">outputTargetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryAttemptsInput">retryAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryIntervalBackoffMultiplierInput">retryIntervalBackoffMultiplierInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.sqlScriptInput">sqlScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.initialRetryIntervalSeconds">initialRetryIntervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobCredentialId">jobCredentialId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobStepIndex">jobStepIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobTargetGroupId">jobTargetGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.maximumRetryIntervalSeconds">maximumRetryIntervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryAttempts">retryAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryIntervalBackoffMultiplier">retryIntervalBackoffMultiplier</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.sqlScript">sqlScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `outputTarget`<sup>Required</sup> <a name="outputTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.outputTarget"></a>

```java
public MssqlJobStepOutputTargetOutputReference getOutputTarget();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference">MssqlJobStepOutputTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeouts"></a>

```java
public MssqlJobStepTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference">MssqlJobStepTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `initialRetryIntervalSecondsInput`<sup>Optional</sup> <a name="initialRetryIntervalSecondsInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.initialRetryIntervalSecondsInput"></a>

```java
public java.lang.Number getInitialRetryIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `jobCredentialIdInput`<sup>Optional</sup> <a name="jobCredentialIdInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobCredentialIdInput"></a>

```java
public java.lang.String getJobCredentialIdInput();
```

- *Type:* java.lang.String

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobIdInput"></a>

```java
public java.lang.String getJobIdInput();
```

- *Type:* java.lang.String

---

##### `jobStepIndexInput`<sup>Optional</sup> <a name="jobStepIndexInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobStepIndexInput"></a>

```java
public java.lang.Number getJobStepIndexInput();
```

- *Type:* java.lang.Number

---

##### `jobTargetGroupIdInput`<sup>Optional</sup> <a name="jobTargetGroupIdInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobTargetGroupIdInput"></a>

```java
public java.lang.String getJobTargetGroupIdInput();
```

- *Type:* java.lang.String

---

##### `maximumRetryIntervalSecondsInput`<sup>Optional</sup> <a name="maximumRetryIntervalSecondsInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.maximumRetryIntervalSecondsInput"></a>

```java
public java.lang.Number getMaximumRetryIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `outputTargetInput`<sup>Optional</sup> <a name="outputTargetInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.outputTargetInput"></a>

```java
public MssqlJobStepOutputTarget getOutputTargetInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a>

---

##### `retryAttemptsInput`<sup>Optional</sup> <a name="retryAttemptsInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryAttemptsInput"></a>

```java
public java.lang.Number getRetryAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `retryIntervalBackoffMultiplierInput`<sup>Optional</sup> <a name="retryIntervalBackoffMultiplierInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryIntervalBackoffMultiplierInput"></a>

```java
public java.lang.Number getRetryIntervalBackoffMultiplierInput();
```

- *Type:* java.lang.Number

---

##### `sqlScriptInput`<sup>Optional</sup> <a name="sqlScriptInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.sqlScriptInput"></a>

```java
public java.lang.String getSqlScriptInput();
```

- *Type:* java.lang.String

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeoutSecondsInput"></a>

```java
public java.lang.Number getTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `initialRetryIntervalSeconds`<sup>Required</sup> <a name="initialRetryIntervalSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.initialRetryIntervalSeconds"></a>

```java
public java.lang.Number getInitialRetryIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `jobCredentialId`<sup>Required</sup> <a name="jobCredentialId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobCredentialId"></a>

```java
public java.lang.String getJobCredentialId();
```

- *Type:* java.lang.String

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `jobStepIndex`<sup>Required</sup> <a name="jobStepIndex" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobStepIndex"></a>

```java
public java.lang.Number getJobStepIndex();
```

- *Type:* java.lang.Number

---

##### `jobTargetGroupId`<sup>Required</sup> <a name="jobTargetGroupId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobTargetGroupId"></a>

```java
public java.lang.String getJobTargetGroupId();
```

- *Type:* java.lang.String

---

##### `maximumRetryIntervalSeconds`<sup>Required</sup> <a name="maximumRetryIntervalSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.maximumRetryIntervalSeconds"></a>

```java
public java.lang.Number getMaximumRetryIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `retryAttempts`<sup>Required</sup> <a name="retryAttempts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryAttempts"></a>

```java
public java.lang.Number getRetryAttempts();
```

- *Type:* java.lang.Number

---

##### `retryIntervalBackoffMultiplier`<sup>Required</sup> <a name="retryIntervalBackoffMultiplier" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryIntervalBackoffMultiplier"></a>

```java
public java.lang.Number getRetryIntervalBackoffMultiplier();
```

- *Type:* java.lang.Number

---

##### `sqlScript`<sup>Required</sup> <a name="sqlScript" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.sqlScript"></a>

```java
public java.lang.String getSqlScript();
```

- *Type:* java.lang.String

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlJobStepConfig <a name="MssqlJobStepConfig" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_job_step.MssqlJobStepConfig;

MssqlJobStepConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .jobId(java.lang.String)
    .jobStepIndex(java.lang.Number)
    .jobTargetGroupId(java.lang.String)
    .name(java.lang.String)
    .sqlScript(java.lang.String)
//  .id(java.lang.String)
//  .initialRetryIntervalSeconds(java.lang.Number)
//  .jobCredentialId(java.lang.String)
//  .maximumRetryIntervalSeconds(java.lang.Number)
//  .outputTarget(MssqlJobStepOutputTarget)
//  .retryAttempts(java.lang.Number)
//  .retryIntervalBackoffMultiplier(java.lang.Number)
//  .timeouts(MssqlJobStepTimeouts)
//  .timeoutSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobId">jobId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#job_id MssqlJobStep#job_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobStepIndex">jobStepIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#job_step_index MssqlJobStep#job_step_index}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobTargetGroupId">jobTargetGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#job_target_group_id MssqlJobStep#job_target_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#name MssqlJobStep#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.sqlScript">sqlScript</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#sql_script MssqlJobStep#sql_script}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#id MssqlJobStep#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.initialRetryIntervalSeconds">initialRetryIntervalSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#initial_retry_interval_seconds MssqlJobStep#initial_retry_interval_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobCredentialId">jobCredentialId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#job_credential_id MssqlJobStep#job_credential_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.maximumRetryIntervalSeconds">maximumRetryIntervalSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#maximum_retry_interval_seconds MssqlJobStep#maximum_retry_interval_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.outputTarget">outputTarget</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a></code> | output_target block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.retryAttempts">retryAttempts</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#retry_attempts MssqlJobStep#retry_attempts}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.retryIntervalBackoffMultiplier">retryIntervalBackoffMultiplier</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#retry_interval_backoff_multiplier MssqlJobStep#retry_interval_backoff_multiplier}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#timeout_seconds MssqlJobStep#timeout_seconds}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#job_id MssqlJobStep#job_id}.

---

##### `jobStepIndex`<sup>Required</sup> <a name="jobStepIndex" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobStepIndex"></a>

```java
public java.lang.Number getJobStepIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#job_step_index MssqlJobStep#job_step_index}.

---

##### `jobTargetGroupId`<sup>Required</sup> <a name="jobTargetGroupId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobTargetGroupId"></a>

```java
public java.lang.String getJobTargetGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#job_target_group_id MssqlJobStep#job_target_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#name MssqlJobStep#name}.

---

##### `sqlScript`<sup>Required</sup> <a name="sqlScript" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.sqlScript"></a>

```java
public java.lang.String getSqlScript();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#sql_script MssqlJobStep#sql_script}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#id MssqlJobStep#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialRetryIntervalSeconds`<sup>Optional</sup> <a name="initialRetryIntervalSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.initialRetryIntervalSeconds"></a>

```java
public java.lang.Number getInitialRetryIntervalSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#initial_retry_interval_seconds MssqlJobStep#initial_retry_interval_seconds}.

---

##### `jobCredentialId`<sup>Optional</sup> <a name="jobCredentialId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobCredentialId"></a>

```java
public java.lang.String getJobCredentialId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#job_credential_id MssqlJobStep#job_credential_id}.

---

##### `maximumRetryIntervalSeconds`<sup>Optional</sup> <a name="maximumRetryIntervalSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.maximumRetryIntervalSeconds"></a>

```java
public java.lang.Number getMaximumRetryIntervalSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#maximum_retry_interval_seconds MssqlJobStep#maximum_retry_interval_seconds}.

---

##### `outputTarget`<sup>Optional</sup> <a name="outputTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.outputTarget"></a>

```java
public MssqlJobStepOutputTarget getOutputTarget();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a>

output_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#output_target MssqlJobStep#output_target}

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.retryAttempts"></a>

```java
public java.lang.Number getRetryAttempts();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#retry_attempts MssqlJobStep#retry_attempts}.

---

##### `retryIntervalBackoffMultiplier`<sup>Optional</sup> <a name="retryIntervalBackoffMultiplier" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.retryIntervalBackoffMultiplier"></a>

```java
public java.lang.Number getRetryIntervalBackoffMultiplier();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#retry_interval_backoff_multiplier MssqlJobStep#retry_interval_backoff_multiplier}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.timeouts"></a>

```java
public MssqlJobStepTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#timeouts MssqlJobStep#timeouts}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#timeout_seconds MssqlJobStep#timeout_seconds}.

---

### MssqlJobStepOutputTarget <a name="MssqlJobStepOutputTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_job_step.MssqlJobStepOutputTarget;

MssqlJobStepOutputTarget.builder()
    .mssqlDatabaseId(java.lang.String)
    .tableName(java.lang.String)
//  .jobCredentialId(java.lang.String)
//  .schemaName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.mssqlDatabaseId">mssqlDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#mssql_database_id MssqlJobStep#mssql_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#table_name MssqlJobStep#table_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.jobCredentialId">jobCredentialId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#job_credential_id MssqlJobStep#job_credential_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#schema_name MssqlJobStep#schema_name}. |

---

##### `mssqlDatabaseId`<sup>Required</sup> <a name="mssqlDatabaseId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.mssqlDatabaseId"></a>

```java
public java.lang.String getMssqlDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#mssql_database_id MssqlJobStep#mssql_database_id}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#table_name MssqlJobStep#table_name}.

---

##### `jobCredentialId`<sup>Optional</sup> <a name="jobCredentialId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.jobCredentialId"></a>

```java
public java.lang.String getJobCredentialId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#job_credential_id MssqlJobStep#job_credential_id}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#schema_name MssqlJobStep#schema_name}.

---

### MssqlJobStepTimeouts <a name="MssqlJobStepTimeouts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_job_step.MssqlJobStepTimeouts;

MssqlJobStepTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#create MssqlJobStep#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#delete MssqlJobStep#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#read MssqlJobStep#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#update MssqlJobStep#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#create MssqlJobStep#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#delete MssqlJobStep#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#read MssqlJobStep#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_job_step#update MssqlJobStep#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlJobStepOutputTargetOutputReference <a name="MssqlJobStepOutputTargetOutputReference" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_job_step.MssqlJobStepOutputTargetOutputReference;

new MssqlJobStepOutputTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.resetJobCredentialId">resetJobCredentialId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJobCredentialId` <a name="resetJobCredentialId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.resetJobCredentialId"></a>

```java
public void resetJobCredentialId()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.resetSchemaName"></a>

```java
public void resetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.jobCredentialIdInput">jobCredentialIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.mssqlDatabaseIdInput">mssqlDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.jobCredentialId">jobCredentialId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.mssqlDatabaseId">mssqlDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jobCredentialIdInput`<sup>Optional</sup> <a name="jobCredentialIdInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.jobCredentialIdInput"></a>

```java
public java.lang.String getJobCredentialIdInput();
```

- *Type:* java.lang.String

---

##### `mssqlDatabaseIdInput`<sup>Optional</sup> <a name="mssqlDatabaseIdInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.mssqlDatabaseIdInput"></a>

```java
public java.lang.String getMssqlDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `jobCredentialId`<sup>Required</sup> <a name="jobCredentialId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.jobCredentialId"></a>

```java
public java.lang.String getJobCredentialId();
```

- *Type:* java.lang.String

---

##### `mssqlDatabaseId`<sup>Required</sup> <a name="mssqlDatabaseId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.mssqlDatabaseId"></a>

```java
public java.lang.String getMssqlDatabaseId();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.internalValue"></a>

```java
public MssqlJobStepOutputTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a>

---


### MssqlJobStepTimeoutsOutputReference <a name="MssqlJobStepTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_job_step.MssqlJobStepTimeoutsOutputReference;

new MssqlJobStepTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a>

---



