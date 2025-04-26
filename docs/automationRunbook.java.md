# `automationRunbook` Submodule <a name="`automationRunbook` Submodule" id="@cdktf/provider-azurerm.automationRunbook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRunbook <a name="AutomationRunbook" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook azurerm_automation_runbook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_runbook.AutomationRunbook;

AutomationRunbook.Builder.create(Construct scope, java.lang.String id)
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
    .automationAccountName(java.lang.String)
    .location(java.lang.String)
    .logProgress(java.lang.Boolean)
    .logProgress(IResolvable)
    .logVerbose(java.lang.Boolean)
    .logVerbose(IResolvable)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .runbookType(java.lang.String)
//  .content(java.lang.String)
//  .description(java.lang.String)
//  .draft(AutomationRunbookDraft)
//  .id(java.lang.String)
//  .jobSchedule(IResolvable)
//  .jobSchedule(java.util.List<AutomationRunbookJobSchedule>)
//  .logActivityTraceLevel(java.lang.Number)
//  .publishContentLink(AutomationRunbookPublishContentLink)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AutomationRunbookTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.automationAccountName">automationAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#automation_account_name AutomationRunbook#automation_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#location AutomationRunbook#location}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.logProgress">logProgress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#log_progress AutomationRunbook#log_progress}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.logVerbose">logVerbose</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#log_verbose AutomationRunbook#log_verbose}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#name AutomationRunbook#name}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#resource_group_name AutomationRunbook#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.runbookType">runbookType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#runbook_type AutomationRunbook#runbook_type}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#content AutomationRunbook#content}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#description AutomationRunbook#description}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.draft">draft</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a></code> | draft block. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#id AutomationRunbook#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.jobSchedule">jobSchedule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#job_schedule AutomationRunbook#job_schedule}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.logActivityTraceLevel">logActivityTraceLevel</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#log_activity_trace_level AutomationRunbook#log_activity_trace_level}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.publishContentLink">publishContentLink</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a></code> | publish_content_link block. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#tags AutomationRunbook#tags}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `automationAccountName`<sup>Required</sup> <a name="automationAccountName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.automationAccountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#automation_account_name AutomationRunbook#automation_account_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#location AutomationRunbook#location}.

---

##### `logProgress`<sup>Required</sup> <a name="logProgress" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.logProgress"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#log_progress AutomationRunbook#log_progress}.

---

##### `logVerbose`<sup>Required</sup> <a name="logVerbose" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.logVerbose"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#log_verbose AutomationRunbook#log_verbose}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#name AutomationRunbook#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#resource_group_name AutomationRunbook#resource_group_name}.

---

##### `runbookType`<sup>Required</sup> <a name="runbookType" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.runbookType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#runbook_type AutomationRunbook#runbook_type}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.content"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#content AutomationRunbook#content}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#description AutomationRunbook#description}.

---

##### `draft`<sup>Optional</sup> <a name="draft" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.draft"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a>

draft block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#draft AutomationRunbook#draft}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#id AutomationRunbook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jobSchedule`<sup>Optional</sup> <a name="jobSchedule" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.jobSchedule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#job_schedule AutomationRunbook#job_schedule}.

---

##### `logActivityTraceLevel`<sup>Optional</sup> <a name="logActivityTraceLevel" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.logActivityTraceLevel"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#log_activity_trace_level AutomationRunbook#log_activity_trace_level}.

---

##### `publishContentLink`<sup>Optional</sup> <a name="publishContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.publishContentLink"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a>

publish_content_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#publish_content_link AutomationRunbook#publish_content_link}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#tags AutomationRunbook#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#timeouts AutomationRunbook#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putDraft">putDraft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putJobSchedule">putJobSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putPublishContentLink">putPublishContentLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetDraft">resetDraft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetJobSchedule">resetJobSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetLogActivityTraceLevel">resetLogActivityTraceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetPublishContentLink">resetPublishContentLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDraft` <a name="putDraft" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putDraft"></a>

