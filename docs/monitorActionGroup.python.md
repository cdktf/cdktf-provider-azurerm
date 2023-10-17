# `azurerm_monitor_action_group`

Refer to the Terraform Registory for docs: [`azurerm_monitor_action_group`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group).

# `monitorActionGroup` Submodule <a name="`monitorActionGroup` Submodule" id="@cdktf/provider-azurerm.monitorActionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorActionGroup <a name="MonitorActionGroup" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group azurerm_monitor_action_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroup(
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
  short_name: str,
  arm_role_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupArmRoleReceiver]] = None,
  automation_runbook_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupAutomationRunbookReceiver]] = None,
  azure_app_push_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupAzureAppPushReceiver]] = None,
  azure_function_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupAzureFunctionReceiver]] = None,
  email_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupEmailReceiver]] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  event_hub_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupEventHubReceiver]] = None,
  id: str = None,
  itsm_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupItsmReceiver]] = None,
  location: str = None,
  logic_app_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupLogicAppReceiver]] = None,
  sms_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupSmsReceiver]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: MonitorActionGroupTimeouts = None,
  voice_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupVoiceReceiver]] = None,
  webhook_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupWebhookReceiver]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#resource_group_name MonitorActionGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.shortName">short_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#short_name MonitorActionGroup#short_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.armRoleReceiver">arm_role_receiver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver">MonitorActionGroupArmRoleReceiver</a>]]</code> | arm_role_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.automationRunbookReceiver">automation_runbook_receiver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver">MonitorActionGroupAutomationRunbookReceiver</a>]]</code> | automation_runbook_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.azureAppPushReceiver">azure_app_push_receiver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver">MonitorActionGroupAzureAppPushReceiver</a>]]</code> | azure_app_push_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.azureFunctionReceiver">azure_function_receiver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver">MonitorActionGroupAzureFunctionReceiver</a>]]</code> | azure_function_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.emailReceiver">email_receiver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver">MonitorActionGroupEmailReceiver</a>]]</code> | email_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#enabled MonitorActionGroup#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.eventHubReceiver">event_hub_receiver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver">MonitorActionGroupEventHubReceiver</a>]]</code> | event_hub_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#id MonitorActionGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.itsmReceiver">itsm_receiver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver">MonitorActionGroupItsmReceiver</a>]]</code> | itsm_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#location MonitorActionGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.logicAppReceiver">logic_app_receiver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver">MonitorActionGroupLogicAppReceiver</a>]]</code> | logic_app_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.smsReceiver">sms_receiver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver">MonitorActionGroupSmsReceiver</a>]]</code> | sms_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#tags MonitorActionGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts">MonitorActionGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.voiceReceiver">voice_receiver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver">MonitorActionGroupVoiceReceiver</a>]]</code> | voice_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.webhookReceiver">webhook_receiver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver">MonitorActionGroupWebhookReceiver</a>]]</code> | webhook_receiver block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#resource_group_name MonitorActionGroup#resource_group_name}.

---

##### `short_name`<sup>Required</sup> <a name="short_name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.shortName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#short_name MonitorActionGroup#short_name}.

---

##### `arm_role_receiver`<sup>Optional</sup> <a name="arm_role_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.armRoleReceiver"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver">MonitorActionGroupArmRoleReceiver</a>]]

arm_role_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#arm_role_receiver MonitorActionGroup#arm_role_receiver}

---

##### `automation_runbook_receiver`<sup>Optional</sup> <a name="automation_runbook_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.automationRunbookReceiver"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver">MonitorActionGroupAutomationRunbookReceiver</a>]]

automation_runbook_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#automation_runbook_receiver MonitorActionGroup#automation_runbook_receiver}

---

##### `azure_app_push_receiver`<sup>Optional</sup> <a name="azure_app_push_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.azureAppPushReceiver"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver">MonitorActionGroupAzureAppPushReceiver</a>]]

azure_app_push_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#azure_app_push_receiver MonitorActionGroup#azure_app_push_receiver}

---

##### `azure_function_receiver`<sup>Optional</sup> <a name="azure_function_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.azureFunctionReceiver"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver">MonitorActionGroupAzureFunctionReceiver</a>]]

azure_function_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#azure_function_receiver MonitorActionGroup#azure_function_receiver}

---

##### `email_receiver`<sup>Optional</sup> <a name="email_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.emailReceiver"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver">MonitorActionGroupEmailReceiver</a>]]

email_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#email_receiver MonitorActionGroup#email_receiver}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#enabled MonitorActionGroup#enabled}.

---

##### `event_hub_receiver`<sup>Optional</sup> <a name="event_hub_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.eventHubReceiver"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver">MonitorActionGroupEventHubReceiver</a>]]

event_hub_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#event_hub_receiver MonitorActionGroup#event_hub_receiver}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#id MonitorActionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `itsm_receiver`<sup>Optional</sup> <a name="itsm_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.itsmReceiver"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver">MonitorActionGroupItsmReceiver</a>]]

itsm_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#itsm_receiver MonitorActionGroup#itsm_receiver}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#location MonitorActionGroup#location}.

---

##### `logic_app_receiver`<sup>Optional</sup> <a name="logic_app_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.logicAppReceiver"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver">MonitorActionGroupLogicAppReceiver</a>]]

logic_app_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#logic_app_receiver MonitorActionGroup#logic_app_receiver}

---

##### `sms_receiver`<sup>Optional</sup> <a name="sms_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.smsReceiver"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver">MonitorActionGroupSmsReceiver</a>]]

sms_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#sms_receiver MonitorActionGroup#sms_receiver}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#tags MonitorActionGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts">MonitorActionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#timeouts MonitorActionGroup#timeouts}

---

##### `voice_receiver`<sup>Optional</sup> <a name="voice_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.voiceReceiver"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver">MonitorActionGroupVoiceReceiver</a>]]

voice_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#voice_receiver MonitorActionGroup#voice_receiver}

---

##### `webhook_receiver`<sup>Optional</sup> <a name="webhook_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.webhookReceiver"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver">MonitorActionGroupWebhookReceiver</a>]]

webhook_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#webhook_receiver MonitorActionGroup#webhook_receiver}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putArmRoleReceiver">put_arm_role_receiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAutomationRunbookReceiver">put_automation_runbook_receiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAzureAppPushReceiver">put_azure_app_push_receiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAzureFunctionReceiver">put_azure_function_receiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putEmailReceiver">put_email_receiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putEventHubReceiver">put_event_hub_receiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putItsmReceiver">put_itsm_receiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putLogicAppReceiver">put_logic_app_receiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putSmsReceiver">put_sms_receiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putVoiceReceiver">put_voice_receiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putWebhookReceiver">put_webhook_receiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetArmRoleReceiver">reset_arm_role_receiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetAutomationRunbookReceiver">reset_automation_runbook_receiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetAzureAppPushReceiver">reset_azure_app_push_receiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetAzureFunctionReceiver">reset_azure_function_receiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetEmailReceiver">reset_email_receiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetEventHubReceiver">reset_event_hub_receiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetItsmReceiver">reset_itsm_receiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetLogicAppReceiver">reset_logic_app_receiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetSmsReceiver">reset_sms_receiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetVoiceReceiver">reset_voice_receiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetWebhookReceiver">reset_webhook_receiver</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_arm_role_receiver` <a name="put_arm_role_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putArmRoleReceiver"></a>

