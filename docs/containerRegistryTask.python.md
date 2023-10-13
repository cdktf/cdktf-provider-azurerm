# `azurerm_container_registry_task`

Refer to the Terraform Registory for docs: [`azurerm_container_registry_task`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task).

# `containerRegistryTask` Submodule <a name="`containerRegistryTask` Submodule" id="@cdktf/provider-azurerm.containerRegistryTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistryTask <a name="ContainerRegistryTask" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task azurerm_container_registry_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTask(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_registry_id: str,
  name: str,
  agent_pool_name: str = None,
  agent_setting: ContainerRegistryTaskAgentSetting = None,
  base_image_trigger: ContainerRegistryTaskBaseImageTrigger = None,
  docker_step: ContainerRegistryTaskDockerStep = None,
  enabled: typing.Union[bool, IResolvable] = None,
  encoded_step: ContainerRegistryTaskEncodedStep = None,
  file_step: ContainerRegistryTaskFileStep = None,
  id: str = None,
  identity: ContainerRegistryTaskIdentity = None,
  is_system_task: typing.Union[bool, IResolvable] = None,
  log_template: str = None,
  platform: ContainerRegistryTaskPlatform = None,
  registry_credential: ContainerRegistryTaskRegistryCredential = None,
  source_trigger: typing.Union[IResolvable, typing.List[ContainerRegistryTaskSourceTrigger]] = None,
  tags: typing.Mapping[str] = None,
  timeout_in_seconds: typing.Union[int, float] = None,
  timeouts: ContainerRegistryTaskTimeouts = None,
  timer_trigger: typing.Union[IResolvable, typing.List[ContainerRegistryTaskTimerTrigger]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.containerRegistryId">container_registry_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#container_registry_id ContainerRegistryTask#container_registry_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#name ContainerRegistryTask#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.agentPoolName">agent_pool_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#agent_pool_name ContainerRegistryTask#agent_pool_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.agentSetting">agent_setting</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSetting">ContainerRegistryTaskAgentSetting</a></code> | agent_setting block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.baseImageTrigger">base_image_trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger">ContainerRegistryTaskBaseImageTrigger</a></code> | base_image_trigger block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.dockerStep">docker_step</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep">ContainerRegistryTaskDockerStep</a></code> | docker_step block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#enabled ContainerRegistryTask#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.encodedStep">encoded_step</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep">ContainerRegistryTaskEncodedStep</a></code> | encoded_step block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.fileStep">file_step</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep">ContainerRegistryTaskFileStep</a></code> | file_step block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#id ContainerRegistryTask#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity">ContainerRegistryTaskIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.isSystemTask">is_system_task</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#is_system_task ContainerRegistryTask#is_system_task}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.logTemplate">log_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#log_template ContainerRegistryTask#log_template}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.platform">platform</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform">ContainerRegistryTaskPlatform</a></code> | platform block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.registryCredential">registry_credential</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential">ContainerRegistryTaskRegistryCredential</a></code> | registry_credential block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.sourceTrigger">source_trigger</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger">ContainerRegistryTaskSourceTrigger</a>]]</code> | source_trigger block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#tags ContainerRegistryTask#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#timeout_in_seconds ContainerRegistryTask#timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts">ContainerRegistryTaskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.timerTrigger">timer_trigger</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger">ContainerRegistryTaskTimerTrigger</a>]]</code> | timer_trigger block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_registry_id`<sup>Required</sup> <a name="container_registry_id" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.containerRegistryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#container_registry_id ContainerRegistryTask#container_registry_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#name ContainerRegistryTask#name}.

---

##### `agent_pool_name`<sup>Optional</sup> <a name="agent_pool_name" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.agentPoolName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#agent_pool_name ContainerRegistryTask#agent_pool_name}.

---

##### `agent_setting`<sup>Optional</sup> <a name="agent_setting" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.agentSetting"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSetting">ContainerRegistryTaskAgentSetting</a>

agent_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#agent_setting ContainerRegistryTask#agent_setting}

---

##### `base_image_trigger`<sup>Optional</sup> <a name="base_image_trigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.baseImageTrigger"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger">ContainerRegistryTaskBaseImageTrigger</a>

base_image_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#base_image_trigger ContainerRegistryTask#base_image_trigger}

---

##### `docker_step`<sup>Optional</sup> <a name="docker_step" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.dockerStep"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep">ContainerRegistryTaskDockerStep</a>

docker_step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#docker_step ContainerRegistryTask#docker_step}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#enabled ContainerRegistryTask#enabled}.

---

##### `encoded_step`<sup>Optional</sup> <a name="encoded_step" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.encodedStep"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep">ContainerRegistryTaskEncodedStep</a>

encoded_step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#encoded_step ContainerRegistryTask#encoded_step}

---

##### `file_step`<sup>Optional</sup> <a name="file_step" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.fileStep"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep">ContainerRegistryTaskFileStep</a>

file_step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#file_step ContainerRegistryTask#file_step}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#id ContainerRegistryTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity">ContainerRegistryTaskIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#identity ContainerRegistryTask#identity}

---

##### `is_system_task`<sup>Optional</sup> <a name="is_system_task" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.isSystemTask"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#is_system_task ContainerRegistryTask#is_system_task}.

---

##### `log_template`<sup>Optional</sup> <a name="log_template" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.logTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#log_template ContainerRegistryTask#log_template}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.platform"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform">ContainerRegistryTaskPlatform</a>

platform block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#platform ContainerRegistryTask#platform}

---

##### `registry_credential`<sup>Optional</sup> <a name="registry_credential" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.registryCredential"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential">ContainerRegistryTaskRegistryCredential</a>

registry_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#registry_credential ContainerRegistryTask#registry_credential}

---

##### `source_trigger`<sup>Optional</sup> <a name="source_trigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.sourceTrigger"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger">ContainerRegistryTaskSourceTrigger</a>]]

source_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#source_trigger ContainerRegistryTask#source_trigger}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#tags ContainerRegistryTask#tags}.

---

##### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.timeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#timeout_in_seconds ContainerRegistryTask#timeout_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts">ContainerRegistryTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#timeouts ContainerRegistryTask#timeouts}

---

##### `timer_trigger`<sup>Optional</sup> <a name="timer_trigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.timerTrigger"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger">ContainerRegistryTaskTimerTrigger</a>]]

timer_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#timer_trigger ContainerRegistryTask#timer_trigger}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putAgentSetting">put_agent_setting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putBaseImageTrigger">put_base_image_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putDockerStep">put_docker_step</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putEncodedStep">put_encoded_step</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putFileStep">put_file_step</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putPlatform">put_platform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putRegistryCredential">put_registry_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putSourceTrigger">put_source_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putTimerTrigger">put_timer_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetAgentPoolName">reset_agent_pool_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetAgentSetting">reset_agent_setting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetBaseImageTrigger">reset_base_image_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetDockerStep">reset_docker_step</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetEncodedStep">reset_encoded_step</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetFileStep">reset_file_step</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetIsSystemTask">reset_is_system_task</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetLogTemplate">reset_log_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetPlatform">reset_platform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetRegistryCredential">reset_registry_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetSourceTrigger">reset_source_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetTimeoutInSeconds">reset_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetTimerTrigger">reset_timer_trigger</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_agent_setting` <a name="put_agent_setting" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putAgentSetting"></a>

```python
def put_agent_setting(
  cpu: typing.Union[int, float]
) -> None
```

###### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putAgentSetting.parameter.cpu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#cpu ContainerRegistryTask#cpu}.

---

##### `put_base_image_trigger` <a name="put_base_image_trigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putBaseImageTrigger"></a>

```python
def put_base_image_trigger(
  name: str,
  type: str,
  enabled: typing.Union[bool, IResolvable] = None,
  update_trigger_endpoint: str = None,
  update_trigger_payload_type: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putBaseImageTrigger.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#name ContainerRegistryTask#name}.

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putBaseImageTrigger.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#type ContainerRegistryTask#type}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putBaseImageTrigger.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#enabled ContainerRegistryTask#enabled}.

---

###### `update_trigger_endpoint`<sup>Optional</sup> <a name="update_trigger_endpoint" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putBaseImageTrigger.parameter.updateTriggerEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#update_trigger_endpoint ContainerRegistryTask#update_trigger_endpoint}.

---

###### `update_trigger_payload_type`<sup>Optional</sup> <a name="update_trigger_payload_type" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putBaseImageTrigger.parameter.updateTriggerPayloadType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#update_trigger_payload_type ContainerRegistryTask#update_trigger_payload_type}.

---

##### `put_docker_step` <a name="put_docker_step" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putDockerStep"></a>

```python
def put_docker_step(
  context_access_token: str,
  context_path: str,
  dockerfile_path: str,
  arguments: typing.Mapping[str] = None,
  cache_enabled: typing.Union[bool, IResolvable] = None,
  image_names: typing.List[str] = None,
  push_enabled: typing.Union[bool, IResolvable] = None,
  secret_arguments: typing.Mapping[str] = None,
  target: str = None
) -> None
```

###### `context_access_token`<sup>Required</sup> <a name="context_access_token" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putDockerStep.parameter.contextAccessToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#context_access_token ContainerRegistryTask#context_access_token}.

---

###### `context_path`<sup>Required</sup> <a name="context_path" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putDockerStep.parameter.contextPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#context_path ContainerRegistryTask#context_path}.

---

###### `dockerfile_path`<sup>Required</sup> <a name="dockerfile_path" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putDockerStep.parameter.dockerfilePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#dockerfile_path ContainerRegistryTask#dockerfile_path}.

---

###### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putDockerStep.parameter.arguments"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#arguments ContainerRegistryTask#arguments}.

---

###### `cache_enabled`<sup>Optional</sup> <a name="cache_enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putDockerStep.parameter.cacheEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#cache_enabled ContainerRegistryTask#cache_enabled}.

---

###### `image_names`<sup>Optional</sup> <a name="image_names" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putDockerStep.parameter.imageNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#image_names ContainerRegistryTask#image_names}.

---

###### `push_enabled`<sup>Optional</sup> <a name="push_enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putDockerStep.parameter.pushEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#push_enabled ContainerRegistryTask#push_enabled}.

---

###### `secret_arguments`<sup>Optional</sup> <a name="secret_arguments" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putDockerStep.parameter.secretArguments"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#secret_arguments ContainerRegistryTask#secret_arguments}.

---

###### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putDockerStep.parameter.target"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#target ContainerRegistryTask#target}.

---

##### `put_encoded_step` <a name="put_encoded_step" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putEncodedStep"></a>

```python
def put_encoded_step(
  task_content: str,
  context_access_token: str = None,
  context_path: str = None,
  secret_values: typing.Mapping[str] = None,
  value_content: str = None,
  values: typing.Mapping[str] = None
) -> None
```

###### `task_content`<sup>Required</sup> <a name="task_content" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putEncodedStep.parameter.taskContent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#task_content ContainerRegistryTask#task_content}.

---

###### `context_access_token`<sup>Optional</sup> <a name="context_access_token" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putEncodedStep.parameter.contextAccessToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#context_access_token ContainerRegistryTask#context_access_token}.

---

###### `context_path`<sup>Optional</sup> <a name="context_path" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putEncodedStep.parameter.contextPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#context_path ContainerRegistryTask#context_path}.

---

###### `secret_values`<sup>Optional</sup> <a name="secret_values" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putEncodedStep.parameter.secretValues"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#secret_values ContainerRegistryTask#secret_values}.

---

###### `value_content`<sup>Optional</sup> <a name="value_content" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putEncodedStep.parameter.valueContent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#value_content ContainerRegistryTask#value_content}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putEncodedStep.parameter.values"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#values ContainerRegistryTask#values}.

---

##### `put_file_step` <a name="put_file_step" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putFileStep"></a>

```python
def put_file_step(
  task_file_path: str,
  context_access_token: str = None,
  context_path: str = None,
  secret_values: typing.Mapping[str] = None,
  value_file_path: str = None,
  values: typing.Mapping[str] = None
) -> None
```

###### `task_file_path`<sup>Required</sup> <a name="task_file_path" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putFileStep.parameter.taskFilePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#task_file_path ContainerRegistryTask#task_file_path}.

---

###### `context_access_token`<sup>Optional</sup> <a name="context_access_token" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putFileStep.parameter.contextAccessToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#context_access_token ContainerRegistryTask#context_access_token}.

---

###### `context_path`<sup>Optional</sup> <a name="context_path" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putFileStep.parameter.contextPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#context_path ContainerRegistryTask#context_path}.

---

###### `secret_values`<sup>Optional</sup> <a name="secret_values" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putFileStep.parameter.secretValues"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#secret_values ContainerRegistryTask#secret_values}.

---

###### `value_file_path`<sup>Optional</sup> <a name="value_file_path" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putFileStep.parameter.valueFilePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#value_file_path ContainerRegistryTask#value_file_path}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putFileStep.parameter.values"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#values ContainerRegistryTask#values}.

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#type ContainerRegistryTask#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#identity_ids ContainerRegistryTask#identity_ids}.

---

##### `put_platform` <a name="put_platform" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putPlatform"></a>

```python
def put_platform(
  os: str,
  architecture: str = None,
  variant: str = None
) -> None
```

###### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putPlatform.parameter.os"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#os ContainerRegistryTask#os}.

---

###### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putPlatform.parameter.architecture"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#architecture ContainerRegistryTask#architecture}.

---

###### `variant`<sup>Optional</sup> <a name="variant" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putPlatform.parameter.variant"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#variant ContainerRegistryTask#variant}.

---

##### `put_registry_credential` <a name="put_registry_credential" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putRegistryCredential"></a>

```python
def put_registry_credential(
  custom: typing.Union[IResolvable, typing.List[ContainerRegistryTaskRegistryCredentialCustom]] = None,
  source: ContainerRegistryTaskRegistryCredentialSource = None
) -> None
```

###### `custom`<sup>Optional</sup> <a name="custom" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putRegistryCredential.parameter.custom"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom">ContainerRegistryTaskRegistryCredentialCustom</a>]]

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#custom ContainerRegistryTask#custom}

---

###### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putRegistryCredential.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSource">ContainerRegistryTaskRegistryCredentialSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#source ContainerRegistryTask#source}

---

##### `put_source_trigger` <a name="put_source_trigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putSourceTrigger"></a>

```python
def put_source_trigger(
  value: typing.Union[IResolvable, typing.List[ContainerRegistryTaskSourceTrigger]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putSourceTrigger.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger">ContainerRegistryTaskSourceTrigger</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#create ContainerRegistryTask#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#delete ContainerRegistryTask#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#read ContainerRegistryTask#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#update ContainerRegistryTask#update}.

---

##### `put_timer_trigger` <a name="put_timer_trigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putTimerTrigger"></a>

```python
def put_timer_trigger(
  value: typing.Union[IResolvable, typing.List[ContainerRegistryTaskTimerTrigger]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putTimerTrigger.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger">ContainerRegistryTaskTimerTrigger</a>]]

---

##### `reset_agent_pool_name` <a name="reset_agent_pool_name" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetAgentPoolName"></a>

```python
def reset_agent_pool_name() -> None
```

##### `reset_agent_setting` <a name="reset_agent_setting" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetAgentSetting"></a>

```python
def reset_agent_setting() -> None
```

##### `reset_base_image_trigger` <a name="reset_base_image_trigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetBaseImageTrigger"></a>

```python
def reset_base_image_trigger() -> None
```

##### `reset_docker_step` <a name="reset_docker_step" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetDockerStep"></a>

```python
def reset_docker_step() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_encoded_step` <a name="reset_encoded_step" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetEncodedStep"></a>

```python
def reset_encoded_step() -> None
```

##### `reset_file_step` <a name="reset_file_step" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetFileStep"></a>

```python
def reset_file_step() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_is_system_task` <a name="reset_is_system_task" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetIsSystemTask"></a>

```python
def reset_is_system_task() -> None
```

##### `reset_log_template` <a name="reset_log_template" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetLogTemplate"></a>

```python
def reset_log_template() -> None
```

##### `reset_platform` <a name="reset_platform" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetPlatform"></a>

```python
def reset_platform() -> None
```

##### `reset_registry_credential` <a name="reset_registry_credential" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetRegistryCredential"></a>

```python
def reset_registry_credential() -> None
```

##### `reset_source_trigger` <a name="reset_source_trigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetSourceTrigger"></a>

```python
def reset_source_trigger() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeout_in_seconds` <a name="reset_timeout_in_seconds" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetTimeoutInSeconds"></a>

```python
def reset_timeout_in_seconds() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_timer_trigger` <a name="reset_timer_trigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetTimerTrigger"></a>

```python
def reset_timer_trigger() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTask.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTask.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTask.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.agentSetting">agent_setting</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference">ContainerRegistryTaskAgentSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.baseImageTrigger">base_image_trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference">ContainerRegistryTaskBaseImageTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.dockerStep">docker_step</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference">ContainerRegistryTaskDockerStepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.encodedStep">encoded_step</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference">ContainerRegistryTaskEncodedStepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.fileStep">file_step</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference">ContainerRegistryTaskFileStepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference">ContainerRegistryTaskIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.platform">platform</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference">ContainerRegistryTaskPlatformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.registryCredential">registry_credential</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference">ContainerRegistryTaskRegistryCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.sourceTrigger">source_trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList">ContainerRegistryTaskSourceTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference">ContainerRegistryTaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.timerTrigger">timer_trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList">ContainerRegistryTaskTimerTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.agentPoolNameInput">agent_pool_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.agentSettingInput">agent_setting_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSetting">ContainerRegistryTaskAgentSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.baseImageTriggerInput">base_image_trigger_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger">ContainerRegistryTaskBaseImageTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.containerRegistryIdInput">container_registry_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.dockerStepInput">docker_step_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep">ContainerRegistryTaskDockerStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.encodedStepInput">encoded_step_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep">ContainerRegistryTaskEncodedStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.fileStepInput">file_step_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep">ContainerRegistryTaskFileStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity">ContainerRegistryTaskIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.isSystemTaskInput">is_system_task_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.logTemplateInput">log_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.platformInput">platform_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform">ContainerRegistryTaskPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.registryCredentialInput">registry_credential_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential">ContainerRegistryTaskRegistryCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.sourceTriggerInput">source_trigger_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger">ContainerRegistryTaskSourceTrigger</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.timeoutInSecondsInput">timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts">ContainerRegistryTaskTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.timerTriggerInput">timer_trigger_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger">ContainerRegistryTaskTimerTrigger</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.agentPoolName">agent_pool_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.containerRegistryId">container_registry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.isSystemTask">is_system_task</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.logTemplate">log_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_setting`<sup>Required</sup> <a name="agent_setting" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.agentSetting"></a>

```python
agent_setting: ContainerRegistryTaskAgentSettingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference">ContainerRegistryTaskAgentSettingOutputReference</a>

---

##### `base_image_trigger`<sup>Required</sup> <a name="base_image_trigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.baseImageTrigger"></a>

```python
base_image_trigger: ContainerRegistryTaskBaseImageTriggerOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference">ContainerRegistryTaskBaseImageTriggerOutputReference</a>

---

##### `docker_step`<sup>Required</sup> <a name="docker_step" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.dockerStep"></a>

```python
docker_step: ContainerRegistryTaskDockerStepOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference">ContainerRegistryTaskDockerStepOutputReference</a>

---

##### `encoded_step`<sup>Required</sup> <a name="encoded_step" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.encodedStep"></a>

```python
encoded_step: ContainerRegistryTaskEncodedStepOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference">ContainerRegistryTaskEncodedStepOutputReference</a>

---

##### `file_step`<sup>Required</sup> <a name="file_step" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.fileStep"></a>

```python
file_step: ContainerRegistryTaskFileStepOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference">ContainerRegistryTaskFileStepOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.identity"></a>

```python
identity: ContainerRegistryTaskIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference">ContainerRegistryTaskIdentityOutputReference</a>

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.platform"></a>

```python
platform: ContainerRegistryTaskPlatformOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference">ContainerRegistryTaskPlatformOutputReference</a>

---

##### `registry_credential`<sup>Required</sup> <a name="registry_credential" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.registryCredential"></a>

```python
registry_credential: ContainerRegistryTaskRegistryCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference">ContainerRegistryTaskRegistryCredentialOutputReference</a>

---

##### `source_trigger`<sup>Required</sup> <a name="source_trigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.sourceTrigger"></a>

```python
source_trigger: ContainerRegistryTaskSourceTriggerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList">ContainerRegistryTaskSourceTriggerList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.timeouts"></a>

```python
timeouts: ContainerRegistryTaskTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference">ContainerRegistryTaskTimeoutsOutputReference</a>

---

##### `timer_trigger`<sup>Required</sup> <a name="timer_trigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.timerTrigger"></a>

```python
timer_trigger: ContainerRegistryTaskTimerTriggerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList">ContainerRegistryTaskTimerTriggerList</a>

---

##### `agent_pool_name_input`<sup>Optional</sup> <a name="agent_pool_name_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.agentPoolNameInput"></a>

```python
agent_pool_name_input: str
```

- *Type:* str

---

##### `agent_setting_input`<sup>Optional</sup> <a name="agent_setting_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.agentSettingInput"></a>

```python
agent_setting_input: ContainerRegistryTaskAgentSetting
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSetting">ContainerRegistryTaskAgentSetting</a>

---

##### `base_image_trigger_input`<sup>Optional</sup> <a name="base_image_trigger_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.baseImageTriggerInput"></a>

```python
base_image_trigger_input: ContainerRegistryTaskBaseImageTrigger
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger">ContainerRegistryTaskBaseImageTrigger</a>

---

##### `container_registry_id_input`<sup>Optional</sup> <a name="container_registry_id_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.containerRegistryIdInput"></a>

```python
container_registry_id_input: str
```

- *Type:* str

---

##### `docker_step_input`<sup>Optional</sup> <a name="docker_step_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.dockerStepInput"></a>

```python
docker_step_input: ContainerRegistryTaskDockerStep
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep">ContainerRegistryTaskDockerStep</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encoded_step_input`<sup>Optional</sup> <a name="encoded_step_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.encodedStepInput"></a>

```python
encoded_step_input: ContainerRegistryTaskEncodedStep
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep">ContainerRegistryTaskEncodedStep</a>

---

##### `file_step_input`<sup>Optional</sup> <a name="file_step_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.fileStepInput"></a>

```python
file_step_input: ContainerRegistryTaskFileStep
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep">ContainerRegistryTaskFileStep</a>

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.identityInput"></a>

```python
identity_input: ContainerRegistryTaskIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity">ContainerRegistryTaskIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_system_task_input`<sup>Optional</sup> <a name="is_system_task_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.isSystemTaskInput"></a>

```python
is_system_task_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_template_input`<sup>Optional</sup> <a name="log_template_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.logTemplateInput"></a>

```python
log_template_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `platform_input`<sup>Optional</sup> <a name="platform_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.platformInput"></a>

```python
platform_input: ContainerRegistryTaskPlatform
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform">ContainerRegistryTaskPlatform</a>

---

##### `registry_credential_input`<sup>Optional</sup> <a name="registry_credential_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.registryCredentialInput"></a>

```python
registry_credential_input: ContainerRegistryTaskRegistryCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential">ContainerRegistryTaskRegistryCredential</a>

---

##### `source_trigger_input`<sup>Optional</sup> <a name="source_trigger_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.sourceTriggerInput"></a>

```python
source_trigger_input: typing.Union[IResolvable, typing.List[ContainerRegistryTaskSourceTrigger]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger">ContainerRegistryTaskSourceTrigger</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeout_in_seconds_input`<sup>Optional</sup> <a name="timeout_in_seconds_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.timeoutInSecondsInput"></a>

```python
timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ContainerRegistryTaskTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts">ContainerRegistryTaskTimeouts</a>]

---

##### `timer_trigger_input`<sup>Optional</sup> <a name="timer_trigger_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.timerTriggerInput"></a>

```python
timer_trigger_input: typing.Union[IResolvable, typing.List[ContainerRegistryTaskTimerTrigger]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger">ContainerRegistryTaskTimerTrigger</a>]]

---

##### `agent_pool_name`<sup>Required</sup> <a name="agent_pool_name" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.agentPoolName"></a>

```python
agent_pool_name: str
```

- *Type:* str

---

##### `container_registry_id`<sup>Required</sup> <a name="container_registry_id" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.containerRegistryId"></a>

```python
container_registry_id: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_system_task`<sup>Required</sup> <a name="is_system_task" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.isSystemTask"></a>

```python
is_system_task: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_template`<sup>Required</sup> <a name="log_template" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.logTemplate"></a>

```python
log_template: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryTaskAgentSetting <a name="ContainerRegistryTaskAgentSetting" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSetting.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskAgentSetting(
  cpu: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSetting.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#cpu ContainerRegistryTask#cpu}. |

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSetting.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#cpu ContainerRegistryTask#cpu}.

---

### ContainerRegistryTaskBaseImageTrigger <a name="ContainerRegistryTaskBaseImageTrigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskBaseImageTrigger(
  name: str,
  type: str,
  enabled: typing.Union[bool, IResolvable] = None,
  update_trigger_endpoint: str = None,
  update_trigger_payload_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#name ContainerRegistryTask#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#type ContainerRegistryTask#type}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#enabled ContainerRegistryTask#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger.property.updateTriggerEndpoint">update_trigger_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#update_trigger_endpoint ContainerRegistryTask#update_trigger_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger.property.updateTriggerPayloadType">update_trigger_payload_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#update_trigger_payload_type ContainerRegistryTask#update_trigger_payload_type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#name ContainerRegistryTask#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#type ContainerRegistryTask#type}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#enabled ContainerRegistryTask#enabled}.

---

##### `update_trigger_endpoint`<sup>Optional</sup> <a name="update_trigger_endpoint" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger.property.updateTriggerEndpoint"></a>

```python
update_trigger_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#update_trigger_endpoint ContainerRegistryTask#update_trigger_endpoint}.

---

##### `update_trigger_payload_type`<sup>Optional</sup> <a name="update_trigger_payload_type" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger.property.updateTriggerPayloadType"></a>

```python
update_trigger_payload_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#update_trigger_payload_type ContainerRegistryTask#update_trigger_payload_type}.

---

### ContainerRegistryTaskConfig <a name="ContainerRegistryTaskConfig" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_registry_id: str,
  name: str,
  agent_pool_name: str = None,
  agent_setting: ContainerRegistryTaskAgentSetting = None,
  base_image_trigger: ContainerRegistryTaskBaseImageTrigger = None,
  docker_step: ContainerRegistryTaskDockerStep = None,
  enabled: typing.Union[bool, IResolvable] = None,
  encoded_step: ContainerRegistryTaskEncodedStep = None,
  file_step: ContainerRegistryTaskFileStep = None,
  id: str = None,
  identity: ContainerRegistryTaskIdentity = None,
  is_system_task: typing.Union[bool, IResolvable] = None,
  log_template: str = None,
  platform: ContainerRegistryTaskPlatform = None,
  registry_credential: ContainerRegistryTaskRegistryCredential = None,
  source_trigger: typing.Union[IResolvable, typing.List[ContainerRegistryTaskSourceTrigger]] = None,
  tags: typing.Mapping[str] = None,
  timeout_in_seconds: typing.Union[int, float] = None,
  timeouts: ContainerRegistryTaskTimeouts = None,
  timer_trigger: typing.Union[IResolvable, typing.List[ContainerRegistryTaskTimerTrigger]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.containerRegistryId">container_registry_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#container_registry_id ContainerRegistryTask#container_registry_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#name ContainerRegistryTask#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.agentPoolName">agent_pool_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#agent_pool_name ContainerRegistryTask#agent_pool_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.agentSetting">agent_setting</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSetting">ContainerRegistryTaskAgentSetting</a></code> | agent_setting block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.baseImageTrigger">base_image_trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger">ContainerRegistryTaskBaseImageTrigger</a></code> | base_image_trigger block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.dockerStep">docker_step</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep">ContainerRegistryTaskDockerStep</a></code> | docker_step block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#enabled ContainerRegistryTask#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.encodedStep">encoded_step</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep">ContainerRegistryTaskEncodedStep</a></code> | encoded_step block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.fileStep">file_step</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep">ContainerRegistryTaskFileStep</a></code> | file_step block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#id ContainerRegistryTask#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity">ContainerRegistryTaskIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.isSystemTask">is_system_task</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#is_system_task ContainerRegistryTask#is_system_task}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.logTemplate">log_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#log_template ContainerRegistryTask#log_template}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.platform">platform</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform">ContainerRegistryTaskPlatform</a></code> | platform block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.registryCredential">registry_credential</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential">ContainerRegistryTaskRegistryCredential</a></code> | registry_credential block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.sourceTrigger">source_trigger</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger">ContainerRegistryTaskSourceTrigger</a>]]</code> | source_trigger block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#tags ContainerRegistryTask#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#timeout_in_seconds ContainerRegistryTask#timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts">ContainerRegistryTaskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.timerTrigger">timer_trigger</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger">ContainerRegistryTaskTimerTrigger</a>]]</code> | timer_trigger block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_registry_id`<sup>Required</sup> <a name="container_registry_id" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.containerRegistryId"></a>

```python
container_registry_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#container_registry_id ContainerRegistryTask#container_registry_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#name ContainerRegistryTask#name}.

---

##### `agent_pool_name`<sup>Optional</sup> <a name="agent_pool_name" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.agentPoolName"></a>

```python
agent_pool_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#agent_pool_name ContainerRegistryTask#agent_pool_name}.

---

##### `agent_setting`<sup>Optional</sup> <a name="agent_setting" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.agentSetting"></a>

```python
agent_setting: ContainerRegistryTaskAgentSetting
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSetting">ContainerRegistryTaskAgentSetting</a>

agent_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#agent_setting ContainerRegistryTask#agent_setting}

---

##### `base_image_trigger`<sup>Optional</sup> <a name="base_image_trigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.baseImageTrigger"></a>

```python
base_image_trigger: ContainerRegistryTaskBaseImageTrigger
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger">ContainerRegistryTaskBaseImageTrigger</a>

base_image_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#base_image_trigger ContainerRegistryTask#base_image_trigger}

---

##### `docker_step`<sup>Optional</sup> <a name="docker_step" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.dockerStep"></a>

```python
docker_step: ContainerRegistryTaskDockerStep
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep">ContainerRegistryTaskDockerStep</a>

docker_step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#docker_step ContainerRegistryTask#docker_step}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#enabled ContainerRegistryTask#enabled}.

---

##### `encoded_step`<sup>Optional</sup> <a name="encoded_step" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.encodedStep"></a>

```python
encoded_step: ContainerRegistryTaskEncodedStep
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep">ContainerRegistryTaskEncodedStep</a>

encoded_step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#encoded_step ContainerRegistryTask#encoded_step}

---

##### `file_step`<sup>Optional</sup> <a name="file_step" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.fileStep"></a>

```python
file_step: ContainerRegistryTaskFileStep
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep">ContainerRegistryTaskFileStep</a>

file_step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#file_step ContainerRegistryTask#file_step}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#id ContainerRegistryTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.identity"></a>

```python
identity: ContainerRegistryTaskIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity">ContainerRegistryTaskIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#identity ContainerRegistryTask#identity}

---

##### `is_system_task`<sup>Optional</sup> <a name="is_system_task" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.isSystemTask"></a>

```python
is_system_task: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#is_system_task ContainerRegistryTask#is_system_task}.

---

##### `log_template`<sup>Optional</sup> <a name="log_template" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.logTemplate"></a>

```python
log_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#log_template ContainerRegistryTask#log_template}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.platform"></a>

```python
platform: ContainerRegistryTaskPlatform
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform">ContainerRegistryTaskPlatform</a>

platform block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#platform ContainerRegistryTask#platform}

---

##### `registry_credential`<sup>Optional</sup> <a name="registry_credential" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.registryCredential"></a>

```python
registry_credential: ContainerRegistryTaskRegistryCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential">ContainerRegistryTaskRegistryCredential</a>

registry_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#registry_credential ContainerRegistryTask#registry_credential}

---

##### `source_trigger`<sup>Optional</sup> <a name="source_trigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.sourceTrigger"></a>

```python
source_trigger: typing.Union[IResolvable, typing.List[ContainerRegistryTaskSourceTrigger]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger">ContainerRegistryTaskSourceTrigger</a>]]

source_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#source_trigger ContainerRegistryTask#source_trigger}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#tags ContainerRegistryTask#tags}.

---

##### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#timeout_in_seconds ContainerRegistryTask#timeout_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.timeouts"></a>

```python
timeouts: ContainerRegistryTaskTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts">ContainerRegistryTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#timeouts ContainerRegistryTask#timeouts}

---

##### `timer_trigger`<sup>Optional</sup> <a name="timer_trigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.timerTrigger"></a>

```python
timer_trigger: typing.Union[IResolvable, typing.List[ContainerRegistryTaskTimerTrigger]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger">ContainerRegistryTaskTimerTrigger</a>]]

timer_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#timer_trigger ContainerRegistryTask#timer_trigger}

---

### ContainerRegistryTaskDockerStep <a name="ContainerRegistryTaskDockerStep" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskDockerStep(
  context_access_token: str,
  context_path: str,
  dockerfile_path: str,
  arguments: typing.Mapping[str] = None,
  cache_enabled: typing.Union[bool, IResolvable] = None,
  image_names: typing.List[str] = None,
  push_enabled: typing.Union[bool, IResolvable] = None,
  secret_arguments: typing.Mapping[str] = None,
  target: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.contextAccessToken">context_access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#context_access_token ContainerRegistryTask#context_access_token}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.contextPath">context_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#context_path ContainerRegistryTask#context_path}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.dockerfilePath">dockerfile_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#dockerfile_path ContainerRegistryTask#dockerfile_path}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.arguments">arguments</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#arguments ContainerRegistryTask#arguments}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.cacheEnabled">cache_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#cache_enabled ContainerRegistryTask#cache_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.imageNames">image_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#image_names ContainerRegistryTask#image_names}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.pushEnabled">push_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#push_enabled ContainerRegistryTask#push_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.secretArguments">secret_arguments</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#secret_arguments ContainerRegistryTask#secret_arguments}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#target ContainerRegistryTask#target}. |

---

##### `context_access_token`<sup>Required</sup> <a name="context_access_token" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.contextAccessToken"></a>

```python
context_access_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#context_access_token ContainerRegistryTask#context_access_token}.

---

##### `context_path`<sup>Required</sup> <a name="context_path" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.contextPath"></a>

```python
context_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#context_path ContainerRegistryTask#context_path}.

---

##### `dockerfile_path`<sup>Required</sup> <a name="dockerfile_path" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.dockerfilePath"></a>

```python
dockerfile_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#dockerfile_path ContainerRegistryTask#dockerfile_path}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.arguments"></a>

```python
arguments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#arguments ContainerRegistryTask#arguments}.

---

##### `cache_enabled`<sup>Optional</sup> <a name="cache_enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.cacheEnabled"></a>

```python
cache_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#cache_enabled ContainerRegistryTask#cache_enabled}.

---

##### `image_names`<sup>Optional</sup> <a name="image_names" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.imageNames"></a>

```python
image_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#image_names ContainerRegistryTask#image_names}.

---

##### `push_enabled`<sup>Optional</sup> <a name="push_enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.pushEnabled"></a>

```python
push_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#push_enabled ContainerRegistryTask#push_enabled}.

---

##### `secret_arguments`<sup>Optional</sup> <a name="secret_arguments" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.secretArguments"></a>

```python
secret_arguments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#secret_arguments ContainerRegistryTask#secret_arguments}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#target ContainerRegistryTask#target}.

---

### ContainerRegistryTaskEncodedStep <a name="ContainerRegistryTaskEncodedStep" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskEncodedStep(
  task_content: str,
  context_access_token: str = None,
  context_path: str = None,
  secret_values: typing.Mapping[str] = None,
  value_content: str = None,
  values: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.property.taskContent">task_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#task_content ContainerRegistryTask#task_content}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.property.contextAccessToken">context_access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#context_access_token ContainerRegistryTask#context_access_token}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.property.contextPath">context_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#context_path ContainerRegistryTask#context_path}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.property.secretValues">secret_values</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#secret_values ContainerRegistryTask#secret_values}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.property.valueContent">value_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#value_content ContainerRegistryTask#value_content}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.property.values">values</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#values ContainerRegistryTask#values}. |

---

##### `task_content`<sup>Required</sup> <a name="task_content" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.property.taskContent"></a>

```python
task_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#task_content ContainerRegistryTask#task_content}.

---

##### `context_access_token`<sup>Optional</sup> <a name="context_access_token" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.property.contextAccessToken"></a>

```python
context_access_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#context_access_token ContainerRegistryTask#context_access_token}.

---

##### `context_path`<sup>Optional</sup> <a name="context_path" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.property.contextPath"></a>

```python
context_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#context_path ContainerRegistryTask#context_path}.

---

##### `secret_values`<sup>Optional</sup> <a name="secret_values" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.property.secretValues"></a>

```python
secret_values: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#secret_values ContainerRegistryTask#secret_values}.

---

##### `value_content`<sup>Optional</sup> <a name="value_content" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.property.valueContent"></a>

```python
value_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#value_content ContainerRegistryTask#value_content}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.property.values"></a>

```python
values: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#values ContainerRegistryTask#values}.

---

### ContainerRegistryTaskFileStep <a name="ContainerRegistryTaskFileStep" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskFileStep(
  task_file_path: str,
  context_access_token: str = None,
  context_path: str = None,
  secret_values: typing.Mapping[str] = None,
  value_file_path: str = None,
  values: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.property.taskFilePath">task_file_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#task_file_path ContainerRegistryTask#task_file_path}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.property.contextAccessToken">context_access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#context_access_token ContainerRegistryTask#context_access_token}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.property.contextPath">context_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#context_path ContainerRegistryTask#context_path}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.property.secretValues">secret_values</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#secret_values ContainerRegistryTask#secret_values}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.property.valueFilePath">value_file_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#value_file_path ContainerRegistryTask#value_file_path}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.property.values">values</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#values ContainerRegistryTask#values}. |

---

##### `task_file_path`<sup>Required</sup> <a name="task_file_path" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.property.taskFilePath"></a>

```python
task_file_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#task_file_path ContainerRegistryTask#task_file_path}.

---

##### `context_access_token`<sup>Optional</sup> <a name="context_access_token" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.property.contextAccessToken"></a>

```python
context_access_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#context_access_token ContainerRegistryTask#context_access_token}.

---

##### `context_path`<sup>Optional</sup> <a name="context_path" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.property.contextPath"></a>

```python
context_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#context_path ContainerRegistryTask#context_path}.

---

##### `secret_values`<sup>Optional</sup> <a name="secret_values" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.property.secretValues"></a>

```python
secret_values: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#secret_values ContainerRegistryTask#secret_values}.

---

##### `value_file_path`<sup>Optional</sup> <a name="value_file_path" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.property.valueFilePath"></a>

```python
value_file_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#value_file_path ContainerRegistryTask#value_file_path}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.property.values"></a>

```python
values: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#values ContainerRegistryTask#values}.

---

### ContainerRegistryTaskIdentity <a name="ContainerRegistryTaskIdentity" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#type ContainerRegistryTask#type}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#identity_ids ContainerRegistryTask#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#type ContainerRegistryTask#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#identity_ids ContainerRegistryTask#identity_ids}.

---

### ContainerRegistryTaskPlatform <a name="ContainerRegistryTaskPlatform" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskPlatform(
  os: str,
  architecture: str = None,
  variant: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform.property.os">os</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#os ContainerRegistryTask#os}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform.property.architecture">architecture</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#architecture ContainerRegistryTask#architecture}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform.property.variant">variant</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#variant ContainerRegistryTask#variant}. |

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform.property.os"></a>

```python
os: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#os ContainerRegistryTask#os}.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#architecture ContainerRegistryTask#architecture}.

---

##### `variant`<sup>Optional</sup> <a name="variant" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform.property.variant"></a>

```python
variant: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#variant ContainerRegistryTask#variant}.

---

### ContainerRegistryTaskRegistryCredential <a name="ContainerRegistryTaskRegistryCredential" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskRegistryCredential(
  custom: typing.Union[IResolvable, typing.List[ContainerRegistryTaskRegistryCredentialCustom]] = None,
  source: ContainerRegistryTaskRegistryCredentialSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential.property.custom">custom</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom">ContainerRegistryTaskRegistryCredentialCustom</a>]]</code> | custom block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential.property.source">source</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSource">ContainerRegistryTaskRegistryCredentialSource</a></code> | source block. |

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential.property.custom"></a>

```python
custom: typing.Union[IResolvable, typing.List[ContainerRegistryTaskRegistryCredentialCustom]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom">ContainerRegistryTaskRegistryCredentialCustom</a>]]

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#custom ContainerRegistryTask#custom}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential.property.source"></a>

```python
source: ContainerRegistryTaskRegistryCredentialSource
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSource">ContainerRegistryTaskRegistryCredentialSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#source ContainerRegistryTask#source}

---

### ContainerRegistryTaskRegistryCredentialCustom <a name="ContainerRegistryTaskRegistryCredentialCustom" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom(
  login_server: str,
  identity: str = None,
  password: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom.property.loginServer">login_server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#login_server ContainerRegistryTask#login_server}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom.property.identity">identity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#identity ContainerRegistryTask#identity}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#password ContainerRegistryTask#password}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#username ContainerRegistryTask#username}. |

---

##### `login_server`<sup>Required</sup> <a name="login_server" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom.property.loginServer"></a>

```python
login_server: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#login_server ContainerRegistryTask#login_server}.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom.property.identity"></a>

```python
identity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#identity ContainerRegistryTask#identity}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#password ContainerRegistryTask#password}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#username ContainerRegistryTask#username}.

---

### ContainerRegistryTaskRegistryCredentialSource <a name="ContainerRegistryTaskRegistryCredentialSource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSource.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskRegistryCredentialSource(
  login_mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSource.property.loginMode">login_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#login_mode ContainerRegistryTask#login_mode}. |

---

##### `login_mode`<sup>Required</sup> <a name="login_mode" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSource.property.loginMode"></a>

```python
login_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#login_mode ContainerRegistryTask#login_mode}.

---

### ContainerRegistryTaskSourceTrigger <a name="ContainerRegistryTaskSourceTrigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskSourceTrigger(
  events: typing.List[str],
  name: str,
  repository_url: str,
  source_type: str,
  authentication: ContainerRegistryTaskSourceTriggerAuthentication = None,
  branch: str = None,
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.events">events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#events ContainerRegistryTask#events}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#name ContainerRegistryTask#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.repositoryUrl">repository_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#repository_url ContainerRegistryTask#repository_url}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.sourceType">source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#source_type ContainerRegistryTask#source_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication">ContainerRegistryTaskSourceTriggerAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.branch">branch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#branch ContainerRegistryTask#branch}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#enabled ContainerRegistryTask#enabled}. |

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#events ContainerRegistryTask#events}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#name ContainerRegistryTask#name}.

---

##### `repository_url`<sup>Required</sup> <a name="repository_url" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.repositoryUrl"></a>

```python
repository_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#repository_url ContainerRegistryTask#repository_url}.

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#source_type ContainerRegistryTask#source_type}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.authentication"></a>

```python
authentication: ContainerRegistryTaskSourceTriggerAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication">ContainerRegistryTaskSourceTriggerAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#authentication ContainerRegistryTask#authentication}

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.branch"></a>

```python
branch: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#branch ContainerRegistryTask#branch}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#enabled ContainerRegistryTask#enabled}.

---

### ContainerRegistryTaskSourceTriggerAuthentication <a name="ContainerRegistryTaskSourceTriggerAuthentication" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication(
  token: str,
  token_type: str,
  expire_in_seconds: typing.Union[int, float] = None,
  refresh_token: str = None,
  scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication.property.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#token ContainerRegistryTask#token}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication.property.tokenType">token_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#token_type ContainerRegistryTask#token_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication.property.expireInSeconds">expire_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#expire_in_seconds ContainerRegistryTask#expire_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication.property.refreshToken">refresh_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#refresh_token ContainerRegistryTask#refresh_token}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#scope ContainerRegistryTask#scope}. |

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication.property.token"></a>

```python
token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#token ContainerRegistryTask#token}.

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#token_type ContainerRegistryTask#token_type}.

---

##### `expire_in_seconds`<sup>Optional</sup> <a name="expire_in_seconds" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication.property.expireInSeconds"></a>

```python
expire_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#expire_in_seconds ContainerRegistryTask#expire_in_seconds}.

---

##### `refresh_token`<sup>Optional</sup> <a name="refresh_token" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication.property.refreshToken"></a>

```python
refresh_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#refresh_token ContainerRegistryTask#refresh_token}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#scope ContainerRegistryTask#scope}.

---

### ContainerRegistryTaskTimeouts <a name="ContainerRegistryTaskTimeouts" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#create ContainerRegistryTask#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#delete ContainerRegistryTask#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#read ContainerRegistryTask#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#update ContainerRegistryTask#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#create ContainerRegistryTask#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#delete ContainerRegistryTask#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#read ContainerRegistryTask#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#update ContainerRegistryTask#update}.

---

### ContainerRegistryTaskTimerTrigger <a name="ContainerRegistryTaskTimerTrigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskTimerTrigger(
  name: str,
  schedule: str,
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#name ContainerRegistryTask#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger.property.schedule">schedule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#schedule ContainerRegistryTask#schedule}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#enabled ContainerRegistryTask#enabled}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#name ContainerRegistryTask#name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#schedule ContainerRegistryTask#schedule}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#enabled ContainerRegistryTask#enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerRegistryTaskAgentSettingOutputReference <a name="ContainerRegistryTaskAgentSettingOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.property.cpuInput">cpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSetting">ContainerRegistryTaskAgentSetting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.property.cpuInput"></a>

```python
cpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.property.internalValue"></a>

```python
internal_value: ContainerRegistryTaskAgentSetting
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSetting">ContainerRegistryTaskAgentSetting</a>

---


### ContainerRegistryTaskBaseImageTriggerOutputReference <a name="ContainerRegistryTaskBaseImageTriggerOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.resetUpdateTriggerEndpoint">reset_update_trigger_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.resetUpdateTriggerPayloadType">reset_update_trigger_payload_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_update_trigger_endpoint` <a name="reset_update_trigger_endpoint" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.resetUpdateTriggerEndpoint"></a>

```python
def reset_update_trigger_endpoint() -> None
```

##### `reset_update_trigger_payload_type` <a name="reset_update_trigger_payload_type" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.resetUpdateTriggerPayloadType"></a>

```python
def reset_update_trigger_payload_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.updateTriggerEndpointInput">update_trigger_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.updateTriggerPayloadTypeInput">update_trigger_payload_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.updateTriggerEndpoint">update_trigger_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.updateTriggerPayloadType">update_trigger_payload_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger">ContainerRegistryTaskBaseImageTrigger</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `update_trigger_endpoint_input`<sup>Optional</sup> <a name="update_trigger_endpoint_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.updateTriggerEndpointInput"></a>

```python
update_trigger_endpoint_input: str
```

- *Type:* str

---

##### `update_trigger_payload_type_input`<sup>Optional</sup> <a name="update_trigger_payload_type_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.updateTriggerPayloadTypeInput"></a>

```python
update_trigger_payload_type_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `update_trigger_endpoint`<sup>Required</sup> <a name="update_trigger_endpoint" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.updateTriggerEndpoint"></a>

```python
update_trigger_endpoint: str
```

- *Type:* str

---

##### `update_trigger_payload_type`<sup>Required</sup> <a name="update_trigger_payload_type" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.updateTriggerPayloadType"></a>

```python
update_trigger_payload_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.internalValue"></a>

```python
internal_value: ContainerRegistryTaskBaseImageTrigger
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger">ContainerRegistryTaskBaseImageTrigger</a>

---


### ContainerRegistryTaskDockerStepOutputReference <a name="ContainerRegistryTaskDockerStepOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resetArguments">reset_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resetCacheEnabled">reset_cache_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resetImageNames">reset_image_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resetPushEnabled">reset_push_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resetSecretArguments">reset_secret_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arguments` <a name="reset_arguments" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resetArguments"></a>

```python
def reset_arguments() -> None
```

##### `reset_cache_enabled` <a name="reset_cache_enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resetCacheEnabled"></a>

```python
def reset_cache_enabled() -> None
```

##### `reset_image_names` <a name="reset_image_names" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resetImageNames"></a>

```python
def reset_image_names() -> None
```

##### `reset_push_enabled` <a name="reset_push_enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resetPushEnabled"></a>

```python
def reset_push_enabled() -> None
```

##### `reset_secret_arguments` <a name="reset_secret_arguments" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resetSecretArguments"></a>

```python
def reset_secret_arguments() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.argumentsInput">arguments_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.cacheEnabledInput">cache_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.contextAccessTokenInput">context_access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.contextPathInput">context_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.dockerfilePathInput">dockerfile_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.imageNamesInput">image_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.pushEnabledInput">push_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.secretArgumentsInput">secret_arguments_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.arguments">arguments</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.cacheEnabled">cache_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.contextAccessToken">context_access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.contextPath">context_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.dockerfilePath">dockerfile_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.imageNames">image_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.pushEnabled">push_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.secretArguments">secret_arguments</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep">ContainerRegistryTaskDockerStep</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arguments_input`<sup>Optional</sup> <a name="arguments_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.argumentsInput"></a>

```python
arguments_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `cache_enabled_input`<sup>Optional</sup> <a name="cache_enabled_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.cacheEnabledInput"></a>

```python
cache_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `context_access_token_input`<sup>Optional</sup> <a name="context_access_token_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.contextAccessTokenInput"></a>

```python
context_access_token_input: str
```

- *Type:* str

---

##### `context_path_input`<sup>Optional</sup> <a name="context_path_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.contextPathInput"></a>

```python
context_path_input: str
```

- *Type:* str

---

##### `dockerfile_path_input`<sup>Optional</sup> <a name="dockerfile_path_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.dockerfilePathInput"></a>

```python
dockerfile_path_input: str
```

- *Type:* str

---

##### `image_names_input`<sup>Optional</sup> <a name="image_names_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.imageNamesInput"></a>

```python
image_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `push_enabled_input`<sup>Optional</sup> <a name="push_enabled_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.pushEnabledInput"></a>

```python
push_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret_arguments_input`<sup>Optional</sup> <a name="secret_arguments_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.secretArgumentsInput"></a>

```python
secret_arguments_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.arguments"></a>

```python
arguments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `cache_enabled`<sup>Required</sup> <a name="cache_enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.cacheEnabled"></a>

```python
cache_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `context_access_token`<sup>Required</sup> <a name="context_access_token" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.contextAccessToken"></a>

```python
context_access_token: str
```

- *Type:* str

---

##### `context_path`<sup>Required</sup> <a name="context_path" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.contextPath"></a>

```python
context_path: str
```

- *Type:* str

---

##### `dockerfile_path`<sup>Required</sup> <a name="dockerfile_path" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.dockerfilePath"></a>

```python
dockerfile_path: str
```

- *Type:* str

---

##### `image_names`<sup>Required</sup> <a name="image_names" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.imageNames"></a>

```python
image_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `push_enabled`<sup>Required</sup> <a name="push_enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.pushEnabled"></a>

```python
push_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret_arguments`<sup>Required</sup> <a name="secret_arguments" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.secretArguments"></a>

```python
secret_arguments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.internalValue"></a>

```python
internal_value: ContainerRegistryTaskDockerStep
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep">ContainerRegistryTaskDockerStep</a>

---


### ContainerRegistryTaskEncodedStepOutputReference <a name="ContainerRegistryTaskEncodedStepOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resetContextAccessToken">reset_context_access_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resetContextPath">reset_context_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resetSecretValues">reset_secret_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resetValueContent">reset_value_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_context_access_token` <a name="reset_context_access_token" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resetContextAccessToken"></a>

```python
def reset_context_access_token() -> None
```

##### `reset_context_path` <a name="reset_context_path" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resetContextPath"></a>

```python
def reset_context_path() -> None
```

##### `reset_secret_values` <a name="reset_secret_values" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resetSecretValues"></a>

```python
def reset_secret_values() -> None
```

##### `reset_value_content` <a name="reset_value_content" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resetValueContent"></a>

```python
def reset_value_content() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.contextAccessTokenInput">context_access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.contextPathInput">context_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.secretValuesInput">secret_values_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.taskContentInput">task_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.valueContentInput">value_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.valuesInput">values_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.contextAccessToken">context_access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.contextPath">context_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.secretValues">secret_values</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.taskContent">task_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.valueContent">value_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.values">values</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep">ContainerRegistryTaskEncodedStep</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `context_access_token_input`<sup>Optional</sup> <a name="context_access_token_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.contextAccessTokenInput"></a>

```python
context_access_token_input: str
```

- *Type:* str

---

##### `context_path_input`<sup>Optional</sup> <a name="context_path_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.contextPathInput"></a>

```python
context_path_input: str
```

- *Type:* str

---

##### `secret_values_input`<sup>Optional</sup> <a name="secret_values_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.secretValuesInput"></a>

```python
secret_values_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `task_content_input`<sup>Optional</sup> <a name="task_content_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.taskContentInput"></a>

```python
task_content_input: str
```

- *Type:* str

---

##### `value_content_input`<sup>Optional</sup> <a name="value_content_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.valueContentInput"></a>

```python
value_content_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.valuesInput"></a>

```python
values_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `context_access_token`<sup>Required</sup> <a name="context_access_token" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.contextAccessToken"></a>

```python
context_access_token: str
```

- *Type:* str

---

##### `context_path`<sup>Required</sup> <a name="context_path" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.contextPath"></a>

```python
context_path: str
```

- *Type:* str

---

##### `secret_values`<sup>Required</sup> <a name="secret_values" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.secretValues"></a>

```python
secret_values: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `task_content`<sup>Required</sup> <a name="task_content" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.taskContent"></a>

```python
task_content: str
```

- *Type:* str

---

##### `value_content`<sup>Required</sup> <a name="value_content" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.valueContent"></a>

```python
value_content: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.values"></a>

```python
values: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.internalValue"></a>

```python
internal_value: ContainerRegistryTaskEncodedStep
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep">ContainerRegistryTaskEncodedStep</a>

---


### ContainerRegistryTaskFileStepOutputReference <a name="ContainerRegistryTaskFileStepOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskFileStepOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resetContextAccessToken">reset_context_access_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resetContextPath">reset_context_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resetSecretValues">reset_secret_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resetValueFilePath">reset_value_file_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_context_access_token` <a name="reset_context_access_token" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resetContextAccessToken"></a>

```python
def reset_context_access_token() -> None
```

##### `reset_context_path` <a name="reset_context_path" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resetContextPath"></a>

```python
def reset_context_path() -> None
```

##### `reset_secret_values` <a name="reset_secret_values" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resetSecretValues"></a>

```python
def reset_secret_values() -> None
```

##### `reset_value_file_path` <a name="reset_value_file_path" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resetValueFilePath"></a>

```python
def reset_value_file_path() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.contextAccessTokenInput">context_access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.contextPathInput">context_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.secretValuesInput">secret_values_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.taskFilePathInput">task_file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.valueFilePathInput">value_file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.valuesInput">values_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.contextAccessToken">context_access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.contextPath">context_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.secretValues">secret_values</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.taskFilePath">task_file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.valueFilePath">value_file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.values">values</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep">ContainerRegistryTaskFileStep</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `context_access_token_input`<sup>Optional</sup> <a name="context_access_token_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.contextAccessTokenInput"></a>

```python
context_access_token_input: str
```

- *Type:* str

---

##### `context_path_input`<sup>Optional</sup> <a name="context_path_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.contextPathInput"></a>

```python
context_path_input: str
```

- *Type:* str

---

##### `secret_values_input`<sup>Optional</sup> <a name="secret_values_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.secretValuesInput"></a>

```python
secret_values_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `task_file_path_input`<sup>Optional</sup> <a name="task_file_path_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.taskFilePathInput"></a>

```python
task_file_path_input: str
```

- *Type:* str

---

##### `value_file_path_input`<sup>Optional</sup> <a name="value_file_path_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.valueFilePathInput"></a>

```python
value_file_path_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.valuesInput"></a>

```python
values_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `context_access_token`<sup>Required</sup> <a name="context_access_token" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.contextAccessToken"></a>

```python
context_access_token: str
```

- *Type:* str

---

##### `context_path`<sup>Required</sup> <a name="context_path" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.contextPath"></a>

```python
context_path: str
```

- *Type:* str

---

##### `secret_values`<sup>Required</sup> <a name="secret_values" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.secretValues"></a>

```python
secret_values: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `task_file_path`<sup>Required</sup> <a name="task_file_path" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.taskFilePath"></a>

```python
task_file_path: str
```

- *Type:* str

---

##### `value_file_path`<sup>Required</sup> <a name="value_file_path" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.valueFilePath"></a>

```python
value_file_path: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.values"></a>

```python
values: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.internalValue"></a>

```python
internal_value: ContainerRegistryTaskFileStep
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep">ContainerRegistryTaskFileStep</a>

---


### ContainerRegistryTaskIdentityOutputReference <a name="ContainerRegistryTaskIdentityOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity">ContainerRegistryTaskIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.internalValue"></a>

```python
internal_value: ContainerRegistryTaskIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity">ContainerRegistryTaskIdentity</a>

---


### ContainerRegistryTaskPlatformOutputReference <a name="ContainerRegistryTaskPlatformOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskPlatformOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.resetArchitecture">reset_architecture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.resetVariant">reset_variant</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_architecture` <a name="reset_architecture" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.resetArchitecture"></a>

```python
def reset_architecture() -> None
```

##### `reset_variant` <a name="reset_variant" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.resetVariant"></a>

```python
def reset_variant() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.architectureInput">architecture_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.osInput">os_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.variantInput">variant_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.os">os</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.variant">variant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform">ContainerRegistryTaskPlatform</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architecture_input`<sup>Optional</sup> <a name="architecture_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.architectureInput"></a>

```python
architecture_input: str
```

- *Type:* str

---

##### `os_input`<sup>Optional</sup> <a name="os_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.osInput"></a>

```python
os_input: str
```

- *Type:* str

---

##### `variant_input`<sup>Optional</sup> <a name="variant_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.variantInput"></a>

```python
variant_input: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.os"></a>

```python
os: str
```

- *Type:* str

---

##### `variant`<sup>Required</sup> <a name="variant" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.variant"></a>

```python
variant: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.internalValue"></a>

```python
internal_value: ContainerRegistryTaskPlatform
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform">ContainerRegistryTaskPlatform</a>

---


### ContainerRegistryTaskRegistryCredentialCustomList <a name="ContainerRegistryTaskRegistryCredentialCustomList" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerRegistryTaskRegistryCredentialCustomOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom">ContainerRegistryTaskRegistryCredentialCustom</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerRegistryTaskRegistryCredentialCustom]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom">ContainerRegistryTaskRegistryCredentialCustom</a>]]

---


### ContainerRegistryTaskRegistryCredentialCustomOutputReference <a name="ContainerRegistryTaskRegistryCredentialCustomOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.identityInput">identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.loginServerInput">login_server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.identity">identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.loginServer">login_server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom">ContainerRegistryTaskRegistryCredentialCustom</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.identityInput"></a>

```python
identity_input: str
```

- *Type:* str

---

##### `login_server_input`<sup>Optional</sup> <a name="login_server_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.loginServerInput"></a>

```python
login_server_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.identity"></a>

```python
identity: str
```

- *Type:* str

---

##### `login_server`<sup>Required</sup> <a name="login_server" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.loginServer"></a>

```python
login_server: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerRegistryTaskRegistryCredentialCustom]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom">ContainerRegistryTaskRegistryCredentialCustom</a>]

---


### ContainerRegistryTaskRegistryCredentialOutputReference <a name="ContainerRegistryTaskRegistryCredentialOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.putCustom">put_custom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.resetCustom">reset_custom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.resetSource">reset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom` <a name="put_custom" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.putCustom"></a>

```python
def put_custom(
  value: typing.Union[IResolvable, typing.List[ContainerRegistryTaskRegistryCredentialCustom]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.putCustom.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom">ContainerRegistryTaskRegistryCredentialCustom</a>]]

---

##### `put_source` <a name="put_source" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.putSource"></a>

```python
def put_source(
  login_mode: str
) -> None
```

###### `login_mode`<sup>Required</sup> <a name="login_mode" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.putSource.parameter.loginMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#login_mode ContainerRegistryTask#login_mode}.

---

##### `reset_custom` <a name="reset_custom" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.resetCustom"></a>

```python
def reset_custom() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.resetSource"></a>

```python
def reset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.custom">custom</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList">ContainerRegistryTaskRegistryCredentialCustomList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference">ContainerRegistryTaskRegistryCredentialSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.customInput">custom_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom">ContainerRegistryTaskRegistryCredentialCustom</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.sourceInput">source_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSource">ContainerRegistryTaskRegistryCredentialSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential">ContainerRegistryTaskRegistryCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.custom"></a>

```python
custom: ContainerRegistryTaskRegistryCredentialCustomList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList">ContainerRegistryTaskRegistryCredentialCustomList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.source"></a>

```python
source: ContainerRegistryTaskRegistryCredentialSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference">ContainerRegistryTaskRegistryCredentialSourceOutputReference</a>

---

##### `custom_input`<sup>Optional</sup> <a name="custom_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.customInput"></a>

```python
custom_input: typing.Union[IResolvable, typing.List[ContainerRegistryTaskRegistryCredentialCustom]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom">ContainerRegistryTaskRegistryCredentialCustom</a>]]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.sourceInput"></a>

```python
source_input: ContainerRegistryTaskRegistryCredentialSource
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSource">ContainerRegistryTaskRegistryCredentialSource</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.internalValue"></a>

```python
internal_value: ContainerRegistryTaskRegistryCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential">ContainerRegistryTaskRegistryCredential</a>

---


### ContainerRegistryTaskRegistryCredentialSourceOutputReference <a name="ContainerRegistryTaskRegistryCredentialSourceOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.property.loginModeInput">login_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.property.loginMode">login_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSource">ContainerRegistryTaskRegistryCredentialSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `login_mode_input`<sup>Optional</sup> <a name="login_mode_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.property.loginModeInput"></a>

```python
login_mode_input: str
```

- *Type:* str

---

##### `login_mode`<sup>Required</sup> <a name="login_mode" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.property.loginMode"></a>

```python
login_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.property.internalValue"></a>

```python
internal_value: ContainerRegistryTaskRegistryCredentialSource
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSource">ContainerRegistryTaskRegistryCredentialSource</a>

---


### ContainerRegistryTaskSourceTriggerAuthenticationOutputReference <a name="ContainerRegistryTaskSourceTriggerAuthenticationOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.resetExpireInSeconds">reset_expire_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.resetRefreshToken">reset_refresh_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.resetScope">reset_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expire_in_seconds` <a name="reset_expire_in_seconds" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.resetExpireInSeconds"></a>

```python
def reset_expire_in_seconds() -> None
```

##### `reset_refresh_token` <a name="reset_refresh_token" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.resetRefreshToken"></a>

```python
def reset_refresh_token() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.expireInSecondsInput">expire_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.refreshTokenInput">refresh_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.tokenTypeInput">token_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.expireInSeconds">expire_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.refreshToken">refresh_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication">ContainerRegistryTaskSourceTriggerAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expire_in_seconds_input`<sup>Optional</sup> <a name="expire_in_seconds_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.expireInSecondsInput"></a>

```python
expire_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `refresh_token_input`<sup>Optional</sup> <a name="refresh_token_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.refreshTokenInput"></a>

```python
refresh_token_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `token_type_input`<sup>Optional</sup> <a name="token_type_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.tokenTypeInput"></a>

```python
token_type_input: str
```

- *Type:* str

---

##### `expire_in_seconds`<sup>Required</sup> <a name="expire_in_seconds" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.expireInSeconds"></a>

```python
expire_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `refresh_token`<sup>Required</sup> <a name="refresh_token" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.refreshToken"></a>

```python
refresh_token: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: ContainerRegistryTaskSourceTriggerAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication">ContainerRegistryTaskSourceTriggerAuthentication</a>

---


### ContainerRegistryTaskSourceTriggerList <a name="ContainerRegistryTaskSourceTriggerList" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskSourceTriggerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerRegistryTaskSourceTriggerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger">ContainerRegistryTaskSourceTrigger</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerRegistryTaskSourceTrigger]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger">ContainerRegistryTaskSourceTrigger</a>]]

---


### ContainerRegistryTaskSourceTriggerOutputReference <a name="ContainerRegistryTaskSourceTriggerOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.putAuthentication">put_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.resetAuthentication">reset_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.resetBranch">reset_branch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authentication` <a name="put_authentication" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.putAuthentication"></a>

```python
def put_authentication(
  token: str,
  token_type: str,
  expire_in_seconds: typing.Union[int, float] = None,
  refresh_token: str = None,
  scope: str = None
) -> None
```

###### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.putAuthentication.parameter.token"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#token ContainerRegistryTask#token}.

---

###### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.putAuthentication.parameter.tokenType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#token_type ContainerRegistryTask#token_type}.

---

###### `expire_in_seconds`<sup>Optional</sup> <a name="expire_in_seconds" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.putAuthentication.parameter.expireInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#expire_in_seconds ContainerRegistryTask#expire_in_seconds}.

---

###### `refresh_token`<sup>Optional</sup> <a name="refresh_token" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.putAuthentication.parameter.refreshToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#refresh_token ContainerRegistryTask#refresh_token}.

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.putAuthentication.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task#scope ContainerRegistryTask#scope}.

---

##### `reset_authentication` <a name="reset_authentication" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.resetAuthentication"></a>

```python
def reset_authentication() -> None
```

##### `reset_branch` <a name="reset_branch" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.resetBranch"></a>

```python
def reset_branch() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference">ContainerRegistryTaskSourceTriggerAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.authenticationInput">authentication_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication">ContainerRegistryTaskSourceTriggerAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.eventsInput">events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.repositoryUrlInput">repository_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.sourceTypeInput">source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.repositoryUrl">repository_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger">ContainerRegistryTaskSourceTrigger</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.authentication"></a>

```python
authentication: ContainerRegistryTaskSourceTriggerAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference">ContainerRegistryTaskSourceTriggerAuthenticationOutputReference</a>

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.authenticationInput"></a>

```python
authentication_input: ContainerRegistryTaskSourceTriggerAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication">ContainerRegistryTaskSourceTriggerAuthentication</a>

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `events_input`<sup>Optional</sup> <a name="events_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.eventsInput"></a>

```python
events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `repository_url_input`<sup>Optional</sup> <a name="repository_url_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.repositoryUrlInput"></a>

```python
repository_url_input: str
```

- *Type:* str

---

##### `source_type_input`<sup>Optional</sup> <a name="source_type_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.sourceTypeInput"></a>

```python
source_type_input: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `repository_url`<sup>Required</sup> <a name="repository_url" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.repositoryUrl"></a>

```python
repository_url: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerRegistryTaskSourceTrigger]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger">ContainerRegistryTaskSourceTrigger</a>]

---


### ContainerRegistryTaskTimeoutsOutputReference <a name="ContainerRegistryTaskTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts">ContainerRegistryTaskTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerRegistryTaskTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts">ContainerRegistryTaskTimeouts</a>]

---


### ContainerRegistryTaskTimerTriggerList <a name="ContainerRegistryTaskTimerTriggerList" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskTimerTriggerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerRegistryTaskTimerTriggerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger">ContainerRegistryTaskTimerTrigger</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerRegistryTaskTimerTrigger]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger">ContainerRegistryTaskTimerTrigger</a>]]

---


### ContainerRegistryTaskTimerTriggerOutputReference <a name="ContainerRegistryTaskTimerTriggerOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_task

containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.scheduleInput">schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger">ContainerRegistryTaskTimerTrigger</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.scheduleInput"></a>

```python
schedule_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerRegistryTaskTimerTrigger]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger">ContainerRegistryTaskTimerTrigger</a>]

---



