# `azurerm_media_live_event`

Refer to the Terraform Registory for docs: [`azurerm_media_live_event`](https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event).

# `mediaLiveEvent` Submodule <a name="`mediaLiveEvent` Submodule" id="@cdktf/provider-azurerm.mediaLiveEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaLiveEvent <a name="MediaLiveEvent" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event azurerm_media_live_event}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEvent(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  input: MediaLiveEventInput,
  location: str,
  media_services_account_name: str,
  name: str,
  resource_group_name: str,
  auto_start_enabled: typing.Union[bool, IResolvable] = None,
  cross_site_access_policy: MediaLiveEventCrossSiteAccessPolicy = None,
  description: str = None,
  encoding: MediaLiveEventEncoding = None,
  hostname_prefix: str = None,
  id: str = None,
  preview: MediaLiveEventPreview = None,
  stream_options: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  timeouts: MediaLiveEventTimeouts = None,
  transcription_languages: typing.List[str] = None,
  use_static_hostname: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.input">input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput">MediaLiveEventInput</a></code> | input block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#location MediaLiveEvent#location}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.mediaServicesAccountName">media_services_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#media_services_account_name MediaLiveEvent#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#name MediaLiveEvent#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#resource_group_name MediaLiveEvent#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.autoStartEnabled">auto_start_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#auto_start_enabled MediaLiveEvent#auto_start_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.crossSiteAccessPolicy">cross_site_access_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy">MediaLiveEventCrossSiteAccessPolicy</a></code> | cross_site_access_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#description MediaLiveEvent#description}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.encoding">encoding</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding">MediaLiveEventEncoding</a></code> | encoding block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.hostnamePrefix">hostname_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#hostname_prefix MediaLiveEvent#hostname_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#id MediaLiveEvent#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.preview">preview</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview">MediaLiveEventPreview</a></code> | preview block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.streamOptions">stream_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#stream_options MediaLiveEvent#stream_options}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#tags MediaLiveEvent#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts">MediaLiveEventTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.transcriptionLanguages">transcription_languages</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#transcription_languages MediaLiveEvent#transcription_languages}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.useStaticHostname">use_static_hostname</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#use_static_hostname MediaLiveEvent#use_static_hostname}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.input"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput">MediaLiveEventInput</a>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#input MediaLiveEvent#input}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#location MediaLiveEvent#location}.

---

##### `media_services_account_name`<sup>Required</sup> <a name="media_services_account_name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.mediaServicesAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#media_services_account_name MediaLiveEvent#media_services_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#name MediaLiveEvent#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#resource_group_name MediaLiveEvent#resource_group_name}.

---

##### `auto_start_enabled`<sup>Optional</sup> <a name="auto_start_enabled" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.autoStartEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#auto_start_enabled MediaLiveEvent#auto_start_enabled}.

---

##### `cross_site_access_policy`<sup>Optional</sup> <a name="cross_site_access_policy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.crossSiteAccessPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy">MediaLiveEventCrossSiteAccessPolicy</a>

cross_site_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#cross_site_access_policy MediaLiveEvent#cross_site_access_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#description MediaLiveEvent#description}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.encoding"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding">MediaLiveEventEncoding</a>

encoding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#encoding MediaLiveEvent#encoding}

---

##### `hostname_prefix`<sup>Optional</sup> <a name="hostname_prefix" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.hostnamePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#hostname_prefix MediaLiveEvent#hostname_prefix}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#id MediaLiveEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.preview"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview">MediaLiveEventPreview</a>

preview block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#preview MediaLiveEvent#preview}

---

##### `stream_options`<sup>Optional</sup> <a name="stream_options" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.streamOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#stream_options MediaLiveEvent#stream_options}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#tags MediaLiveEvent#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts">MediaLiveEventTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#timeouts MediaLiveEvent#timeouts}

---

##### `transcription_languages`<sup>Optional</sup> <a name="transcription_languages" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.transcriptionLanguages"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#transcription_languages MediaLiveEvent#transcription_languages}.

---

##### `use_static_hostname`<sup>Optional</sup> <a name="use_static_hostname" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.useStaticHostname"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#use_static_hostname MediaLiveEvent#use_static_hostname}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putCrossSiteAccessPolicy">put_cross_site_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putEncoding">put_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putInput">put_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putPreview">put_preview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetAutoStartEnabled">reset_auto_start_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetCrossSiteAccessPolicy">reset_cross_site_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetHostnamePrefix">reset_hostname_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetPreview">reset_preview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetStreamOptions">reset_stream_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetTranscriptionLanguages">reset_transcription_languages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetUseStaticHostname">reset_use_static_hostname</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_cross_site_access_policy` <a name="put_cross_site_access_policy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putCrossSiteAccessPolicy"></a>

```python
def put_cross_site_access_policy(
  client_access_policy: str = None,
  cross_domain_policy: str = None
) -> None
```

###### `client_access_policy`<sup>Optional</sup> <a name="client_access_policy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putCrossSiteAccessPolicy.parameter.clientAccessPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#client_access_policy MediaLiveEvent#client_access_policy}.

---

###### `cross_domain_policy`<sup>Optional</sup> <a name="cross_domain_policy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putCrossSiteAccessPolicy.parameter.crossDomainPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#cross_domain_policy MediaLiveEvent#cross_domain_policy}.