```java
public void putDraft(AutomationRunbookDraft value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putDraft.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a>

---

##### `putJobSchedule` <a name="putJobSchedule" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putJobSchedule"></a>

```java
public void putJobSchedule(IResolvable OR java.util.List<AutomationRunbookJobSchedule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putJobSchedule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>>

---

##### `putPublishContentLink` <a name="putPublishContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putPublishContentLink"></a>

```java
public void putPublishContentLink(AutomationRunbookPublishContentLink value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putPublishContentLink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putTimeouts"></a>

```java
public void putTimeouts(AutomationRunbookTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a>

---

##### `resetContent` <a name="resetContent" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetContent"></a>

```java
public void resetContent()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDraft` <a name="resetDraft" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetDraft"></a>

```java
public void resetDraft()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetId"></a>

```java
public void resetId()
```

##### `resetJobSchedule` <a name="resetJobSchedule" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetJobSchedule"></a>

```java
public void resetJobSchedule()
```

##### `resetLogActivityTraceLevel` <a name="resetLogActivityTraceLevel" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetLogActivityTraceLevel"></a>

```java
public void resetLogActivityTraceLevel()
```

##### `resetPublishContentLink` <a name="resetPublishContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetPublishContentLink"></a>

```java
public void resetPublishContentLink()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AutomationRunbook resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_runbook.AutomationRunbook;

AutomationRunbook.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_runbook.AutomationRunbook;

AutomationRunbook.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_runbook.AutomationRunbook;

AutomationRunbook.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_runbook.AutomationRunbook;

AutomationRunbook.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AutomationRunbook.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AutomationRunbook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AutomationRunbook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AutomationRunbook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AutomationRunbook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.draft">draft</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference">AutomationRunbookDraftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.jobSchedule">jobSchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList">AutomationRunbookJobScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.publishContentLink">publishContentLink</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference">AutomationRunbookPublishContentLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference">AutomationRunbookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.automationAccountNameInput">automationAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.draftInput">draftInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.jobScheduleInput">jobScheduleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logActivityTraceLevelInput">logActivityTraceLevelInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logProgressInput">logProgressInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logVerboseInput">logVerboseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.publishContentLinkInput">publishContentLinkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.runbookTypeInput">runbookTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.automationAccountName">automationAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logActivityTraceLevel">logActivityTraceLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logProgress">logProgress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logVerbose">logVerbose</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.runbookType">runbookType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `draft`<sup>Required</sup> <a name="draft" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.draft"></a>

```java
public AutomationRunbookDraftOutputReference getDraft();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference">AutomationRunbookDraftOutputReference</a>

---

##### `jobSchedule`<sup>Required</sup> <a name="jobSchedule" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.jobSchedule"></a>

```java
public AutomationRunbookJobScheduleList getJobSchedule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList">AutomationRunbookJobScheduleList</a>

---

##### `publishContentLink`<sup>Required</sup> <a name="publishContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.publishContentLink"></a>

```java
public AutomationRunbookPublishContentLinkOutputReference getPublishContentLink();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference">AutomationRunbookPublishContentLinkOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.timeouts"></a>

```java
public AutomationRunbookTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference">AutomationRunbookTimeoutsOutputReference</a>

---

##### `automationAccountNameInput`<sup>Optional</sup> <a name="automationAccountNameInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.automationAccountNameInput"></a>

```java
public java.lang.String getAutomationAccountNameInput();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `draftInput`<sup>Optional</sup> <a name="draftInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.draftInput"></a>

```java
public AutomationRunbookDraft getDraftInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `jobScheduleInput`<sup>Optional</sup> <a name="jobScheduleInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.jobScheduleInput"></a>

```java
public java.lang.Object getJobScheduleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `logActivityTraceLevelInput`<sup>Optional</sup> <a name="logActivityTraceLevelInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logActivityTraceLevelInput"></a>

```java
public java.lang.Number getLogActivityTraceLevelInput();
```

- *Type:* java.lang.Number

---

##### `logProgressInput`<sup>Optional</sup> <a name="logProgressInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logProgressInput"></a>

```java
public java.lang.Object getLogProgressInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logVerboseInput`<sup>Optional</sup> <a name="logVerboseInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logVerboseInput"></a>

```java
public java.lang.Object getLogVerboseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `publishContentLinkInput`<sup>Optional</sup> <a name="publishContentLinkInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.publishContentLinkInput"></a>

```java
public AutomationRunbookPublishContentLink getPublishContentLinkInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `runbookTypeInput`<sup>Optional</sup> <a name="runbookTypeInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.runbookTypeInput"></a>

```java
public java.lang.String getRunbookTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a>

---

##### `automationAccountName`<sup>Required</sup> <a name="automationAccountName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.automationAccountName"></a>

```java
public java.lang.String getAutomationAccountName();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `logActivityTraceLevel`<sup>Required</sup> <a name="logActivityTraceLevel" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logActivityTraceLevel"></a>

```java
public java.lang.Number getLogActivityTraceLevel();
```

- *Type:* java.lang.Number

---

##### `logProgress`<sup>Required</sup> <a name="logProgress" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logProgress"></a>

```java
public java.lang.Object getLogProgress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logVerbose`<sup>Required</sup> <a name="logVerbose" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logVerbose"></a>

```java
public java.lang.Object getLogVerbose();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `runbookType`<sup>Required</sup> <a name="runbookType" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.runbookType"></a>

```java
public java.lang.String getRunbookType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRunbookConfig <a name="AutomationRunbookConfig" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_runbook.AutomationRunbookConfig;

AutomationRunbookConfig.builder()
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
    .automationAccountName(java.lang.String)
    .location(java.lang.String)
    .logProgress(java.lang.Boolean)
    .logProgress(IResolvable)
    .logVerbose(java.lang.Boolean)
    .logVerbose(IResolvable)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .runbookType(java.lang.String)
//  .content(java.lang.String)
//  .description(java.lang.String)
//  .draft(AutomationRunbookDraft)
//  .id(java.lang.String)
//  .jobSchedule(IResolvable)
//  .jobSchedule(java.util.List<AutomationRunbookJobSchedule>)
//  .logActivityTraceLevel(java.lang.Number)
//  .publishContentLink(AutomationRunbookPublishContentLink)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AutomationRunbookTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.automationAccountName">automationAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#automation_account_name AutomationRunbook#automation_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#location AutomationRunbook#location}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.logProgress">logProgress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#log_progress AutomationRunbook#log_progress}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.logVerbose">logVerbose</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#log_verbose AutomationRunbook#log_verbose}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#name AutomationRunbook#name}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#resource_group_name AutomationRunbook#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.runbookType">runbookType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#runbook_type AutomationRunbook#runbook_type}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#content AutomationRunbook#content}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#description AutomationRunbook#description}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.draft">draft</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a></code> | draft block. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#id AutomationRunbook#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.jobSchedule">jobSchedule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#job_schedule AutomationRunbook#job_schedule}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.logActivityTraceLevel">logActivityTraceLevel</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#log_activity_trace_level AutomationRunbook#log_activity_trace_level}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.publishContentLink">publishContentLink</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a></code> | publish_content_link block. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#tags AutomationRunbook#tags}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `automationAccountName`<sup>Required</sup> <a name="automationAccountName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.automationAccountName"></a>

```java
public java.lang.String getAutomationAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#automation_account_name AutomationRunbook#automation_account_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#location AutomationRunbook#location}.

---

##### `logProgress`<sup>Required</sup> <a name="logProgress" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.logProgress"></a>

```java
public java.lang.Object getLogProgress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#log_progress AutomationRunbook#log_progress}.

---

##### `logVerbose`<sup>Required</sup> <a name="logVerbose" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.logVerbose"></a>

```java
public java.lang.Object getLogVerbose();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#log_verbose AutomationRunbook#log_verbose}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#name AutomationRunbook#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#resource_group_name AutomationRunbook#resource_group_name}.

---

##### `runbookType`<sup>Required</sup> <a name="runbookType" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.runbookType"></a>

```java
public java.lang.String getRunbookType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#runbook_type AutomationRunbook#runbook_type}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#content AutomationRunbook#content}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#description AutomationRunbook#description}.

---

##### `draft`<sup>Optional</sup> <a name="draft" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.draft"></a>

```java
public AutomationRunbookDraft getDraft();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a>

draft block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#draft AutomationRunbook#draft}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#id AutomationRunbook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jobSchedule`<sup>Optional</sup> <a name="jobSchedule" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.jobSchedule"></a>

```java
public java.lang.Object getJobSchedule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#job_schedule AutomationRunbook#job_schedule}.

---

##### `logActivityTraceLevel`<sup>Optional</sup> <a name="logActivityTraceLevel" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.logActivityTraceLevel"></a>

```java
public java.lang.Number getLogActivityTraceLevel();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#log_activity_trace_level AutomationRunbook#log_activity_trace_level}.

---

##### `publishContentLink`<sup>Optional</sup> <a name="publishContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.publishContentLink"></a>

```java
public AutomationRunbookPublishContentLink getPublishContentLink();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a>

publish_content_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#publish_content_link AutomationRunbook#publish_content_link}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#tags AutomationRunbook#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.timeouts"></a>

```java
public AutomationRunbookTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#timeouts AutomationRunbook#timeouts}

---

### AutomationRunbookDraft <a name="AutomationRunbookDraft" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_runbook.AutomationRunbookDraft;

AutomationRunbookDraft.builder()
//  .contentLink(AutomationRunbookDraftContentLink)
//  .editModeEnabled(java.lang.Boolean)
//  .editModeEnabled(IResolvable)
//  .outputTypes(java.util.List<java.lang.String>)
//  .parameters(IResolvable)
//  .parameters(java.util.List<AutomationRunbookDraftParameters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.contentLink">contentLink</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a></code> | content_link block. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.editModeEnabled">editModeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#edit_mode_enabled AutomationRunbook#edit_mode_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.outputTypes">outputTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#output_types AutomationRunbook#output_types}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.parameters">parameters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>></code> | parameters block. |

---

##### `contentLink`<sup>Optional</sup> <a name="contentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.contentLink"></a>

```java
public AutomationRunbookDraftContentLink getContentLink();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a>

content_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#content_link AutomationRunbook#content_link}

---

##### `editModeEnabled`<sup>Optional</sup> <a name="editModeEnabled" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.editModeEnabled"></a>

```java
public java.lang.Object getEditModeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#edit_mode_enabled AutomationRunbook#edit_mode_enabled}.

---

##### `outputTypes`<sup>Optional</sup> <a name="outputTypes" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.outputTypes"></a>

```java
public java.util.List<java.lang.String> getOutputTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#output_types AutomationRunbook#output_types}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.parameters"></a>

```java
public java.lang.Object getParameters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#parameters AutomationRunbook#parameters}

---

### AutomationRunbookDraftContentLink <a name="AutomationRunbookDraftContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_runbook.AutomationRunbookDraftContentLink;

AutomationRunbookDraftContentLink.builder()
    .uri(java.lang.String)
//  .hash(AutomationRunbookDraftContentLinkHash)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.property.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#uri AutomationRunbook#uri}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.property.hash">hash</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a></code> | hash block. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#version AutomationRunbook#version}. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#uri AutomationRunbook#uri}.

---

##### `hash`<sup>Optional</sup> <a name="hash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.property.hash"></a>

```java
public AutomationRunbookDraftContentLinkHash getHash();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a>

hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#hash AutomationRunbook#hash}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#version AutomationRunbook#version}.

---

### AutomationRunbookDraftContentLinkHash <a name="AutomationRunbookDraftContentLinkHash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_runbook.AutomationRunbookDraftContentLinkHash;

AutomationRunbookDraftContentLinkHash.builder()
    .algorithm(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#algorithm AutomationRunbook#algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#value AutomationRunbook#value}. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#algorithm AutomationRunbook#algorithm}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#value AutomationRunbook#value}.

---

### AutomationRunbookDraftParameters <a name="AutomationRunbookDraftParameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_runbook.AutomationRunbookDraftParameters;

AutomationRunbookDraftParameters.builder()
    .key(java.lang.String)
    .type(java.lang.String)
//  .defaultValue(java.lang.String)
//  .mandatory(java.lang.Boolean)
//  .mandatory(IResolvable)
//  .position(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#key AutomationRunbook#key}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#type AutomationRunbook#type}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#default_value AutomationRunbook#default_value}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.mandatory">mandatory</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#mandatory AutomationRunbook#mandatory}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.position">position</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#position AutomationRunbook#position}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#key AutomationRunbook#key}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#type AutomationRunbook#type}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#default_value AutomationRunbook#default_value}.

---

##### `mandatory`<sup>Optional</sup> <a name="mandatory" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.mandatory"></a>

```java
public java.lang.Object getMandatory();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#mandatory AutomationRunbook#mandatory}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#position AutomationRunbook#position}.

---

### AutomationRunbookJobSchedule <a name="AutomationRunbookJobSchedule" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_runbook.AutomationRunbookJobSchedule;

AutomationRunbookJobSchedule.builder()
//  .jobScheduleId(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .runOn(java.lang.String)
//  .scheduleName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.jobScheduleId">jobScheduleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#job_schedule_id AutomationRunbook#job_schedule_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#parameters AutomationRunbook#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.runOn">runOn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#run_on AutomationRunbook#run_on}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.scheduleName">scheduleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#schedule_name AutomationRunbook#schedule_name}. |

---

##### `jobScheduleId`<sup>Optional</sup> <a name="jobScheduleId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.jobScheduleId"></a>

```java
public java.lang.String getJobScheduleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#job_schedule_id AutomationRunbook#job_schedule_id}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#parameters AutomationRunbook#parameters}.

---

##### `runOn`<sup>Optional</sup> <a name="runOn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.runOn"></a>

```java
public java.lang.String getRunOn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#run_on AutomationRunbook#run_on}.

---

##### `scheduleName`<sup>Optional</sup> <a name="scheduleName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.scheduleName"></a>

```java
public java.lang.String getScheduleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#schedule_name AutomationRunbook#schedule_name}.

---

### AutomationRunbookPublishContentLink <a name="AutomationRunbookPublishContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_runbook.AutomationRunbookPublishContentLink;

AutomationRunbookPublishContentLink.builder()
    .uri(java.lang.String)
//  .hash(AutomationRunbookPublishContentLinkHash)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.property.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#uri AutomationRunbook#uri}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.property.hash">hash</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a></code> | hash block. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#version AutomationRunbook#version}. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#uri AutomationRunbook#uri}.

---

##### `hash`<sup>Optional</sup> <a name="hash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.property.hash"></a>

```java
public AutomationRunbookPublishContentLinkHash getHash();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a>

hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#hash AutomationRunbook#hash}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#version AutomationRunbook#version}.

---

### AutomationRunbookPublishContentLinkHash <a name="AutomationRunbookPublishContentLinkHash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_runbook.AutomationRunbookPublishContentLinkHash;

AutomationRunbookPublishContentLinkHash.builder()
    .algorithm(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#algorithm AutomationRunbook#algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#value AutomationRunbook#value}. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#algorithm AutomationRunbook#algorithm}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#value AutomationRunbook#value}.

---

### AutomationRunbookTimeouts <a name="AutomationRunbookTimeouts" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_runbook.AutomationRunbookTimeouts;

AutomationRunbookTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#create AutomationRunbook#create}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#delete AutomationRunbook#delete}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#read AutomationRunbook#read}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#update AutomationRunbook#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#create AutomationRunbook#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#delete AutomationRunbook#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#read AutomationRunbook#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/automation_runbook#update AutomationRunbook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationRunbookDraftContentLinkHashOutputReference <a name="AutomationRunbookDraftContentLinkHashOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_runbook.AutomationRunbookDraftContentLinkHashOutputReference;

new AutomationRunbookDraftContentLinkHashOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.internalValue"></a>

```java
public AutomationRunbookDraftContentLinkHash getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a>

---


### AutomationRunbookDraftContentLinkOutputReference <a name="AutomationRunbookDraftContentLinkOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_runbook.AutomationRunbookDraftContentLinkOutputReference;

new AutomationRunbookDraftContentLinkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.putHash">putHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resetHash">resetHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHash` <a name="putHash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.putHash"></a>

```java
public void putHash(AutomationRunbookDraftContentLinkHash value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.putHash.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a>

---

##### `resetHash` <a name="resetHash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resetHash"></a>

```java
public void resetHash()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.hash">hash</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference">AutomationRunbookDraftContentLinkHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.hashInput">hashInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.hash"></a>

```java
public AutomationRunbookDraftContentLinkHashOutputReference getHash();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference">AutomationRunbookDraftContentLinkHashOutputReference</a>

---

##### `hashInput`<sup>Optional</sup> <a name="hashInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.hashInput"></a>

```java
public AutomationRunbookDraftContentLinkHash getHashInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a>

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.internalValue"></a>

```java
public AutomationRunbookDraftContentLink getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a>

---


### AutomationRunbookDraftOutputReference <a name="AutomationRunbookDraftOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_runbook.AutomationRunbookDraftOutputReference;

new AutomationRunbookDraftOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putContentLink">putContentLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetContentLink">resetContentLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetEditModeEnabled">resetEditModeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetOutputTypes">resetOutputTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContentLink` <a name="putContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putContentLink"></a>

```java
public void putContentLink(AutomationRunbookDraftContentLink value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putContentLink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a>

---

##### `putParameters` <a name="putParameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putParameters"></a>

```java
public void putParameters(IResolvable OR java.util.List<AutomationRunbookDraftParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putParameters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>>

---

##### `resetContentLink` <a name="resetContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetContentLink"></a>

```java
public void resetContentLink()
```

##### `resetEditModeEnabled` <a name="resetEditModeEnabled" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetEditModeEnabled"></a>

```java
public void resetEditModeEnabled()
```

##### `resetOutputTypes` <a name="resetOutputTypes" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetOutputTypes"></a>

```java
public void resetOutputTypes()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.contentLink">contentLink</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference">AutomationRunbookDraftContentLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList">AutomationRunbookDraftParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.contentLinkInput">contentLinkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.editModeEnabledInput">editModeEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.outputTypesInput">outputTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.parametersInput">parametersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.editModeEnabled">editModeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.outputTypes">outputTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentLink`<sup>Required</sup> <a name="contentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.contentLink"></a>

```java
public AutomationRunbookDraftContentLinkOutputReference getContentLink();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference">AutomationRunbookDraftContentLinkOutputReference</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.lastModifiedTime"></a>

```java
public java.lang.String getLastModifiedTime();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.parameters"></a>

```java
public AutomationRunbookDraftParametersList getParameters();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList">AutomationRunbookDraftParametersList</a>

---

##### `contentLinkInput`<sup>Optional</sup> <a name="contentLinkInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.contentLinkInput"></a>

```java
public AutomationRunbookDraftContentLink getContentLinkInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a>

---

##### `editModeEnabledInput`<sup>Optional</sup> <a name="editModeEnabledInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.editModeEnabledInput"></a>

```java
public java.lang.Object getEditModeEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `outputTypesInput`<sup>Optional</sup> <a name="outputTypesInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.outputTypesInput"></a>

```java
public java.util.List<java.lang.String> getOutputTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.parametersInput"></a>

```java
public java.lang.Object getParametersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>>

---

##### `editModeEnabled`<sup>Required</sup> <a name="editModeEnabled" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.editModeEnabled"></a>

```java
public java.lang.Object getEditModeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `outputTypes`<sup>Required</sup> <a name="outputTypes" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.outputTypes"></a>

```java
public java.util.List<java.lang.String> getOutputTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.internalValue"></a>

```java
public AutomationRunbookDraft getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a>

---


### AutomationRunbookDraftParametersList <a name="AutomationRunbookDraftParametersList" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_runbook.AutomationRunbookDraftParametersList;

new AutomationRunbookDraftParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.get"></a>

```java
public AutomationRunbookDraftParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>>

---


### AutomationRunbookDraftParametersOutputReference <a name="AutomationRunbookDraftParametersOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_runbook.AutomationRunbookDraftParametersOutputReference;

new AutomationRunbookDraftParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resetMandatory">resetMandatory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resetPosition">resetPosition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resetDefaultValue"></a>

```java
public void resetDefaultValue()
```

##### `resetMandatory` <a name="resetMandatory" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resetMandatory"></a>

```java
public void resetMandatory()
```

##### `resetPosition` <a name="resetPosition" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resetPosition"></a>

```java
public void resetPosition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.mandatoryInput">mandatoryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.positionInput">positionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.mandatory">mandatory</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.defaultValueInput"></a>

```java
public java.lang.String getDefaultValueInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `mandatoryInput`<sup>Optional</sup> <a name="mandatoryInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.mandatoryInput"></a>

```java
public java.lang.Object getMandatoryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.positionInput"></a>

```java
public java.lang.Number getPositionInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `mandatory`<sup>Required</sup> <a name="mandatory" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.mandatory"></a>

```java
public java.lang.Object getMandatory();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>

---


### AutomationRunbookJobScheduleList <a name="AutomationRunbookJobScheduleList" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_runbook.AutomationRunbookJobScheduleList;

new AutomationRunbookJobScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.get"></a>

```java
public AutomationRunbookJobScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>>

---


### AutomationRunbookJobScheduleOutputReference <a name="AutomationRunbookJobScheduleOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_runbook.AutomationRunbookJobScheduleOutputReference;

new AutomationRunbookJobScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetJobScheduleId">resetJobScheduleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetRunOn">resetRunOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetScheduleName">resetScheduleName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJobScheduleId` <a name="resetJobScheduleId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetJobScheduleId"></a>

```java
public void resetJobScheduleId()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetRunOn` <a name="resetRunOn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetRunOn"></a>

```java
public void resetRunOn()
```

##### `resetScheduleName` <a name="resetScheduleName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetScheduleName"></a>

```java
public void resetScheduleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.jobScheduleIdInput">jobScheduleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.runOnInput">runOnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.scheduleNameInput">scheduleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.jobScheduleId">jobScheduleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.runOn">runOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.scheduleName">scheduleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jobScheduleIdInput`<sup>Optional</sup> <a name="jobScheduleIdInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.jobScheduleIdInput"></a>

```java
public java.lang.String getJobScheduleIdInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `runOnInput`<sup>Optional</sup> <a name="runOnInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.runOnInput"></a>

```java
public java.lang.String getRunOnInput();
```

- *Type:* java.lang.String

---

##### `scheduleNameInput`<sup>Optional</sup> <a name="scheduleNameInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.scheduleNameInput"></a>

```java
public java.lang.String getScheduleNameInput();
```

- *Type:* java.lang.String

---

##### `jobScheduleId`<sup>Required</sup> <a name="jobScheduleId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.jobScheduleId"></a>

```java
public java.lang.String getJobScheduleId();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `runOn`<sup>Required</sup> <a name="runOn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.runOn"></a>

```java
public java.lang.String getRunOn();
```

- *Type:* java.lang.String

---

##### `scheduleName`<sup>Required</sup> <a name="scheduleName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.scheduleName"></a>

```java
public java.lang.String getScheduleName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>

---


### AutomationRunbookPublishContentLinkHashOutputReference <a name="AutomationRunbookPublishContentLinkHashOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_runbook.AutomationRunbookPublishContentLinkHashOutputReference;

new AutomationRunbookPublishContentLinkHashOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.internalValue"></a>

```java
public AutomationRunbookPublishContentLinkHash getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a>

---


### AutomationRunbookPublishContentLinkOutputReference <a name="AutomationRunbookPublishContentLinkOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_runbook.AutomationRunbookPublishContentLinkOutputReference;

new AutomationRunbookPublishContentLinkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.putHash">putHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resetHash">resetHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHash` <a name="putHash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.putHash"></a>

```java
public void putHash(AutomationRunbookPublishContentLinkHash value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.putHash.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a>

---

##### `resetHash` <a name="resetHash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resetHash"></a>

```java
public void resetHash()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.hash">hash</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference">AutomationRunbookPublishContentLinkHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.hashInput">hashInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.hash"></a>

```java
public AutomationRunbookPublishContentLinkHashOutputReference getHash();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference">AutomationRunbookPublishContentLinkHashOutputReference</a>

---

##### `hashInput`<sup>Optional</sup> <a name="hashInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.hashInput"></a>

```java
public AutomationRunbookPublishContentLinkHash getHashInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a>

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.internalValue"></a>

```java
public AutomationRunbookPublishContentLink getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a>

---


### AutomationRunbookTimeoutsOutputReference <a name="AutomationRunbookTimeoutsOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.automation_runbook.AutomationRunbookTimeoutsOutputReference;

new AutomationRunbookTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a>

---



