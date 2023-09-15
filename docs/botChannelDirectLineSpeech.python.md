# `azurerm_bot_channel_direct_line_speech`

Refer to the Terraform Registory for docs: [`azurerm_bot_channel_direct_line_speech`](https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech).

# `botChannelDirectLineSpeech` Submodule <a name="`botChannelDirectLineSpeech` Submodule" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotChannelDirectLineSpeech <a name="BotChannelDirectLineSpeech" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech azurerm_bot_channel_direct_line_speech}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_direct_line_speech

botChannelDirectLineSpeech.BotChannelDirectLineSpeech(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bot_name: str,
  cognitive_service_access_key: str,
  cognitive_service_location: str,
  location: str,
  resource_group_name: str,
  cognitive_account_id: str = None,
  custom_speech_model_id: str = None,
  custom_voice_deployment_id: str = None,
  id: str = None,
  timeouts: BotChannelDirectLineSpeechTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.botName">bot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#bot_name BotChannelDirectLineSpeech#bot_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.cognitiveServiceAccessKey">cognitive_service_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_access_key BotChannelDirectLineSpeech#cognitive_service_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.cognitiveServiceLocation">cognitive_service_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_location BotChannelDirectLineSpeech#cognitive_service_location}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#location BotChannelDirectLineSpeech#location}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#resource_group_name BotChannelDirectLineSpeech#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.cognitiveAccountId">cognitive_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#cognitive_account_id BotChannelDirectLineSpeech#cognitive_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.customSpeechModelId">custom_speech_model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#custom_speech_model_id BotChannelDirectLineSpeech#custom_speech_model_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.customVoiceDeploymentId">custom_voice_deployment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#custom_voice_deployment_id BotChannelDirectLineSpeech#custom_voice_deployment_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#id BotChannelDirectLineSpeech#id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bot_name`<sup>Required</sup> <a name="bot_name" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.botName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#bot_name BotChannelDirectLineSpeech#bot_name}.

---

##### `cognitive_service_access_key`<sup>Required</sup> <a name="cognitive_service_access_key" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.cognitiveServiceAccessKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_access_key BotChannelDirectLineSpeech#cognitive_service_access_key}.

---

##### `cognitive_service_location`<sup>Required</sup> <a name="cognitive_service_location" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.cognitiveServiceLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_location BotChannelDirectLineSpeech#cognitive_service_location}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#location BotChannelDirectLineSpeech#location}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#resource_group_name BotChannelDirectLineSpeech#resource_group_name}.

---

##### `cognitive_account_id`<sup>Optional</sup> <a name="cognitive_account_id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.cognitiveAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#cognitive_account_id BotChannelDirectLineSpeech#cognitive_account_id}.

---

##### `custom_speech_model_id`<sup>Optional</sup> <a name="custom_speech_model_id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.customSpeechModelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#custom_speech_model_id BotChannelDirectLineSpeech#custom_speech_model_id}.

---

##### `custom_voice_deployment_id`<sup>Optional</sup> <a name="custom_voice_deployment_id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.customVoiceDeploymentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#custom_voice_deployment_id BotChannelDirectLineSpeech#custom_voice_deployment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#id BotChannelDirectLineSpeech#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#timeouts BotChannelDirectLineSpeech#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetCognitiveAccountId">reset_cognitive_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetCustomSpeechModelId">reset_custom_speech_model_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetCustomVoiceDeploymentId">reset_custom_voice_deployment_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#create BotChannelDirectLineSpeech#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#delete BotChannelDirectLineSpeech#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#read BotChannelDirectLineSpeech#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#update BotChannelDirectLineSpeech#update}.

---

##### `reset_cognitive_account_id` <a name="reset_cognitive_account_id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetCognitiveAccountId"></a>

```python
def reset_cognitive_account_id() -> None
```

##### `reset_custom_speech_model_id` <a name="reset_custom_speech_model_id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetCustomSpeechModelId"></a>

```python
def reset_custom_speech_model_id() -> None
```

##### `reset_custom_voice_deployment_id` <a name="reset_custom_voice_deployment_id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetCustomVoiceDeploymentId"></a>

```python
def reset_custom_voice_deployment_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_direct_line_speech

botChannelDirectLineSpeech.BotChannelDirectLineSpeech.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_direct_line_speech

botChannelDirectLineSpeech.BotChannelDirectLineSpeech.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_direct_line_speech

botChannelDirectLineSpeech.BotChannelDirectLineSpeech.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference">BotChannelDirectLineSpeechTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.botNameInput">bot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveAccountIdInput">cognitive_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceAccessKeyInput">cognitive_service_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceLocationInput">cognitive_service_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customSpeechModelIdInput">custom_speech_model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customVoiceDeploymentIdInput">custom_voice_deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.botName">bot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveAccountId">cognitive_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceAccessKey">cognitive_service_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceLocation">cognitive_service_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customSpeechModelId">custom_speech_model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customVoiceDeploymentId">custom_voice_deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.timeouts"></a>

```python
timeouts: BotChannelDirectLineSpeechTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference">BotChannelDirectLineSpeechTimeoutsOutputReference</a>

---

##### `bot_name_input`<sup>Optional</sup> <a name="bot_name_input" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.botNameInput"></a>

```python
bot_name_input: str
```

- *Type:* str

---

##### `cognitive_account_id_input`<sup>Optional</sup> <a name="cognitive_account_id_input" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveAccountIdInput"></a>

```python
cognitive_account_id_input: str
```

- *Type:* str

---

##### `cognitive_service_access_key_input`<sup>Optional</sup> <a name="cognitive_service_access_key_input" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceAccessKeyInput"></a>

```python
cognitive_service_access_key_input: str
```

- *Type:* str

---

##### `cognitive_service_location_input`<sup>Optional</sup> <a name="cognitive_service_location_input" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceLocationInput"></a>

```python
cognitive_service_location_input: str
```

- *Type:* str

---

##### `custom_speech_model_id_input`<sup>Optional</sup> <a name="custom_speech_model_id_input" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customSpeechModelIdInput"></a>

```python
custom_speech_model_id_input: str
```

- *Type:* str

---

##### `custom_voice_deployment_id_input`<sup>Optional</sup> <a name="custom_voice_deployment_id_input" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customVoiceDeploymentIdInput"></a>

```python
custom_voice_deployment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BotChannelDirectLineSpeechTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a>]

---

##### `bot_name`<sup>Required</sup> <a name="bot_name" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.botName"></a>

```python
bot_name: str
```

- *Type:* str

---

##### `cognitive_account_id`<sup>Required</sup> <a name="cognitive_account_id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveAccountId"></a>

```python
cognitive_account_id: str
```

- *Type:* str

---

##### `cognitive_service_access_key`<sup>Required</sup> <a name="cognitive_service_access_key" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceAccessKey"></a>

```python
cognitive_service_access_key: str
```

- *Type:* str

---

##### `cognitive_service_location`<sup>Required</sup> <a name="cognitive_service_location" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceLocation"></a>

```python
cognitive_service_location: str
```

- *Type:* str

---

##### `custom_speech_model_id`<sup>Required</sup> <a name="custom_speech_model_id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customSpeechModelId"></a>

```python
custom_speech_model_id: str
```

- *Type:* str

---

##### `custom_voice_deployment_id`<sup>Required</sup> <a name="custom_voice_deployment_id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customVoiceDeploymentId"></a>

```python
custom_voice_deployment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BotChannelDirectLineSpeechConfig <a name="BotChannelDirectLineSpeechConfig" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_direct_line_speech

botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bot_name: str,
  cognitive_service_access_key: str,
  cognitive_service_location: str,
  location: str,
  resource_group_name: str,
  cognitive_account_id: str = None,
  custom_speech_model_id: str = None,
  custom_voice_deployment_id: str = None,
  id: str = None,
  timeouts: BotChannelDirectLineSpeechTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.botName">bot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#bot_name BotChannelDirectLineSpeech#bot_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.cognitiveServiceAccessKey">cognitive_service_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_access_key BotChannelDirectLineSpeech#cognitive_service_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.cognitiveServiceLocation">cognitive_service_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_location BotChannelDirectLineSpeech#cognitive_service_location}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#location BotChannelDirectLineSpeech#location}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#resource_group_name BotChannelDirectLineSpeech#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.cognitiveAccountId">cognitive_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#cognitive_account_id BotChannelDirectLineSpeech#cognitive_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.customSpeechModelId">custom_speech_model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#custom_speech_model_id BotChannelDirectLineSpeech#custom_speech_model_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.customVoiceDeploymentId">custom_voice_deployment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#custom_voice_deployment_id BotChannelDirectLineSpeech#custom_voice_deployment_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#id BotChannelDirectLineSpeech#id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bot_name`<sup>Required</sup> <a name="bot_name" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.botName"></a>

```python
bot_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#bot_name BotChannelDirectLineSpeech#bot_name}.

---

##### `cognitive_service_access_key`<sup>Required</sup> <a name="cognitive_service_access_key" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.cognitiveServiceAccessKey"></a>

```python
cognitive_service_access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_access_key BotChannelDirectLineSpeech#cognitive_service_access_key}.

---

##### `cognitive_service_location`<sup>Required</sup> <a name="cognitive_service_location" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.cognitiveServiceLocation"></a>

```python
cognitive_service_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_location BotChannelDirectLineSpeech#cognitive_service_location}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#location BotChannelDirectLineSpeech#location}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#resource_group_name BotChannelDirectLineSpeech#resource_group_name}.

---

##### `cognitive_account_id`<sup>Optional</sup> <a name="cognitive_account_id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.cognitiveAccountId"></a>

```python
cognitive_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#cognitive_account_id BotChannelDirectLineSpeech#cognitive_account_id}.

---

##### `custom_speech_model_id`<sup>Optional</sup> <a name="custom_speech_model_id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.customSpeechModelId"></a>

```python
custom_speech_model_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#custom_speech_model_id BotChannelDirectLineSpeech#custom_speech_model_id}.

---

##### `custom_voice_deployment_id`<sup>Optional</sup> <a name="custom_voice_deployment_id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.customVoiceDeploymentId"></a>

```python
custom_voice_deployment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#custom_voice_deployment_id BotChannelDirectLineSpeech#custom_voice_deployment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#id BotChannelDirectLineSpeech#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.timeouts"></a>

```python
timeouts: BotChannelDirectLineSpeechTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#timeouts BotChannelDirectLineSpeech#timeouts}

---

### BotChannelDirectLineSpeechTimeouts <a name="BotChannelDirectLineSpeechTimeouts" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_direct_line_speech

botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#create BotChannelDirectLineSpeech#create}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#delete BotChannelDirectLineSpeech#delete}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#read BotChannelDirectLineSpeech#read}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#update BotChannelDirectLineSpeech#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#create BotChannelDirectLineSpeech#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#delete BotChannelDirectLineSpeech#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#read BotChannelDirectLineSpeech#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/bot_channel_direct_line_speech#update BotChannelDirectLineSpeech#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BotChannelDirectLineSpeechTimeoutsOutputReference <a name="BotChannelDirectLineSpeechTimeoutsOutputReference" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_direct_line_speech

botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BotChannelDirectLineSpeechTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a>]

---