---

##### `put_encoding` <a name="put_encoding" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putEncoding"></a>

```python
def put_encoding(
  key_frame_interval: str = None,
  preset_name: str = None,
  stretch_mode: str = None,
  type: str = None
) -> None
```

###### `key_frame_interval`<sup>Optional</sup> <a name="key_frame_interval" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putEncoding.parameter.keyFrameInterval"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#key_frame_interval MediaLiveEvent#key_frame_interval}.

---

###### `preset_name`<sup>Optional</sup> <a name="preset_name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putEncoding.parameter.presetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#preset_name MediaLiveEvent#preset_name}.

---

###### `stretch_mode`<sup>Optional</sup> <a name="stretch_mode" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putEncoding.parameter.stretchMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#stretch_mode MediaLiveEvent#stretch_mode}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putEncoding.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#type MediaLiveEvent#type}.

---

##### `put_input` <a name="put_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putInput"></a>

```python
def put_input(
  access_token: str = None,
  ip_access_control_allow: typing.Union[IResolvable, typing.List[MediaLiveEventInputIpAccessControlAllow]] = None,
  key_frame_interval_duration: str = None,
  streaming_protocol: str = None
) -> None
```

###### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putInput.parameter.accessToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#access_token MediaLiveEvent#access_token}.

---

###### `ip_access_control_allow`<sup>Optional</sup> <a name="ip_access_control_allow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putInput.parameter.ipAccessControlAllow"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow">MediaLiveEventInputIpAccessControlAllow</a>]]

ip_access_control_allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#ip_access_control_allow MediaLiveEvent#ip_access_control_allow}

---

###### `key_frame_interval_duration`<sup>Optional</sup> <a name="key_frame_interval_duration" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putInput.parameter.keyFrameIntervalDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#key_frame_interval_duration MediaLiveEvent#key_frame_interval_duration}.

---

###### `streaming_protocol`<sup>Optional</sup> <a name="streaming_protocol" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putInput.parameter.streamingProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#streaming_protocol MediaLiveEvent#streaming_protocol}.

---

##### `put_preview` <a name="put_preview" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putPreview"></a>

```python
def put_preview(
  alternative_media_id: str = None,
  ip_access_control_allow: typing.Union[IResolvable, typing.List[MediaLiveEventPreviewIpAccessControlAllow]] = None,
  preview_locator: str = None,
  streaming_policy_name: str = None
) -> None
```

###### `alternative_media_id`<sup>Optional</sup> <a name="alternative_media_id" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putPreview.parameter.alternativeMediaId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#alternative_media_id MediaLiveEvent#alternative_media_id}.

---

###### `ip_access_control_allow`<sup>Optional</sup> <a name="ip_access_control_allow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putPreview.parameter.ipAccessControlAllow"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow">MediaLiveEventPreviewIpAccessControlAllow</a>]]

ip_access_control_allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#ip_access_control_allow MediaLiveEvent#ip_access_control_allow}

---

###### `preview_locator`<sup>Optional</sup> <a name="preview_locator" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putPreview.parameter.previewLocator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#preview_locator MediaLiveEvent#preview_locator}.

---

###### `streaming_policy_name`<sup>Optional</sup> <a name="streaming_policy_name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putPreview.parameter.streamingPolicyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#streaming_policy_name MediaLiveEvent#streaming_policy_name}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#create MediaLiveEvent#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#delete MediaLiveEvent#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#read MediaLiveEvent#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#update MediaLiveEvent#update}.

---

##### `reset_auto_start_enabled` <a name="reset_auto_start_enabled" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetAutoStartEnabled"></a>

```python
def reset_auto_start_enabled() -> None
```

##### `reset_cross_site_access_policy` <a name="reset_cross_site_access_policy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetCrossSiteAccessPolicy"></a>

```python
def reset_cross_site_access_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_hostname_prefix` <a name="reset_hostname_prefix" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetHostnamePrefix"></a>

```python
def reset_hostname_prefix() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_preview` <a name="reset_preview" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetPreview"></a>

```python
def reset_preview() -> None
```

##### `reset_stream_options` <a name="reset_stream_options" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetStreamOptions"></a>

```python
def reset_stream_options() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_transcription_languages` <a name="reset_transcription_languages" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetTranscriptionLanguages"></a>

```python
def reset_transcription_languages() -> None
```

##### `reset_use_static_hostname` <a name="reset_use_static_hostname" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetUseStaticHostname"></a>

```python
def reset_use_static_hostname() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEvent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEvent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEvent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.crossSiteAccessPolicy">cross_site_access_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference">MediaLiveEventCrossSiteAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.encoding">encoding</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference">MediaLiveEventEncodingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.input">input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference">MediaLiveEventInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.preview">preview</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference">MediaLiveEventPreviewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference">MediaLiveEventTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.autoStartEnabledInput">auto_start_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.crossSiteAccessPolicyInput">cross_site_access_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy">MediaLiveEventCrossSiteAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.encodingInput">encoding_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding">MediaLiveEventEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.hostnamePrefixInput">hostname_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.inputInput">input_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput">MediaLiveEventInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.mediaServicesAccountNameInput">media_services_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.previewInput">preview_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview">MediaLiveEventPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.streamOptionsInput">stream_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts">MediaLiveEventTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.transcriptionLanguagesInput">transcription_languages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.useStaticHostnameInput">use_static_hostname_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.autoStartEnabled">auto_start_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.hostnamePrefix">hostname_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.mediaServicesAccountName">media_services_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.streamOptions">stream_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.transcriptionLanguages">transcription_languages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.useStaticHostname">use_static_hostname</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cross_site_access_policy`<sup>Required</sup> <a name="cross_site_access_policy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.crossSiteAccessPolicy"></a>