```python
def put_arm_role_receiver(
  value: typing.Union[IResolvable, typing.List[MonitorActionGroupArmRoleReceiver]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putArmRoleReceiver.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver">MonitorActionGroupArmRoleReceiver</a>]]

---

##### `put_automation_runbook_receiver` <a name="put_automation_runbook_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAutomationRunbookReceiver"></a>

```python
def put_automation_runbook_receiver(
  value: typing.Union[IResolvable, typing.List[MonitorActionGroupAutomationRunbookReceiver]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAutomationRunbookReceiver.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver">MonitorActionGroupAutomationRunbookReceiver</a>]]

---

##### `put_azure_app_push_receiver` <a name="put_azure_app_push_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAzureAppPushReceiver"></a>

```python
def put_azure_app_push_receiver(
  value: typing.Union[IResolvable, typing.List[MonitorActionGroupAzureAppPushReceiver]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAzureAppPushReceiver.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver">MonitorActionGroupAzureAppPushReceiver</a>]]

---

##### `put_azure_function_receiver` <a name="put_azure_function_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAzureFunctionReceiver"></a>

```python
def put_azure_function_receiver(
  value: typing.Union[IResolvable, typing.List[MonitorActionGroupAzureFunctionReceiver]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAzureFunctionReceiver.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver">MonitorActionGroupAzureFunctionReceiver</a>]]

---

##### `put_email_receiver` <a name="put_email_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putEmailReceiver"></a>

```python
def put_email_receiver(
  value: typing.Union[IResolvable, typing.List[MonitorActionGroupEmailReceiver]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putEmailReceiver.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver">MonitorActionGroupEmailReceiver</a>]]

---

##### `put_event_hub_receiver` <a name="put_event_hub_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putEventHubReceiver"></a>

```python
def put_event_hub_receiver(
  value: typing.Union[IResolvable, typing.List[MonitorActionGroupEventHubReceiver]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putEventHubReceiver.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver">MonitorActionGroupEventHubReceiver</a>]]

---

##### `put_itsm_receiver` <a name="put_itsm_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putItsmReceiver"></a>

```python
def put_itsm_receiver(
  value: typing.Union[IResolvable, typing.List[MonitorActionGroupItsmReceiver]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putItsmReceiver.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver">MonitorActionGroupItsmReceiver</a>]]

---

##### `put_logic_app_receiver` <a name="put_logic_app_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putLogicAppReceiver"></a>

```python
def put_logic_app_receiver(
  value: typing.Union[IResolvable, typing.List[MonitorActionGroupLogicAppReceiver]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putLogicAppReceiver.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver">MonitorActionGroupLogicAppReceiver</a>]]

---

##### `put_sms_receiver` <a name="put_sms_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putSmsReceiver"></a>

```python
def put_sms_receiver(
  value: typing.Union[IResolvable, typing.List[MonitorActionGroupSmsReceiver]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putSmsReceiver.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver">MonitorActionGroupSmsReceiver</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#create MonitorActionGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#delete MonitorActionGroup#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#read MonitorActionGroup#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#update MonitorActionGroup#update}.

---

##### `put_voice_receiver` <a name="put_voice_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putVoiceReceiver"></a>

```python
def put_voice_receiver(
  value: typing.Union[IResolvable, typing.List[MonitorActionGroupVoiceReceiver]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putVoiceReceiver.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver">MonitorActionGroupVoiceReceiver</a>]]

---

##### `put_webhook_receiver` <a name="put_webhook_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putWebhookReceiver"></a>

```python
def put_webhook_receiver(
  value: typing.Union[IResolvable, typing.List[MonitorActionGroupWebhookReceiver]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putWebhookReceiver.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver">MonitorActionGroupWebhookReceiver</a>]]

---

##### `reset_arm_role_receiver` <a name="reset_arm_role_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetArmRoleReceiver"></a>

```python
def reset_arm_role_receiver() -> None
```

##### `reset_automation_runbook_receiver` <a name="reset_automation_runbook_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetAutomationRunbookReceiver"></a>

```python
def reset_automation_runbook_receiver() -> None
```

##### `reset_azure_app_push_receiver` <a name="reset_azure_app_push_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetAzureAppPushReceiver"></a>

```python
def reset_azure_app_push_receiver() -> None
```

##### `reset_azure_function_receiver` <a name="reset_azure_function_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetAzureFunctionReceiver"></a>

```python
def reset_azure_function_receiver() -> None
```

##### `reset_email_receiver` <a name="reset_email_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetEmailReceiver"></a>

```python
def reset_email_receiver() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_event_hub_receiver` <a name="reset_event_hub_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetEventHubReceiver"></a>

```python
def reset_event_hub_receiver() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_itsm_receiver` <a name="reset_itsm_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetItsmReceiver"></a>

```python
def reset_itsm_receiver() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_logic_app_receiver` <a name="reset_logic_app_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetLogicAppReceiver"></a>

```python
def reset_logic_app_receiver() -> None
```

##### `reset_sms_receiver` <a name="reset_sms_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetSmsReceiver"></a>

```python
def reset_sms_receiver() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_voice_receiver` <a name="reset_voice_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetVoiceReceiver"></a>

```python
def reset_voice_receiver() -> None
```

##### `reset_webhook_receiver` <a name="reset_webhook_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetWebhookReceiver"></a>

```python
def reset_webhook_receiver() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MonitorActionGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MonitorActionGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MonitorActionGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MonitorActionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MonitorActionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.armRoleReceiver">arm_role_receiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList">MonitorActionGroupArmRoleReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.automationRunbookReceiver">automation_runbook_receiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList">MonitorActionGroupAutomationRunbookReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.azureAppPushReceiver">azure_app_push_receiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList">MonitorActionGroupAzureAppPushReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.azureFunctionReceiver">azure_function_receiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList">MonitorActionGroupAzureFunctionReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.emailReceiver">email_receiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList">MonitorActionGroupEmailReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.eventHubReceiver">event_hub_receiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList">MonitorActionGroupEventHubReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.itsmReceiver">itsm_receiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList">MonitorActionGroupItsmReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.logicAppReceiver">logic_app_receiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList">MonitorActionGroupLogicAppReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.smsReceiver">sms_receiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList">MonitorActionGroupSmsReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference">MonitorActionGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.voiceReceiver">voice_receiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList">MonitorActionGroupVoiceReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.webhookReceiver">webhook_receiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList">MonitorActionGroupWebhookReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.armRoleReceiverInput">arm_role_receiver_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver">MonitorActionGroupArmRoleReceiver</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.automationRunbookReceiverInput">automation_runbook_receiver_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver">MonitorActionGroupAutomationRunbookReceiver</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.azureAppPushReceiverInput">azure_app_push_receiver_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver">MonitorActionGroupAzureAppPushReceiver</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.azureFunctionReceiverInput">azure_function_receiver_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver">MonitorActionGroupAzureFunctionReceiver</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.emailReceiverInput">email_receiver_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver">MonitorActionGroupEmailReceiver</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.eventHubReceiverInput">event_hub_receiver_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver">MonitorActionGroupEventHubReceiver</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.itsmReceiverInput">itsm_receiver_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver">MonitorActionGroupItsmReceiver</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.logicAppReceiverInput">logic_app_receiver_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver">MonitorActionGroupLogicAppReceiver</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.shortNameInput">short_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.smsReceiverInput">sms_receiver_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver">MonitorActionGroupSmsReceiver</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts">MonitorActionGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.voiceReceiverInput">voice_receiver_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver">MonitorActionGroupVoiceReceiver</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.webhookReceiverInput">webhook_receiver_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver">MonitorActionGroupWebhookReceiver</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.shortName">short_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arm_role_receiver`<sup>Required</sup> <a name="arm_role_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.armRoleReceiver"></a>

```python
arm_role_receiver: MonitorActionGroupArmRoleReceiverList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList">MonitorActionGroupArmRoleReceiverList</a>

---

##### `automation_runbook_receiver`<sup>Required</sup> <a name="automation_runbook_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.automationRunbookReceiver"></a>

```python
automation_runbook_receiver: MonitorActionGroupAutomationRunbookReceiverList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList">MonitorActionGroupAutomationRunbookReceiverList</a>

---

##### `azure_app_push_receiver`<sup>Required</sup> <a name="azure_app_push_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.azureAppPushReceiver"></a>

```python
azure_app_push_receiver: MonitorActionGroupAzureAppPushReceiverList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList">MonitorActionGroupAzureAppPushReceiverList</a>

---

##### `azure_function_receiver`<sup>Required</sup> <a name="azure_function_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.azureFunctionReceiver"></a>

```python
azure_function_receiver: MonitorActionGroupAzureFunctionReceiverList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList">MonitorActionGroupAzureFunctionReceiverList</a>

---

##### `email_receiver`<sup>Required</sup> <a name="email_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.emailReceiver"></a>

```python
email_receiver: MonitorActionGroupEmailReceiverList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList">MonitorActionGroupEmailReceiverList</a>

---

##### `event_hub_receiver`<sup>Required</sup> <a name="event_hub_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.eventHubReceiver"></a>

```python
event_hub_receiver: MonitorActionGroupEventHubReceiverList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList">MonitorActionGroupEventHubReceiverList</a>

---

##### `itsm_receiver`<sup>Required</sup> <a name="itsm_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.itsmReceiver"></a>

```python
itsm_receiver: MonitorActionGroupItsmReceiverList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList">MonitorActionGroupItsmReceiverList</a>

---

##### `logic_app_receiver`<sup>Required</sup> <a name="logic_app_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.logicAppReceiver"></a>

```python
logic_app_receiver: MonitorActionGroupLogicAppReceiverList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList">MonitorActionGroupLogicAppReceiverList</a>

---

##### `sms_receiver`<sup>Required</sup> <a name="sms_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.smsReceiver"></a>

```python
sms_receiver: MonitorActionGroupSmsReceiverList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList">MonitorActionGroupSmsReceiverList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.timeouts"></a>

```python
timeouts: MonitorActionGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference">MonitorActionGroupTimeoutsOutputReference</a>

---

##### `voice_receiver`<sup>Required</sup> <a name="voice_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.voiceReceiver"></a>

```python
voice_receiver: MonitorActionGroupVoiceReceiverList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList">MonitorActionGroupVoiceReceiverList</a>

---

##### `webhook_receiver`<sup>Required</sup> <a name="webhook_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.webhookReceiver"></a>

```python
webhook_receiver: MonitorActionGroupWebhookReceiverList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList">MonitorActionGroupWebhookReceiverList</a>

---

##### `arm_role_receiver_input`<sup>Optional</sup> <a name="arm_role_receiver_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.armRoleReceiverInput"></a>

```python
arm_role_receiver_input: typing.Union[IResolvable, typing.List[MonitorActionGroupArmRoleReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver">MonitorActionGroupArmRoleReceiver</a>]]

---

##### `automation_runbook_receiver_input`<sup>Optional</sup> <a name="automation_runbook_receiver_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.automationRunbookReceiverInput"></a>

```python
automation_runbook_receiver_input: typing.Union[IResolvable, typing.List[MonitorActionGroupAutomationRunbookReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver">MonitorActionGroupAutomationRunbookReceiver</a>]]

---

##### `azure_app_push_receiver_input`<sup>Optional</sup> <a name="azure_app_push_receiver_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.azureAppPushReceiverInput"></a>

```python
azure_app_push_receiver_input: typing.Union[IResolvable, typing.List[MonitorActionGroupAzureAppPushReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver">MonitorActionGroupAzureAppPushReceiver</a>]]

---

##### `azure_function_receiver_input`<sup>Optional</sup> <a name="azure_function_receiver_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.azureFunctionReceiverInput"></a>

```python
azure_function_receiver_input: typing.Union[IResolvable, typing.List[MonitorActionGroupAzureFunctionReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver">MonitorActionGroupAzureFunctionReceiver</a>]]

---

##### `email_receiver_input`<sup>Optional</sup> <a name="email_receiver_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.emailReceiverInput"></a>

```python
email_receiver_input: typing.Union[IResolvable, typing.List[MonitorActionGroupEmailReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver">MonitorActionGroupEmailReceiver</a>]]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event_hub_receiver_input`<sup>Optional</sup> <a name="event_hub_receiver_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.eventHubReceiverInput"></a>

```python
event_hub_receiver_input: typing.Union[IResolvable, typing.List[MonitorActionGroupEventHubReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver">MonitorActionGroupEventHubReceiver</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `itsm_receiver_input`<sup>Optional</sup> <a name="itsm_receiver_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.itsmReceiverInput"></a>

```python
itsm_receiver_input: typing.Union[IResolvable, typing.List[MonitorActionGroupItsmReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver">MonitorActionGroupItsmReceiver</a>]]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `logic_app_receiver_input`<sup>Optional</sup> <a name="logic_app_receiver_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.logicAppReceiverInput"></a>

```python
logic_app_receiver_input: typing.Union[IResolvable, typing.List[MonitorActionGroupLogicAppReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver">MonitorActionGroupLogicAppReceiver</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `short_name_input`<sup>Optional</sup> <a name="short_name_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.shortNameInput"></a>

```python
short_name_input: str
```

- *Type:* str

---

##### `sms_receiver_input`<sup>Optional</sup> <a name="sms_receiver_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.smsReceiverInput"></a>

```python
sms_receiver_input: typing.Union[IResolvable, typing.List[MonitorActionGroupSmsReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver">MonitorActionGroupSmsReceiver</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MonitorActionGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts">MonitorActionGroupTimeouts</a>]

---

##### `voice_receiver_input`<sup>Optional</sup> <a name="voice_receiver_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.voiceReceiverInput"></a>

```python
voice_receiver_input: typing.Union[IResolvable, typing.List[MonitorActionGroupVoiceReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver">MonitorActionGroupVoiceReceiver</a>]]

---

##### `webhook_receiver_input`<sup>Optional</sup> <a name="webhook_receiver_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.webhookReceiverInput"></a>

```python
webhook_receiver_input: typing.Union[IResolvable, typing.List[MonitorActionGroupWebhookReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver">MonitorActionGroupWebhookReceiver</a>]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `short_name`<sup>Required</sup> <a name="short_name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.shortName"></a>

```python
short_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorActionGroupArmRoleReceiver <a name="MonitorActionGroupArmRoleReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupArmRoleReceiver(
  name: str,
  role_id: str,
  use_common_alert_schema: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver.property.roleId">role_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#role_id MonitorActionGroup#role_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver.property.useCommonAlertSchema">use_common_alert_schema</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#role_id MonitorActionGroup#role_id}.

---

##### `use_common_alert_schema`<sup>Optional</sup> <a name="use_common_alert_schema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver.property.useCommonAlertSchema"></a>

```python
use_common_alert_schema: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}.

---

### MonitorActionGroupAutomationRunbookReceiver <a name="MonitorActionGroupAutomationRunbookReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver(
  automation_account_id: str,
  is_global_runbook: typing.Union[bool, IResolvable],
  name: str,
  runbook_name: str,
  service_uri: str,
  webhook_resource_id: str,
  use_common_alert_schema: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.automationAccountId">automation_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#automation_account_id MonitorActionGroup#automation_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.isGlobalRunbook">is_global_runbook</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#is_global_runbook MonitorActionGroup#is_global_runbook}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.runbookName">runbook_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#runbook_name MonitorActionGroup#runbook_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.serviceUri">service_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#service_uri MonitorActionGroup#service_uri}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.webhookResourceId">webhook_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#webhook_resource_id MonitorActionGroup#webhook_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.useCommonAlertSchema">use_common_alert_schema</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}. |

---

##### `automation_account_id`<sup>Required</sup> <a name="automation_account_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.automationAccountId"></a>

```python
automation_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#automation_account_id MonitorActionGroup#automation_account_id}.

---

##### `is_global_runbook`<sup>Required</sup> <a name="is_global_runbook" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.isGlobalRunbook"></a>

```python
is_global_runbook: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#is_global_runbook MonitorActionGroup#is_global_runbook}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `runbook_name`<sup>Required</sup> <a name="runbook_name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.runbookName"></a>

```python
runbook_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#runbook_name MonitorActionGroup#runbook_name}.

---

##### `service_uri`<sup>Required</sup> <a name="service_uri" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.serviceUri"></a>

```python
service_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#service_uri MonitorActionGroup#service_uri}.

---

##### `webhook_resource_id`<sup>Required</sup> <a name="webhook_resource_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.webhookResourceId"></a>

```python
webhook_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#webhook_resource_id MonitorActionGroup#webhook_resource_id}.

---

##### `use_common_alert_schema`<sup>Optional</sup> <a name="use_common_alert_schema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.useCommonAlertSchema"></a>

```python
use_common_alert_schema: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}.

---

### MonitorActionGroupAzureAppPushReceiver <a name="MonitorActionGroupAzureAppPushReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupAzureAppPushReceiver(
  email_address: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver.property.emailAddress">email_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#email_address MonitorActionGroup#email_address}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#email_address MonitorActionGroup#email_address}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

### MonitorActionGroupAzureFunctionReceiver <a name="MonitorActionGroupAzureFunctionReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupAzureFunctionReceiver(
  function_app_resource_id: str,
  function_name: str,
  http_trigger_url: str,
  name: str,
  use_common_alert_schema: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.functionAppResourceId">function_app_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#function_app_resource_id MonitorActionGroup#function_app_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#function_name MonitorActionGroup#function_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.httpTriggerUrl">http_trigger_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#http_trigger_url MonitorActionGroup#http_trigger_url}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.useCommonAlertSchema">use_common_alert_schema</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}. |

---

##### `function_app_resource_id`<sup>Required</sup> <a name="function_app_resource_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.functionAppResourceId"></a>

```python
function_app_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#function_app_resource_id MonitorActionGroup#function_app_resource_id}.

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#function_name MonitorActionGroup#function_name}.

---

##### `http_trigger_url`<sup>Required</sup> <a name="http_trigger_url" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.httpTriggerUrl"></a>

```python
http_trigger_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#http_trigger_url MonitorActionGroup#http_trigger_url}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `use_common_alert_schema`<sup>Optional</sup> <a name="use_common_alert_schema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.useCommonAlertSchema"></a>

```python
use_common_alert_schema: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}.

---

### MonitorActionGroupConfig <a name="MonitorActionGroupConfig" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  short_name: str,
  arm_role_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupArmRoleReceiver]] = None,
  automation_runbook_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupAutomationRunbookReceiver]] = None,
  azure_app_push_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupAzureAppPushReceiver]] = None,
  azure_function_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupAzureFunctionReceiver]] = None,
  email_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupEmailReceiver]] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  event_hub_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupEventHubReceiver]] = None,
  id: str = None,
  itsm_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupItsmReceiver]] = None,
  location: str = None,
  logic_app_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupLogicAppReceiver]] = None,
  sms_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupSmsReceiver]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: MonitorActionGroupTimeouts = None,
  voice_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupVoiceReceiver]] = None,
  webhook_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupWebhookReceiver]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#resource_group_name MonitorActionGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.shortName">short_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#short_name MonitorActionGroup#short_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.armRoleReceiver">arm_role_receiver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver">MonitorActionGroupArmRoleReceiver</a>]]</code> | arm_role_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.automationRunbookReceiver">automation_runbook_receiver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver">MonitorActionGroupAutomationRunbookReceiver</a>]]</code> | automation_runbook_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.azureAppPushReceiver">azure_app_push_receiver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver">MonitorActionGroupAzureAppPushReceiver</a>]]</code> | azure_app_push_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.azureFunctionReceiver">azure_function_receiver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver">MonitorActionGroupAzureFunctionReceiver</a>]]</code> | azure_function_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.emailReceiver">email_receiver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver">MonitorActionGroupEmailReceiver</a>]]</code> | email_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#enabled MonitorActionGroup#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.eventHubReceiver">event_hub_receiver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver">MonitorActionGroupEventHubReceiver</a>]]</code> | event_hub_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#id MonitorActionGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.itsmReceiver">itsm_receiver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver">MonitorActionGroupItsmReceiver</a>]]</code> | itsm_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#location MonitorActionGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.logicAppReceiver">logic_app_receiver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver">MonitorActionGroupLogicAppReceiver</a>]]</code> | logic_app_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.smsReceiver">sms_receiver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver">MonitorActionGroupSmsReceiver</a>]]</code> | sms_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#tags MonitorActionGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts">MonitorActionGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.voiceReceiver">voice_receiver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver">MonitorActionGroupVoiceReceiver</a>]]</code> | voice_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.webhookReceiver">webhook_receiver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver">MonitorActionGroupWebhookReceiver</a>]]</code> | webhook_receiver block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#resource_group_name MonitorActionGroup#resource_group_name}.

---

##### `short_name`<sup>Required</sup> <a name="short_name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.shortName"></a>

```python
short_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#short_name MonitorActionGroup#short_name}.

---

##### `arm_role_receiver`<sup>Optional</sup> <a name="arm_role_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.armRoleReceiver"></a>

```python
arm_role_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupArmRoleReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver">MonitorActionGroupArmRoleReceiver</a>]]

arm_role_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#arm_role_receiver MonitorActionGroup#arm_role_receiver}

---

##### `automation_runbook_receiver`<sup>Optional</sup> <a name="automation_runbook_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.automationRunbookReceiver"></a>

```python
automation_runbook_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupAutomationRunbookReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver">MonitorActionGroupAutomationRunbookReceiver</a>]]

automation_runbook_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#automation_runbook_receiver MonitorActionGroup#automation_runbook_receiver}

---

##### `azure_app_push_receiver`<sup>Optional</sup> <a name="azure_app_push_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.azureAppPushReceiver"></a>

```python
azure_app_push_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupAzureAppPushReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver">MonitorActionGroupAzureAppPushReceiver</a>]]

azure_app_push_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#azure_app_push_receiver MonitorActionGroup#azure_app_push_receiver}

---

##### `azure_function_receiver`<sup>Optional</sup> <a name="azure_function_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.azureFunctionReceiver"></a>

```python
azure_function_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupAzureFunctionReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver">MonitorActionGroupAzureFunctionReceiver</a>]]

azure_function_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#azure_function_receiver MonitorActionGroup#azure_function_receiver}

---

##### `email_receiver`<sup>Optional</sup> <a name="email_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.emailReceiver"></a>

```python
email_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupEmailReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver">MonitorActionGroupEmailReceiver</a>]]

email_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#email_receiver MonitorActionGroup#email_receiver}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#enabled MonitorActionGroup#enabled}.

---

##### `event_hub_receiver`<sup>Optional</sup> <a name="event_hub_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.eventHubReceiver"></a>

```python
event_hub_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupEventHubReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver">MonitorActionGroupEventHubReceiver</a>]]

event_hub_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#event_hub_receiver MonitorActionGroup#event_hub_receiver}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#id MonitorActionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `itsm_receiver`<sup>Optional</sup> <a name="itsm_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.itsmReceiver"></a>

```python
itsm_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupItsmReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver">MonitorActionGroupItsmReceiver</a>]]

itsm_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#itsm_receiver MonitorActionGroup#itsm_receiver}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#location MonitorActionGroup#location}.

---

##### `logic_app_receiver`<sup>Optional</sup> <a name="logic_app_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.logicAppReceiver"></a>

```python
logic_app_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupLogicAppReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver">MonitorActionGroupLogicAppReceiver</a>]]

logic_app_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#logic_app_receiver MonitorActionGroup#logic_app_receiver}

---

##### `sms_receiver`<sup>Optional</sup> <a name="sms_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.smsReceiver"></a>

```python
sms_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupSmsReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver">MonitorActionGroupSmsReceiver</a>]]

sms_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#sms_receiver MonitorActionGroup#sms_receiver}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#tags MonitorActionGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.timeouts"></a>

```python
timeouts: MonitorActionGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts">MonitorActionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#timeouts MonitorActionGroup#timeouts}

---

##### `voice_receiver`<sup>Optional</sup> <a name="voice_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.voiceReceiver"></a>

```python
voice_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupVoiceReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver">MonitorActionGroupVoiceReceiver</a>]]

voice_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#voice_receiver MonitorActionGroup#voice_receiver}

---

##### `webhook_receiver`<sup>Optional</sup> <a name="webhook_receiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.webhookReceiver"></a>

```python
webhook_receiver: typing.Union[IResolvable, typing.List[MonitorActionGroupWebhookReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver">MonitorActionGroupWebhookReceiver</a>]]

webhook_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#webhook_receiver MonitorActionGroup#webhook_receiver}

---

### MonitorActionGroupEmailReceiver <a name="MonitorActionGroupEmailReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupEmailReceiver(
  email_address: str,
  name: str,
  use_common_alert_schema: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver.property.emailAddress">email_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#email_address MonitorActionGroup#email_address}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver.property.useCommonAlertSchema">use_common_alert_schema</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}. |

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#email_address MonitorActionGroup#email_address}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `use_common_alert_schema`<sup>Optional</sup> <a name="use_common_alert_schema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver.property.useCommonAlertSchema"></a>

```python
use_common_alert_schema: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}.

---

### MonitorActionGroupEventHubReceiver <a name="MonitorActionGroupEventHubReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupEventHubReceiver(
  name: str,
  event_hub_id: str = None,
  event_hub_name: str = None,
  event_hub_namespace: str = None,
  subscription_id: str = None,
  tenant_id: str = None,
  use_common_alert_schema: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.eventHubId">event_hub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#event_hub_id MonitorActionGroup#event_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.eventHubName">event_hub_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#event_hub_name MonitorActionGroup#event_hub_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.eventHubNamespace">event_hub_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#event_hub_namespace MonitorActionGroup#event_hub_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#subscription_id MonitorActionGroup#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#tenant_id MonitorActionGroup#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.useCommonAlertSchema">use_common_alert_schema</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `event_hub_id`<sup>Optional</sup> <a name="event_hub_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.eventHubId"></a>

```python
event_hub_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#event_hub_id MonitorActionGroup#event_hub_id}.

---

##### `event_hub_name`<sup>Optional</sup> <a name="event_hub_name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.eventHubName"></a>

```python
event_hub_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#event_hub_name MonitorActionGroup#event_hub_name}.

---

##### `event_hub_namespace`<sup>Optional</sup> <a name="event_hub_namespace" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.eventHubNamespace"></a>

```python
event_hub_namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#event_hub_namespace MonitorActionGroup#event_hub_namespace}.

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#subscription_id MonitorActionGroup#subscription_id}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#tenant_id MonitorActionGroup#tenant_id}.

---

##### `use_common_alert_schema`<sup>Optional</sup> <a name="use_common_alert_schema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.useCommonAlertSchema"></a>

```python
use_common_alert_schema: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}.

---

### MonitorActionGroupItsmReceiver <a name="MonitorActionGroupItsmReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupItsmReceiver(
  connection_id: str,
  name: str,
  region: str,
  ticket_configuration: str,
  workspace_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.connectionId">connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#connection_id MonitorActionGroup#connection_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#region MonitorActionGroup#region}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.ticketConfiguration">ticket_configuration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#ticket_configuration MonitorActionGroup#ticket_configuration}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#workspace_id MonitorActionGroup#workspace_id}. |

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#connection_id MonitorActionGroup#connection_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#region MonitorActionGroup#region}.

---

##### `ticket_configuration`<sup>Required</sup> <a name="ticket_configuration" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.ticketConfiguration"></a>

```python
ticket_configuration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#ticket_configuration MonitorActionGroup#ticket_configuration}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#workspace_id MonitorActionGroup#workspace_id}.

---

### MonitorActionGroupLogicAppReceiver <a name="MonitorActionGroupLogicAppReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupLogicAppReceiver(
  callback_url: str,
  name: str,
  resource_id: str,
  use_common_alert_schema: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.property.callbackUrl">callback_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#callback_url MonitorActionGroup#callback_url}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#resource_id MonitorActionGroup#resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.property.useCommonAlertSchema">use_common_alert_schema</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}. |

---

##### `callback_url`<sup>Required</sup> <a name="callback_url" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.property.callbackUrl"></a>

```python
callback_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#callback_url MonitorActionGroup#callback_url}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#resource_id MonitorActionGroup#resource_id}.

---

##### `use_common_alert_schema`<sup>Optional</sup> <a name="use_common_alert_schema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.property.useCommonAlertSchema"></a>

```python
use_common_alert_schema: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}.

---

### MonitorActionGroupSmsReceiver <a name="MonitorActionGroupSmsReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupSmsReceiver(
  country_code: str,
  name: str,
  phone_number: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver.property.countryCode">country_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#country_code MonitorActionGroup#country_code}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver.property.phoneNumber">phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#phone_number MonitorActionGroup#phone_number}. |

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#country_code MonitorActionGroup#country_code}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#phone_number MonitorActionGroup#phone_number}.

---

### MonitorActionGroupTimeouts <a name="MonitorActionGroupTimeouts" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#create MonitorActionGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#delete MonitorActionGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#read MonitorActionGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#update MonitorActionGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#create MonitorActionGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#delete MonitorActionGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#read MonitorActionGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#update MonitorActionGroup#update}.

---

### MonitorActionGroupVoiceReceiver <a name="MonitorActionGroupVoiceReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupVoiceReceiver(
  country_code: str,
  name: str,
  phone_number: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver.property.countryCode">country_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#country_code MonitorActionGroup#country_code}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver.property.phoneNumber">phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#phone_number MonitorActionGroup#phone_number}. |

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#country_code MonitorActionGroup#country_code}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#phone_number MonitorActionGroup#phone_number}.

---

### MonitorActionGroupWebhookReceiver <a name="MonitorActionGroupWebhookReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupWebhookReceiver(
  name: str,
  service_uri: str,
  aad_auth: MonitorActionGroupWebhookReceiverAadAuth = None,
  use_common_alert_schema: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.property.serviceUri">service_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#service_uri MonitorActionGroup#service_uri}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.property.aadAuth">aad_auth</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth">MonitorActionGroupWebhookReceiverAadAuth</a></code> | aad_auth block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.property.useCommonAlertSchema">use_common_alert_schema</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `service_uri`<sup>Required</sup> <a name="service_uri" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.property.serviceUri"></a>

```python
service_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#service_uri MonitorActionGroup#service_uri}.

---

##### `aad_auth`<sup>Optional</sup> <a name="aad_auth" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.property.aadAuth"></a>

```python
aad_auth: MonitorActionGroupWebhookReceiverAadAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth">MonitorActionGroupWebhookReceiverAadAuth</a>

aad_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#aad_auth MonitorActionGroup#aad_auth}

---

##### `use_common_alert_schema`<sup>Optional</sup> <a name="use_common_alert_schema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.property.useCommonAlertSchema"></a>

```python
use_common_alert_schema: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}.

---

### MonitorActionGroupWebhookReceiverAadAuth <a name="MonitorActionGroupWebhookReceiverAadAuth" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth(
  object_id: str,
  identifier_uri: str = None,
  tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth.property.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#object_id MonitorActionGroup#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth.property.identifierUri">identifier_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#identifier_uri MonitorActionGroup#identifier_uri}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#tenant_id MonitorActionGroup#tenant_id}. |

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#object_id MonitorActionGroup#object_id}.

---

##### `identifier_uri`<sup>Optional</sup> <a name="identifier_uri" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth.property.identifierUri"></a>

```python
identifier_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#identifier_uri MonitorActionGroup#identifier_uri}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#tenant_id MonitorActionGroup#tenant_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorActionGroupArmRoleReceiverList <a name="MonitorActionGroupArmRoleReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupArmRoleReceiverList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorActionGroupArmRoleReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver">MonitorActionGroupArmRoleReceiver</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorActionGroupArmRoleReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver">MonitorActionGroupArmRoleReceiver</a>]]

---


### MonitorActionGroupArmRoleReceiverOutputReference <a name="MonitorActionGroupArmRoleReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.resetUseCommonAlertSchema">reset_use_common_alert_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_use_common_alert_schema` <a name="reset_use_common_alert_schema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.resetUseCommonAlertSchema"></a>

```python
def reset_use_common_alert_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.roleIdInput">role_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.useCommonAlertSchemaInput">use_common_alert_schema_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.roleId">role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.useCommonAlertSchema">use_common_alert_schema</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver">MonitorActionGroupArmRoleReceiver</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `role_id_input`<sup>Optional</sup> <a name="role_id_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.roleIdInput"></a>

```python
role_id_input: str
```

- *Type:* str

---

##### `use_common_alert_schema_input`<sup>Optional</sup> <a name="use_common_alert_schema_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.useCommonAlertSchemaInput"></a>

```python
use_common_alert_schema_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

---

##### `use_common_alert_schema`<sup>Required</sup> <a name="use_common_alert_schema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.useCommonAlertSchema"></a>

```python
use_common_alert_schema: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorActionGroupArmRoleReceiver]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver">MonitorActionGroupArmRoleReceiver</a>]

---


### MonitorActionGroupAutomationRunbookReceiverList <a name="MonitorActionGroupAutomationRunbookReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorActionGroupAutomationRunbookReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver">MonitorActionGroupAutomationRunbookReceiver</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorActionGroupAutomationRunbookReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver">MonitorActionGroupAutomationRunbookReceiver</a>]]

---


### MonitorActionGroupAutomationRunbookReceiverOutputReference <a name="MonitorActionGroupAutomationRunbookReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.resetUseCommonAlertSchema">reset_use_common_alert_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_use_common_alert_schema` <a name="reset_use_common_alert_schema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.resetUseCommonAlertSchema"></a>

```python
def reset_use_common_alert_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.automationAccountIdInput">automation_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.isGlobalRunbookInput">is_global_runbook_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.runbookNameInput">runbook_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.serviceUriInput">service_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.useCommonAlertSchemaInput">use_common_alert_schema_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.webhookResourceIdInput">webhook_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.automationAccountId">automation_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.isGlobalRunbook">is_global_runbook</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.runbookName">runbook_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.serviceUri">service_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.useCommonAlertSchema">use_common_alert_schema</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.webhookResourceId">webhook_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver">MonitorActionGroupAutomationRunbookReceiver</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automation_account_id_input`<sup>Optional</sup> <a name="automation_account_id_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.automationAccountIdInput"></a>

```python
automation_account_id_input: str
```

- *Type:* str

---

##### `is_global_runbook_input`<sup>Optional</sup> <a name="is_global_runbook_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.isGlobalRunbookInput"></a>

```python
is_global_runbook_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `runbook_name_input`<sup>Optional</sup> <a name="runbook_name_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.runbookNameInput"></a>

```python
runbook_name_input: str
```

- *Type:* str

---

##### `service_uri_input`<sup>Optional</sup> <a name="service_uri_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.serviceUriInput"></a>

```python
service_uri_input: str
```

- *Type:* str

---

##### `use_common_alert_schema_input`<sup>Optional</sup> <a name="use_common_alert_schema_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.useCommonAlertSchemaInput"></a>

```python
use_common_alert_schema_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `webhook_resource_id_input`<sup>Optional</sup> <a name="webhook_resource_id_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.webhookResourceIdInput"></a>

```python
webhook_resource_id_input: str
```

- *Type:* str

---

##### `automation_account_id`<sup>Required</sup> <a name="automation_account_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.automationAccountId"></a>

```python
automation_account_id: str
```

- *Type:* str

---

##### `is_global_runbook`<sup>Required</sup> <a name="is_global_runbook" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.isGlobalRunbook"></a>

```python
is_global_runbook: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `runbook_name`<sup>Required</sup> <a name="runbook_name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.runbookName"></a>

```python
runbook_name: str
```

- *Type:* str

---

##### `service_uri`<sup>Required</sup> <a name="service_uri" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.serviceUri"></a>

```python
service_uri: str
```

- *Type:* str

---

##### `use_common_alert_schema`<sup>Required</sup> <a name="use_common_alert_schema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.useCommonAlertSchema"></a>

```python
use_common_alert_schema: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `webhook_resource_id`<sup>Required</sup> <a name="webhook_resource_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.webhookResourceId"></a>

```python
webhook_resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorActionGroupAutomationRunbookReceiver]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver">MonitorActionGroupAutomationRunbookReceiver</a>]

---


### MonitorActionGroupAzureAppPushReceiverList <a name="MonitorActionGroupAzureAppPushReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorActionGroupAzureAppPushReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver">MonitorActionGroupAzureAppPushReceiver</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorActionGroupAzureAppPushReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver">MonitorActionGroupAzureAppPushReceiver</a>]]

---


### MonitorActionGroupAzureAppPushReceiverOutputReference <a name="MonitorActionGroupAzureAppPushReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.emailAddressInput">email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver">MonitorActionGroupAzureAppPushReceiver</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_address_input`<sup>Optional</sup> <a name="email_address_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.emailAddressInput"></a>

```python
email_address_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorActionGroupAzureAppPushReceiver]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver">MonitorActionGroupAzureAppPushReceiver</a>]

---


### MonitorActionGroupAzureFunctionReceiverList <a name="MonitorActionGroupAzureFunctionReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorActionGroupAzureFunctionReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver">MonitorActionGroupAzureFunctionReceiver</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorActionGroupAzureFunctionReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver">MonitorActionGroupAzureFunctionReceiver</a>]]

---


### MonitorActionGroupAzureFunctionReceiverOutputReference <a name="MonitorActionGroupAzureFunctionReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.resetUseCommonAlertSchema">reset_use_common_alert_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_use_common_alert_schema` <a name="reset_use_common_alert_schema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.resetUseCommonAlertSchema"></a>

```python
def reset_use_common_alert_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.functionAppResourceIdInput">function_app_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.httpTriggerUrlInput">http_trigger_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.useCommonAlertSchemaInput">use_common_alert_schema_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.functionAppResourceId">function_app_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.httpTriggerUrl">http_trigger_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.useCommonAlertSchema">use_common_alert_schema</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver">MonitorActionGroupAzureFunctionReceiver</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `function_app_resource_id_input`<sup>Optional</sup> <a name="function_app_resource_id_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.functionAppResourceIdInput"></a>

```python
function_app_resource_id_input: str
```

- *Type:* str

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `http_trigger_url_input`<sup>Optional</sup> <a name="http_trigger_url_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.httpTriggerUrlInput"></a>

```python
http_trigger_url_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `use_common_alert_schema_input`<sup>Optional</sup> <a name="use_common_alert_schema_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.useCommonAlertSchemaInput"></a>

```python
use_common_alert_schema_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `function_app_resource_id`<sup>Required</sup> <a name="function_app_resource_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.functionAppResourceId"></a>

```python
function_app_resource_id: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `http_trigger_url`<sup>Required</sup> <a name="http_trigger_url" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.httpTriggerUrl"></a>

```python
http_trigger_url: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `use_common_alert_schema`<sup>Required</sup> <a name="use_common_alert_schema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.useCommonAlertSchema"></a>

```python
use_common_alert_schema: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorActionGroupAzureFunctionReceiver]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver">MonitorActionGroupAzureFunctionReceiver</a>]

---


### MonitorActionGroupEmailReceiverList <a name="MonitorActionGroupEmailReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupEmailReceiverList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorActionGroupEmailReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver">MonitorActionGroupEmailReceiver</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorActionGroupEmailReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver">MonitorActionGroupEmailReceiver</a>]]

---


### MonitorActionGroupEmailReceiverOutputReference <a name="MonitorActionGroupEmailReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.resetUseCommonAlertSchema">reset_use_common_alert_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_use_common_alert_schema` <a name="reset_use_common_alert_schema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.resetUseCommonAlertSchema"></a>

```python
def reset_use_common_alert_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.emailAddressInput">email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.useCommonAlertSchemaInput">use_common_alert_schema_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.useCommonAlertSchema">use_common_alert_schema</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver">MonitorActionGroupEmailReceiver</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_address_input`<sup>Optional</sup> <a name="email_address_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.emailAddressInput"></a>

```python
email_address_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `use_common_alert_schema_input`<sup>Optional</sup> <a name="use_common_alert_schema_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.useCommonAlertSchemaInput"></a>

```python
use_common_alert_schema_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `use_common_alert_schema`<sup>Required</sup> <a name="use_common_alert_schema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.useCommonAlertSchema"></a>

```python
use_common_alert_schema: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorActionGroupEmailReceiver]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver">MonitorActionGroupEmailReceiver</a>]

---


### MonitorActionGroupEventHubReceiverList <a name="MonitorActionGroupEventHubReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupEventHubReceiverList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorActionGroupEventHubReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver">MonitorActionGroupEventHubReceiver</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorActionGroupEventHubReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver">MonitorActionGroupEventHubReceiver</a>]]

---


### MonitorActionGroupEventHubReceiverOutputReference <a name="MonitorActionGroupEventHubReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetEventHubId">reset_event_hub_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetEventHubName">reset_event_hub_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetEventHubNamespace">reset_event_hub_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetSubscriptionId">reset_subscription_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetUseCommonAlertSchema">reset_use_common_alert_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_event_hub_id` <a name="reset_event_hub_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetEventHubId"></a>

```python
def reset_event_hub_id() -> None
```

##### `reset_event_hub_name` <a name="reset_event_hub_name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetEventHubName"></a>

```python
def reset_event_hub_name() -> None
```

##### `reset_event_hub_namespace` <a name="reset_event_hub_namespace" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetEventHubNamespace"></a>

```python
def reset_event_hub_namespace() -> None
```

##### `reset_subscription_id` <a name="reset_subscription_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetSubscriptionId"></a>

```python
def reset_subscription_id() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_use_common_alert_schema` <a name="reset_use_common_alert_schema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetUseCommonAlertSchema"></a>

```python
def reset_use_common_alert_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubIdInput">event_hub_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubNameInput">event_hub_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubNamespaceInput">event_hub_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.useCommonAlertSchemaInput">use_common_alert_schema_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubId">event_hub_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubName">event_hub_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubNamespace">event_hub_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.useCommonAlertSchema">use_common_alert_schema</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver">MonitorActionGroupEventHubReceiver</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_hub_id_input`<sup>Optional</sup> <a name="event_hub_id_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubIdInput"></a>

```python
event_hub_id_input: str
```

- *Type:* str

---

##### `event_hub_name_input`<sup>Optional</sup> <a name="event_hub_name_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubNameInput"></a>

```python
event_hub_name_input: str
```

- *Type:* str

---

##### `event_hub_namespace_input`<sup>Optional</sup> <a name="event_hub_namespace_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubNamespaceInput"></a>

```python
event_hub_namespace_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `use_common_alert_schema_input`<sup>Optional</sup> <a name="use_common_alert_schema_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.useCommonAlertSchemaInput"></a>

```python
use_common_alert_schema_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event_hub_id`<sup>Required</sup> <a name="event_hub_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubId"></a>

```python
event_hub_id: str
```

- *Type:* str

---

##### `event_hub_name`<sup>Required</sup> <a name="event_hub_name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubName"></a>

```python
event_hub_name: str
```

- *Type:* str

---

##### `event_hub_namespace`<sup>Required</sup> <a name="event_hub_namespace" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubNamespace"></a>

```python
event_hub_namespace: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `use_common_alert_schema`<sup>Required</sup> <a name="use_common_alert_schema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.useCommonAlertSchema"></a>

```python
use_common_alert_schema: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorActionGroupEventHubReceiver]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver">MonitorActionGroupEventHubReceiver</a>]

---


### MonitorActionGroupItsmReceiverList <a name="MonitorActionGroupItsmReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupItsmReceiverList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorActionGroupItsmReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver">MonitorActionGroupItsmReceiver</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorActionGroupItsmReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver">MonitorActionGroupItsmReceiver</a>]]

---


### MonitorActionGroupItsmReceiverOutputReference <a name="MonitorActionGroupItsmReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.ticketConfigurationInput">ticket_configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.ticketConfiguration">ticket_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver">MonitorActionGroupItsmReceiver</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `ticket_configuration_input`<sup>Optional</sup> <a name="ticket_configuration_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.ticketConfigurationInput"></a>

```python
ticket_configuration_input: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `ticket_configuration`<sup>Required</sup> <a name="ticket_configuration" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.ticketConfiguration"></a>

```python
ticket_configuration: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorActionGroupItsmReceiver]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver">MonitorActionGroupItsmReceiver</a>]

---


### MonitorActionGroupLogicAppReceiverList <a name="MonitorActionGroupLogicAppReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupLogicAppReceiverList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorActionGroupLogicAppReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver">MonitorActionGroupLogicAppReceiver</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorActionGroupLogicAppReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver">MonitorActionGroupLogicAppReceiver</a>]]

---


### MonitorActionGroupLogicAppReceiverOutputReference <a name="MonitorActionGroupLogicAppReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.resetUseCommonAlertSchema">reset_use_common_alert_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_use_common_alert_schema` <a name="reset_use_common_alert_schema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.resetUseCommonAlertSchema"></a>

```python
def reset_use_common_alert_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.callbackUrlInput">callback_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.useCommonAlertSchemaInput">use_common_alert_schema_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.callbackUrl">callback_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.useCommonAlertSchema">use_common_alert_schema</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver">MonitorActionGroupLogicAppReceiver</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `callback_url_input`<sup>Optional</sup> <a name="callback_url_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.callbackUrlInput"></a>

```python
callback_url_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `use_common_alert_schema_input`<sup>Optional</sup> <a name="use_common_alert_schema_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.useCommonAlertSchemaInput"></a>

```python
use_common_alert_schema_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `callback_url`<sup>Required</sup> <a name="callback_url" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.callbackUrl"></a>

```python
callback_url: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `use_common_alert_schema`<sup>Required</sup> <a name="use_common_alert_schema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.useCommonAlertSchema"></a>

```python
use_common_alert_schema: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorActionGroupLogicAppReceiver]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver">MonitorActionGroupLogicAppReceiver</a>]

---


### MonitorActionGroupSmsReceiverList <a name="MonitorActionGroupSmsReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupSmsReceiverList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorActionGroupSmsReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver">MonitorActionGroupSmsReceiver</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorActionGroupSmsReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver">MonitorActionGroupSmsReceiver</a>]]

---


### MonitorActionGroupSmsReceiverOutputReference <a name="MonitorActionGroupSmsReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.countryCodeInput">country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver">MonitorActionGroupSmsReceiver</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `country_code_input`<sup>Optional</sup> <a name="country_code_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.countryCodeInput"></a>

```python
country_code_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorActionGroupSmsReceiver]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver">MonitorActionGroupSmsReceiver</a>]

---


### MonitorActionGroupTimeoutsOutputReference <a name="MonitorActionGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts">MonitorActionGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorActionGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts">MonitorActionGroupTimeouts</a>]

---


### MonitorActionGroupVoiceReceiverList <a name="MonitorActionGroupVoiceReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupVoiceReceiverList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorActionGroupVoiceReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver">MonitorActionGroupVoiceReceiver</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorActionGroupVoiceReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver">MonitorActionGroupVoiceReceiver</a>]]

---


### MonitorActionGroupVoiceReceiverOutputReference <a name="MonitorActionGroupVoiceReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.countryCodeInput">country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver">MonitorActionGroupVoiceReceiver</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `country_code_input`<sup>Optional</sup> <a name="country_code_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.countryCodeInput"></a>

```python
country_code_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorActionGroupVoiceReceiver]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver">MonitorActionGroupVoiceReceiver</a>]

---


### MonitorActionGroupWebhookReceiverAadAuthOutputReference <a name="MonitorActionGroupWebhookReceiverAadAuthOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.resetIdentifierUri">reset_identifier_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.resetTenantId">reset_tenant_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identifier_uri` <a name="reset_identifier_uri" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.resetIdentifierUri"></a>

```python
def reset_identifier_uri() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.identifierUriInput">identifier_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.identifierUri">identifier_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth">MonitorActionGroupWebhookReceiverAadAuth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identifier_uri_input`<sup>Optional</sup> <a name="identifier_uri_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.identifierUriInput"></a>

```python
identifier_uri_input: str
```

- *Type:* str

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `identifier_uri`<sup>Required</sup> <a name="identifier_uri" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.identifierUri"></a>

```python
identifier_uri: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.internalValue"></a>

```python
internal_value: MonitorActionGroupWebhookReceiverAadAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth">MonitorActionGroupWebhookReceiverAadAuth</a>

---


### MonitorActionGroupWebhookReceiverList <a name="MonitorActionGroupWebhookReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupWebhookReceiverList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorActionGroupWebhookReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver">MonitorActionGroupWebhookReceiver</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorActionGroupWebhookReceiver]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver">MonitorActionGroupWebhookReceiver</a>]]

---


### MonitorActionGroupWebhookReceiverOutputReference <a name="MonitorActionGroupWebhookReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_action_group

monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.putAadAuth">put_aad_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.resetAadAuth">reset_aad_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.resetUseCommonAlertSchema">reset_use_common_alert_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aad_auth` <a name="put_aad_auth" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.putAadAuth"></a>

```python
def put_aad_auth(
  object_id: str,
  identifier_uri: str = None,
  tenant_id: str = None
) -> None
```

###### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.putAadAuth.parameter.objectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#object_id MonitorActionGroup#object_id}.

---

###### `identifier_uri`<sup>Optional</sup> <a name="identifier_uri" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.putAadAuth.parameter.identifierUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#identifier_uri MonitorActionGroup#identifier_uri}.

---

###### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.putAadAuth.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/monitor_action_group#tenant_id MonitorActionGroup#tenant_id}.

---

##### `reset_aad_auth` <a name="reset_aad_auth" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.resetAadAuth"></a>

```python
def reset_aad_auth() -> None
```

##### `reset_use_common_alert_schema` <a name="reset_use_common_alert_schema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.resetUseCommonAlertSchema"></a>

```python
def reset_use_common_alert_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.aadAuth">aad_auth</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference">MonitorActionGroupWebhookReceiverAadAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.aadAuthInput">aad_auth_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth">MonitorActionGroupWebhookReceiverAadAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.serviceUriInput">service_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.useCommonAlertSchemaInput">use_common_alert_schema_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.serviceUri">service_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.useCommonAlertSchema">use_common_alert_schema</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver">MonitorActionGroupWebhookReceiver</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aad_auth`<sup>Required</sup> <a name="aad_auth" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.aadAuth"></a>

```python
aad_auth: MonitorActionGroupWebhookReceiverAadAuthOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference">MonitorActionGroupWebhookReceiverAadAuthOutputReference</a>

---

##### `aad_auth_input`<sup>Optional</sup> <a name="aad_auth_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.aadAuthInput"></a>

```python
aad_auth_input: MonitorActionGroupWebhookReceiverAadAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth">MonitorActionGroupWebhookReceiverAadAuth</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `service_uri_input`<sup>Optional</sup> <a name="service_uri_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.serviceUriInput"></a>

```python
service_uri_input: str
```

- *Type:* str

---

##### `use_common_alert_schema_input`<sup>Optional</sup> <a name="use_common_alert_schema_input" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.useCommonAlertSchemaInput"></a>

```python
use_common_alert_schema_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_uri`<sup>Required</sup> <a name="service_uri" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.serviceUri"></a>

```python
service_uri: str
```

- *Type:* str

---

##### `use_common_alert_schema`<sup>Required</sup> <a name="use_common_alert_schema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.useCommonAlertSchema"></a>

```python
use_common_alert_schema: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorActionGroupWebhookReceiver]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver">MonitorActionGroupWebhookReceiver</a>]

---