```python
cross_site_access_policy: MediaLiveEventCrossSiteAccessPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference">MediaLiveEventCrossSiteAccessPolicyOutputReference</a>

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.encoding"></a>

```python
encoding: MediaLiveEventEncodingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference">MediaLiveEventEncodingOutputReference</a>

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.input"></a>

```python
input: MediaLiveEventInputOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference">MediaLiveEventInputOutputReference</a>

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.preview"></a>

```python
preview: MediaLiveEventPreviewOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference">MediaLiveEventPreviewOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.timeouts"></a>

```python
timeouts: MediaLiveEventTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference">MediaLiveEventTimeoutsOutputReference</a>

---

##### `auto_start_enabled_input`<sup>Optional</sup> <a name="auto_start_enabled_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.autoStartEnabledInput"></a>

```python
auto_start_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cross_site_access_policy_input`<sup>Optional</sup> <a name="cross_site_access_policy_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.crossSiteAccessPolicyInput"></a>

```python
cross_site_access_policy_input: MediaLiveEventCrossSiteAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy">MediaLiveEventCrossSiteAccessPolicy</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.encodingInput"></a>

```python
encoding_input: MediaLiveEventEncoding
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding">MediaLiveEventEncoding</a>

---

##### `hostname_prefix_input`<sup>Optional</sup> <a name="hostname_prefix_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.hostnamePrefixInput"></a>

```python
hostname_prefix_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.inputInput"></a>

```python
input_input: MediaLiveEventInput
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput">MediaLiveEventInput</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `media_services_account_name_input`<sup>Optional</sup> <a name="media_services_account_name_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.mediaServicesAccountNameInput"></a>

```python
media_services_account_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `preview_input`<sup>Optional</sup> <a name="preview_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.previewInput"></a>

```python
preview_input: MediaLiveEventPreview
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview">MediaLiveEventPreview</a>

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `stream_options_input`<sup>Optional</sup> <a name="stream_options_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.streamOptionsInput"></a>

```python
stream_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[MediaLiveEventTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts">MediaLiveEventTimeouts</a>, cdktf.IResolvable]

---

##### `transcription_languages_input`<sup>Optional</sup> <a name="transcription_languages_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.transcriptionLanguagesInput"></a>

```python
transcription_languages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use_static_hostname_input`<sup>Optional</sup> <a name="use_static_hostname_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.useStaticHostnameInput"></a>

```python
use_static_hostname_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_start_enabled`<sup>Required</sup> <a name="auto_start_enabled" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.autoStartEnabled"></a>

```python
auto_start_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `hostname_prefix`<sup>Required</sup> <a name="hostname_prefix" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.hostnamePrefix"></a>

```python
hostname_prefix: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `media_services_account_name`<sup>Required</sup> <a name="media_services_account_name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.mediaServicesAccountName"></a>

```python
media_services_account_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `stream_options`<sup>Required</sup> <a name="stream_options" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.streamOptions"></a>

```python
stream_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `transcription_languages`<sup>Required</sup> <a name="transcription_languages" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.transcriptionLanguages"></a>

```python
transcription_languages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use_static_hostname`<sup>Required</sup> <a name="use_static_hostname" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.useStaticHostname"></a>

```python
use_static_hostname: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediaLiveEventConfig <a name="MediaLiveEventConfig" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEventConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  input: MediaLiveEventInput,
  location: str,
  media_services_account_name: str,
  name: str,
  resource_group_name: str,
  auto_start_enabled: typing.Union[bool, IResolvable] = None,
  cross_site_access_policy: MediaLiveEventCrossSiteAccessPolicy = None,
  description: str = None,
  encoding: MediaLiveEventEncoding = None,
  hostname_prefix: str = None,
  id: str = None,
  preview: MediaLiveEventPreview = None,
  stream_options: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  timeouts: MediaLiveEventTimeouts = None,
  transcription_languages: typing.List[str] = None,
  use_static_hostname: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.input">input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput">MediaLiveEventInput</a></code> | input block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#location MediaLiveEvent#location}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.mediaServicesAccountName">media_services_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#media_services_account_name MediaLiveEvent#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#name MediaLiveEvent#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#resource_group_name MediaLiveEvent#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.autoStartEnabled">auto_start_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#auto_start_enabled MediaLiveEvent#auto_start_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.crossSiteAccessPolicy">cross_site_access_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy">MediaLiveEventCrossSiteAccessPolicy</a></code> | cross_site_access_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#description MediaLiveEvent#description}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.encoding">encoding</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding">MediaLiveEventEncoding</a></code> | encoding block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.hostnamePrefix">hostname_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#hostname_prefix MediaLiveEvent#hostname_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#id MediaLiveEvent#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.preview">preview</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview">MediaLiveEventPreview</a></code> | preview block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.streamOptions">stream_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#stream_options MediaLiveEvent#stream_options}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#tags MediaLiveEvent#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts">MediaLiveEventTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.transcriptionLanguages">transcription_languages</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#transcription_languages MediaLiveEvent#transcription_languages}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.useStaticHostname">use_static_hostname</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#use_static_hostname MediaLiveEvent#use_static_hostname}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.input"></a>

```python
input: MediaLiveEventInput
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput">MediaLiveEventInput</a>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#input MediaLiveEvent#input}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#location MediaLiveEvent#location}.

---

##### `media_services_account_name`<sup>Required</sup> <a name="media_services_account_name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.mediaServicesAccountName"></a>

```python
media_services_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#media_services_account_name MediaLiveEvent#media_services_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#name MediaLiveEvent#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#resource_group_name MediaLiveEvent#resource_group_name}.

---

##### `auto_start_enabled`<sup>Optional</sup> <a name="auto_start_enabled" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.autoStartEnabled"></a>

```python
auto_start_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#auto_start_enabled MediaLiveEvent#auto_start_enabled}.

---

##### `cross_site_access_policy`<sup>Optional</sup> <a name="cross_site_access_policy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.crossSiteAccessPolicy"></a>

```python
cross_site_access_policy: MediaLiveEventCrossSiteAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy">MediaLiveEventCrossSiteAccessPolicy</a>

cross_site_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#cross_site_access_policy MediaLiveEvent#cross_site_access_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#description MediaLiveEvent#description}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.encoding"></a>

```python
encoding: MediaLiveEventEncoding
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding">MediaLiveEventEncoding</a>

encoding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#encoding MediaLiveEvent#encoding}

---

##### `hostname_prefix`<sup>Optional</sup> <a name="hostname_prefix" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.hostnamePrefix"></a>

```python
hostname_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#hostname_prefix MediaLiveEvent#hostname_prefix}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#id MediaLiveEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.preview"></a>

```python
preview: MediaLiveEventPreview
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview">MediaLiveEventPreview</a>

preview block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#preview MediaLiveEvent#preview}

---

##### `stream_options`<sup>Optional</sup> <a name="stream_options" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.streamOptions"></a>

```python
stream_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#stream_options MediaLiveEvent#stream_options}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#tags MediaLiveEvent#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.timeouts"></a>

```python
timeouts: MediaLiveEventTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts">MediaLiveEventTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#timeouts MediaLiveEvent#timeouts}

---

##### `transcription_languages`<sup>Optional</sup> <a name="transcription_languages" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.transcriptionLanguages"></a>

```python
transcription_languages: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#transcription_languages MediaLiveEvent#transcription_languages}.

---

##### `use_static_hostname`<sup>Optional</sup> <a name="use_static_hostname" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.useStaticHostname"></a>

```python
use_static_hostname: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#use_static_hostname MediaLiveEvent#use_static_hostname}.

---

### MediaLiveEventCrossSiteAccessPolicy <a name="MediaLiveEventCrossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy(
  client_access_policy: str = None,
  cross_domain_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy.property.clientAccessPolicy">client_access_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#client_access_policy MediaLiveEvent#client_access_policy}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy.property.crossDomainPolicy">cross_domain_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#cross_domain_policy MediaLiveEvent#cross_domain_policy}. |

---

##### `client_access_policy`<sup>Optional</sup> <a name="client_access_policy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy.property.clientAccessPolicy"></a>

```python
client_access_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#client_access_policy MediaLiveEvent#client_access_policy}.

---

##### `cross_domain_policy`<sup>Optional</sup> <a name="cross_domain_policy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy.property.crossDomainPolicy"></a>

```python
cross_domain_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#cross_domain_policy MediaLiveEvent#cross_domain_policy}.

---

### MediaLiveEventEncoding <a name="MediaLiveEventEncoding" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEventEncoding(
  key_frame_interval: str = None,
  preset_name: str = None,
  stretch_mode: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.property.keyFrameInterval">key_frame_interval</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#key_frame_interval MediaLiveEvent#key_frame_interval}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.property.presetName">preset_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#preset_name MediaLiveEvent#preset_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.property.stretchMode">stretch_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#stretch_mode MediaLiveEvent#stretch_mode}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#type MediaLiveEvent#type}. |

---

##### `key_frame_interval`<sup>Optional</sup> <a name="key_frame_interval" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.property.keyFrameInterval"></a>

```python
key_frame_interval: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#key_frame_interval MediaLiveEvent#key_frame_interval}.

---

##### `preset_name`<sup>Optional</sup> <a name="preset_name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.property.presetName"></a>

```python
preset_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#preset_name MediaLiveEvent#preset_name}.

---

##### `stretch_mode`<sup>Optional</sup> <a name="stretch_mode" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.property.stretchMode"></a>

```python
stretch_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#stretch_mode MediaLiveEvent#stretch_mode}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#type MediaLiveEvent#type}.

---

### MediaLiveEventInput <a name="MediaLiveEventInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEventInput(
  access_token: str = None,
  ip_access_control_allow: typing.Union[IResolvable, typing.List[MediaLiveEventInputIpAccessControlAllow]] = None,
  key_frame_interval_duration: str = None,
  streaming_protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.property.accessToken">access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#access_token MediaLiveEvent#access_token}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.property.ipAccessControlAllow">ip_access_control_allow</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow">MediaLiveEventInputIpAccessControlAllow</a>]]</code> | ip_access_control_allow block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.property.keyFrameIntervalDuration">key_frame_interval_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#key_frame_interval_duration MediaLiveEvent#key_frame_interval_duration}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.property.streamingProtocol">streaming_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#streaming_protocol MediaLiveEvent#streaming_protocol}. |

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#access_token MediaLiveEvent#access_token}.

---

##### `ip_access_control_allow`<sup>Optional</sup> <a name="ip_access_control_allow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.property.ipAccessControlAllow"></a>

```python
ip_access_control_allow: typing.Union[IResolvable, typing.List[MediaLiveEventInputIpAccessControlAllow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow">MediaLiveEventInputIpAccessControlAllow</a>]]

ip_access_control_allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#ip_access_control_allow MediaLiveEvent#ip_access_control_allow}

---

##### `key_frame_interval_duration`<sup>Optional</sup> <a name="key_frame_interval_duration" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.property.keyFrameIntervalDuration"></a>

```python
key_frame_interval_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#key_frame_interval_duration MediaLiveEvent#key_frame_interval_duration}.

---

##### `streaming_protocol`<sup>Optional</sup> <a name="streaming_protocol" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.property.streamingProtocol"></a>

```python
streaming_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#streaming_protocol MediaLiveEvent#streaming_protocol}.

---

### MediaLiveEventInputEndpoint <a name="MediaLiveEventInputEndpoint" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEventInputEndpoint()
```


### MediaLiveEventInputIpAccessControlAllow <a name="MediaLiveEventInputIpAccessControlAllow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow(
  address: str = None,
  name: str = None,
  subnet_prefix_length: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow.property.address">address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#address MediaLiveEvent#address}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#name MediaLiveEvent#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow.property.subnetPrefixLength">subnet_prefix_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#subnet_prefix_length MediaLiveEvent#subnet_prefix_length}. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow.property.address"></a>

```python
address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#address MediaLiveEvent#address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#name MediaLiveEvent#name}.

---

##### `subnet_prefix_length`<sup>Optional</sup> <a name="subnet_prefix_length" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow.property.subnetPrefixLength"></a>

```python
subnet_prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#subnet_prefix_length MediaLiveEvent#subnet_prefix_length}.

---

### MediaLiveEventPreview <a name="MediaLiveEventPreview" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEventPreview(
  alternative_media_id: str = None,
  ip_access_control_allow: typing.Union[IResolvable, typing.List[MediaLiveEventPreviewIpAccessControlAllow]] = None,
  preview_locator: str = None,
  streaming_policy_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.property.alternativeMediaId">alternative_media_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#alternative_media_id MediaLiveEvent#alternative_media_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.property.ipAccessControlAllow">ip_access_control_allow</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow">MediaLiveEventPreviewIpAccessControlAllow</a>]]</code> | ip_access_control_allow block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.property.previewLocator">preview_locator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#preview_locator MediaLiveEvent#preview_locator}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.property.streamingPolicyName">streaming_policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#streaming_policy_name MediaLiveEvent#streaming_policy_name}. |

---

##### `alternative_media_id`<sup>Optional</sup> <a name="alternative_media_id" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.property.alternativeMediaId"></a>

```python
alternative_media_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#alternative_media_id MediaLiveEvent#alternative_media_id}.

---

##### `ip_access_control_allow`<sup>Optional</sup> <a name="ip_access_control_allow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.property.ipAccessControlAllow"></a>

```python
ip_access_control_allow: typing.Union[IResolvable, typing.List[MediaLiveEventPreviewIpAccessControlAllow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow">MediaLiveEventPreviewIpAccessControlAllow</a>]]

ip_access_control_allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#ip_access_control_allow MediaLiveEvent#ip_access_control_allow}

---

##### `preview_locator`<sup>Optional</sup> <a name="preview_locator" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.property.previewLocator"></a>

```python
preview_locator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#preview_locator MediaLiveEvent#preview_locator}.

---

##### `streaming_policy_name`<sup>Optional</sup> <a name="streaming_policy_name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.property.streamingPolicyName"></a>

```python
streaming_policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#streaming_policy_name MediaLiveEvent#streaming_policy_name}.

---

### MediaLiveEventPreviewEndpoint <a name="MediaLiveEventPreviewEndpoint" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEventPreviewEndpoint()
```


### MediaLiveEventPreviewIpAccessControlAllow <a name="MediaLiveEventPreviewIpAccessControlAllow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow(
  address: str = None,
  name: str = None,
  subnet_prefix_length: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow.property.address">address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#address MediaLiveEvent#address}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#name MediaLiveEvent#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow.property.subnetPrefixLength">subnet_prefix_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#subnet_prefix_length MediaLiveEvent#subnet_prefix_length}. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow.property.address"></a>

```python
address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#address MediaLiveEvent#address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#name MediaLiveEvent#name}.

---

##### `subnet_prefix_length`<sup>Optional</sup> <a name="subnet_prefix_length" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow.property.subnetPrefixLength"></a>

```python
subnet_prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#subnet_prefix_length MediaLiveEvent#subnet_prefix_length}.

---

### MediaLiveEventTimeouts <a name="MediaLiveEventTimeouts" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEventTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#create MediaLiveEvent#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#delete MediaLiveEvent#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#read MediaLiveEvent#read}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#update MediaLiveEvent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#create MediaLiveEvent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#delete MediaLiveEvent#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#read MediaLiveEvent#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/media_live_event#update MediaLiveEvent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaLiveEventCrossSiteAccessPolicyOutputReference <a name="MediaLiveEventCrossSiteAccessPolicyOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.resetClientAccessPolicy">reset_client_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.resetCrossDomainPolicy">reset_cross_domain_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_access_policy` <a name="reset_client_access_policy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.resetClientAccessPolicy"></a>

```python
def reset_client_access_policy() -> None
```

##### `reset_cross_domain_policy` <a name="reset_cross_domain_policy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.resetCrossDomainPolicy"></a>

```python
def reset_cross_domain_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.clientAccessPolicyInput">client_access_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.crossDomainPolicyInput">cross_domain_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.clientAccessPolicy">client_access_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.crossDomainPolicy">cross_domain_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy">MediaLiveEventCrossSiteAccessPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_access_policy_input`<sup>Optional</sup> <a name="client_access_policy_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.clientAccessPolicyInput"></a>

```python
client_access_policy_input: str
```

- *Type:* str

---

##### `cross_domain_policy_input`<sup>Optional</sup> <a name="cross_domain_policy_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.crossDomainPolicyInput"></a>

```python
cross_domain_policy_input: str
```

- *Type:* str

---

##### `client_access_policy`<sup>Required</sup> <a name="client_access_policy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.clientAccessPolicy"></a>

```python
client_access_policy: str
```

- *Type:* str

---

##### `cross_domain_policy`<sup>Required</sup> <a name="cross_domain_policy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.crossDomainPolicy"></a>

```python
cross_domain_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.internalValue"></a>

```python
internal_value: MediaLiveEventCrossSiteAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy">MediaLiveEventCrossSiteAccessPolicy</a>

---


### MediaLiveEventEncodingOutputReference <a name="MediaLiveEventEncodingOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEventEncodingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resetKeyFrameInterval">reset_key_frame_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resetPresetName">reset_preset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resetStretchMode">reset_stretch_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key_frame_interval` <a name="reset_key_frame_interval" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resetKeyFrameInterval"></a>

```python
def reset_key_frame_interval() -> None
```

##### `reset_preset_name` <a name="reset_preset_name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resetPresetName"></a>

```python
def reset_preset_name() -> None
```

##### `reset_stretch_mode` <a name="reset_stretch_mode" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resetStretchMode"></a>

```python
def reset_stretch_mode() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.keyFrameIntervalInput">key_frame_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.presetNameInput">preset_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.stretchModeInput">stretch_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.keyFrameInterval">key_frame_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.presetName">preset_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.stretchMode">stretch_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding">MediaLiveEventEncoding</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_frame_interval_input`<sup>Optional</sup> <a name="key_frame_interval_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.keyFrameIntervalInput"></a>

```python
key_frame_interval_input: str
```

- *Type:* str

---

##### `preset_name_input`<sup>Optional</sup> <a name="preset_name_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.presetNameInput"></a>

```python
preset_name_input: str
```

- *Type:* str

---

##### `stretch_mode_input`<sup>Optional</sup> <a name="stretch_mode_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.stretchModeInput"></a>

```python
stretch_mode_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `key_frame_interval`<sup>Required</sup> <a name="key_frame_interval" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.keyFrameInterval"></a>

```python
key_frame_interval: str
```

- *Type:* str

---

##### `preset_name`<sup>Required</sup> <a name="preset_name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.presetName"></a>

```python
preset_name: str
```

- *Type:* str

---

##### `stretch_mode`<sup>Required</sup> <a name="stretch_mode" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.stretchMode"></a>

```python
stretch_mode: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.internalValue"></a>

```python
internal_value: MediaLiveEventEncoding
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding">MediaLiveEventEncoding</a>

---


### MediaLiveEventInputEndpointList <a name="MediaLiveEventInputEndpointList" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEventInputEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaLiveEventInputEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MediaLiveEventInputEndpointOutputReference <a name="MediaLiveEventInputEndpointOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEventInputEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpoint">MediaLiveEventInputEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.internalValue"></a>

```python
internal_value: MediaLiveEventInputEndpoint
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpoint">MediaLiveEventInputEndpoint</a>

---


### MediaLiveEventInputIpAccessControlAllowList <a name="MediaLiveEventInputIpAccessControlAllowList" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaLiveEventInputIpAccessControlAllowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow">MediaLiveEventInputIpAccessControlAllow</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MediaLiveEventInputIpAccessControlAllow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow">MediaLiveEventInputIpAccessControlAllow</a>]]

---


### MediaLiveEventInputIpAccessControlAllowOutputReference <a name="MediaLiveEventInputIpAccessControlAllowOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.resetSubnetPrefixLength">reset_subnet_prefix_length</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address` <a name="reset_address" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_subnet_prefix_length` <a name="reset_subnet_prefix_length" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.resetSubnetPrefixLength"></a>

```python
def reset_subnet_prefix_length() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.subnetPrefixLengthInput">subnet_prefix_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.subnetPrefixLength">subnet_prefix_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow">MediaLiveEventInputIpAccessControlAllow</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `subnet_prefix_length_input`<sup>Optional</sup> <a name="subnet_prefix_length_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.subnetPrefixLengthInput"></a>

```python
subnet_prefix_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `subnet_prefix_length`<sup>Required</sup> <a name="subnet_prefix_length" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.subnetPrefixLength"></a>

```python
subnet_prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[MediaLiveEventInputIpAccessControlAllow, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow">MediaLiveEventInputIpAccessControlAllow</a>, cdktf.IResolvable]

---


### MediaLiveEventInputOutputReference <a name="MediaLiveEventInputOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEventInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.putIpAccessControlAllow">put_ip_access_control_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resetAccessToken">reset_access_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resetIpAccessControlAllow">reset_ip_access_control_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resetKeyFrameIntervalDuration">reset_key_frame_interval_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resetStreamingProtocol">reset_streaming_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ip_access_control_allow` <a name="put_ip_access_control_allow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.putIpAccessControlAllow"></a>

```python
def put_ip_access_control_allow(
  value: typing.Union[IResolvable, typing.List[MediaLiveEventInputIpAccessControlAllow]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.putIpAccessControlAllow.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow">MediaLiveEventInputIpAccessControlAllow</a>]]

---

##### `reset_access_token` <a name="reset_access_token" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resetAccessToken"></a>

```python
def reset_access_token() -> None
```

##### `reset_ip_access_control_allow` <a name="reset_ip_access_control_allow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resetIpAccessControlAllow"></a>

```python
def reset_ip_access_control_allow() -> None
```

##### `reset_key_frame_interval_duration` <a name="reset_key_frame_interval_duration" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resetKeyFrameIntervalDuration"></a>

```python
def reset_key_frame_interval_duration() -> None
```

##### `reset_streaming_protocol` <a name="reset_streaming_protocol" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resetStreamingProtocol"></a>

```python
def reset_streaming_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList">MediaLiveEventInputEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.ipAccessControlAllow">ip_access_control_allow</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList">MediaLiveEventInputIpAccessControlAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.accessTokenInput">access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.ipAccessControlAllowInput">ip_access_control_allow_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow">MediaLiveEventInputIpAccessControlAllow</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.keyFrameIntervalDurationInput">key_frame_interval_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.streamingProtocolInput">streaming_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.keyFrameIntervalDuration">key_frame_interval_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.streamingProtocol">streaming_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput">MediaLiveEventInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.endpoint"></a>

```python
endpoint: MediaLiveEventInputEndpointList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList">MediaLiveEventInputEndpointList</a>

---

##### `ip_access_control_allow`<sup>Required</sup> <a name="ip_access_control_allow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.ipAccessControlAllow"></a>

```python
ip_access_control_allow: MediaLiveEventInputIpAccessControlAllowList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList">MediaLiveEventInputIpAccessControlAllowList</a>

---

##### `access_token_input`<sup>Optional</sup> <a name="access_token_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.accessTokenInput"></a>

```python
access_token_input: str
```

- *Type:* str

---

##### `ip_access_control_allow_input`<sup>Optional</sup> <a name="ip_access_control_allow_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.ipAccessControlAllowInput"></a>

```python
ip_access_control_allow_input: typing.Union[IResolvable, typing.List[MediaLiveEventInputIpAccessControlAllow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow">MediaLiveEventInputIpAccessControlAllow</a>]]

---

##### `key_frame_interval_duration_input`<sup>Optional</sup> <a name="key_frame_interval_duration_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.keyFrameIntervalDurationInput"></a>

```python
key_frame_interval_duration_input: str
```

- *Type:* str

---

##### `streaming_protocol_input`<sup>Optional</sup> <a name="streaming_protocol_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.streamingProtocolInput"></a>

```python
streaming_protocol_input: str
```

- *Type:* str

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `key_frame_interval_duration`<sup>Required</sup> <a name="key_frame_interval_duration" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.keyFrameIntervalDuration"></a>

```python
key_frame_interval_duration: str
```

- *Type:* str

---

##### `streaming_protocol`<sup>Required</sup> <a name="streaming_protocol" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.streamingProtocol"></a>

```python
streaming_protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.internalValue"></a>

```python
internal_value: MediaLiveEventInput
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput">MediaLiveEventInput</a>

---


### MediaLiveEventPreviewEndpointList <a name="MediaLiveEventPreviewEndpointList" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEventPreviewEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaLiveEventPreviewEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MediaLiveEventPreviewEndpointOutputReference <a name="MediaLiveEventPreviewEndpointOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpoint">MediaLiveEventPreviewEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.internalValue"></a>

```python
internal_value: MediaLiveEventPreviewEndpoint
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpoint">MediaLiveEventPreviewEndpoint</a>

---


### MediaLiveEventPreviewIpAccessControlAllowList <a name="MediaLiveEventPreviewIpAccessControlAllowList" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaLiveEventPreviewIpAccessControlAllowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow">MediaLiveEventPreviewIpAccessControlAllow</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MediaLiveEventPreviewIpAccessControlAllow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow">MediaLiveEventPreviewIpAccessControlAllow</a>]]

---


### MediaLiveEventPreviewIpAccessControlAllowOutputReference <a name="MediaLiveEventPreviewIpAccessControlAllowOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.resetSubnetPrefixLength">reset_subnet_prefix_length</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address` <a name="reset_address" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_subnet_prefix_length` <a name="reset_subnet_prefix_length" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.resetSubnetPrefixLength"></a>

```python
def reset_subnet_prefix_length() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.subnetPrefixLengthInput">subnet_prefix_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.subnetPrefixLength">subnet_prefix_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow">MediaLiveEventPreviewIpAccessControlAllow</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `subnet_prefix_length_input`<sup>Optional</sup> <a name="subnet_prefix_length_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.subnetPrefixLengthInput"></a>

```python
subnet_prefix_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `subnet_prefix_length`<sup>Required</sup> <a name="subnet_prefix_length" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.subnetPrefixLength"></a>

```python
subnet_prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[MediaLiveEventPreviewIpAccessControlAllow, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow">MediaLiveEventPreviewIpAccessControlAllow</a>, cdktf.IResolvable]

---


### MediaLiveEventPreviewOutputReference <a name="MediaLiveEventPreviewOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEventPreviewOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.putIpAccessControlAllow">put_ip_access_control_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resetAlternativeMediaId">reset_alternative_media_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resetIpAccessControlAllow">reset_ip_access_control_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resetPreviewLocator">reset_preview_locator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resetStreamingPolicyName">reset_streaming_policy_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ip_access_control_allow` <a name="put_ip_access_control_allow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.putIpAccessControlAllow"></a>

```python
def put_ip_access_control_allow(
  value: typing.Union[IResolvable, typing.List[MediaLiveEventPreviewIpAccessControlAllow]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.putIpAccessControlAllow.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow">MediaLiveEventPreviewIpAccessControlAllow</a>]]

---

##### `reset_alternative_media_id` <a name="reset_alternative_media_id" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resetAlternativeMediaId"></a>

```python
def reset_alternative_media_id() -> None
```

##### `reset_ip_access_control_allow` <a name="reset_ip_access_control_allow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resetIpAccessControlAllow"></a>

```python
def reset_ip_access_control_allow() -> None
```

##### `reset_preview_locator` <a name="reset_preview_locator" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resetPreviewLocator"></a>

```python
def reset_preview_locator() -> None
```

##### `reset_streaming_policy_name` <a name="reset_streaming_policy_name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resetStreamingPolicyName"></a>

```python
def reset_streaming_policy_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList">MediaLiveEventPreviewEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.ipAccessControlAllow">ip_access_control_allow</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList">MediaLiveEventPreviewIpAccessControlAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.alternativeMediaIdInput">alternative_media_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.ipAccessControlAllowInput">ip_access_control_allow_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow">MediaLiveEventPreviewIpAccessControlAllow</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.previewLocatorInput">preview_locator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.streamingPolicyNameInput">streaming_policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.alternativeMediaId">alternative_media_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.previewLocator">preview_locator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.streamingPolicyName">streaming_policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview">MediaLiveEventPreview</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.endpoint"></a>

```python
endpoint: MediaLiveEventPreviewEndpointList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList">MediaLiveEventPreviewEndpointList</a>

---

##### `ip_access_control_allow`<sup>Required</sup> <a name="ip_access_control_allow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.ipAccessControlAllow"></a>

```python
ip_access_control_allow: MediaLiveEventPreviewIpAccessControlAllowList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList">MediaLiveEventPreviewIpAccessControlAllowList</a>

---

##### `alternative_media_id_input`<sup>Optional</sup> <a name="alternative_media_id_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.alternativeMediaIdInput"></a>

```python
alternative_media_id_input: str
```

- *Type:* str

---

##### `ip_access_control_allow_input`<sup>Optional</sup> <a name="ip_access_control_allow_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.ipAccessControlAllowInput"></a>

```python
ip_access_control_allow_input: typing.Union[IResolvable, typing.List[MediaLiveEventPreviewIpAccessControlAllow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow">MediaLiveEventPreviewIpAccessControlAllow</a>]]

---

##### `preview_locator_input`<sup>Optional</sup> <a name="preview_locator_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.previewLocatorInput"></a>

```python
preview_locator_input: str
```

- *Type:* str

---

##### `streaming_policy_name_input`<sup>Optional</sup> <a name="streaming_policy_name_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.streamingPolicyNameInput"></a>

```python
streaming_policy_name_input: str
```

- *Type:* str

---

##### `alternative_media_id`<sup>Required</sup> <a name="alternative_media_id" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.alternativeMediaId"></a>

```python
alternative_media_id: str
```

- *Type:* str

---

##### `preview_locator`<sup>Required</sup> <a name="preview_locator" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.previewLocator"></a>

```python
preview_locator: str
```

- *Type:* str

---

##### `streaming_policy_name`<sup>Required</sup> <a name="streaming_policy_name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.streamingPolicyName"></a>

```python
streaming_policy_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.internalValue"></a>

```python
internal_value: MediaLiveEventPreview
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview">MediaLiveEventPreview</a>

---


### MediaLiveEventTimeoutsOutputReference <a name="MediaLiveEventTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event

mediaLiveEvent.MediaLiveEventTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts">MediaLiveEventTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[MediaLiveEventTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts">MediaLiveEventTimeouts</a>, cdktf.IResolvable]

---



