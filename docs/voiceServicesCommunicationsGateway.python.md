# `azurerm_voice_services_communications_gateway`

Refer to the Terraform Registory for docs: [`azurerm_voice_services_communications_gateway`](https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway).

# `voiceServicesCommunicationsGateway` Submodule <a name="`voiceServicesCommunicationsGateway` Submodule" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VoiceServicesCommunicationsGateway <a name="VoiceServicesCommunicationsGateway" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway azurerm_voice_services_communications_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import voice_services_communications_gateway

voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  codecs: str,
  connectivity: str,
  e911_type: str,
  location: str,
  name: str,
  platforms: typing.List[str],
  resource_group_name: str,
  service_location: typing.Union[IResolvable, typing.List[VoiceServicesCommunicationsGatewayServiceLocation]],
  api_bridge: str = None,
  auto_generated_domain_name_label_scope: str = None,
  emergency_dial_strings: typing.List[str] = None,
  id: str = None,
  microsoft_teams_voicemail_pilot_number: str = None,
  on_prem_mcp_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: VoiceServicesCommunicationsGatewayTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.codecs">codecs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#codecs VoiceServicesCommunicationsGateway#codecs}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.connectivity">connectivity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#connectivity VoiceServicesCommunicationsGateway#connectivity}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.e911Type">e911_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#e911_type VoiceServicesCommunicationsGateway#e911_type}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#location VoiceServicesCommunicationsGateway#location}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#name VoiceServicesCommunicationsGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.platforms">platforms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#platforms VoiceServicesCommunicationsGateway#platforms}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#resource_group_name VoiceServicesCommunicationsGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.serviceLocation">service_location</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation">VoiceServicesCommunicationsGatewayServiceLocation</a>]]</code> | service_location block. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.apiBridge">api_bridge</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#api_bridge VoiceServicesCommunicationsGateway#api_bridge}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.autoGeneratedDomainNameLabelScope">auto_generated_domain_name_label_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#auto_generated_domain_name_label_scope VoiceServicesCommunicationsGateway#auto_generated_domain_name_label_scope}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.emergencyDialStrings">emergency_dial_strings</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#emergency_dial_strings VoiceServicesCommunicationsGateway#emergency_dial_strings}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#id VoiceServicesCommunicationsGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.microsoftTeamsVoicemailPilotNumber">microsoft_teams_voicemail_pilot_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#microsoft_teams_voicemail_pilot_number VoiceServicesCommunicationsGateway#microsoft_teams_voicemail_pilot_number}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.onPremMcpEnabled">on_prem_mcp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#on_prem_mcp_enabled VoiceServicesCommunicationsGateway#on_prem_mcp_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#tags VoiceServicesCommunicationsGateway#tags}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts">VoiceServicesCommunicationsGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `codecs`<sup>Required</sup> <a name="codecs" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.codecs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#codecs VoiceServicesCommunicationsGateway#codecs}.

---

##### `connectivity`<sup>Required</sup> <a name="connectivity" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.connectivity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#connectivity VoiceServicesCommunicationsGateway#connectivity}.

---

##### `e911_type`<sup>Required</sup> <a name="e911_type" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.e911Type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#e911_type VoiceServicesCommunicationsGateway#e911_type}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#location VoiceServicesCommunicationsGateway#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#name VoiceServicesCommunicationsGateway#name}.

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.platforms"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#platforms VoiceServicesCommunicationsGateway#platforms}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#resource_group_name VoiceServicesCommunicationsGateway#resource_group_name}.

---

##### `service_location`<sup>Required</sup> <a name="service_location" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.serviceLocation"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation">VoiceServicesCommunicationsGatewayServiceLocation</a>]]

service_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#service_location VoiceServicesCommunicationsGateway#service_location}

---

##### `api_bridge`<sup>Optional</sup> <a name="api_bridge" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.apiBridge"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#api_bridge VoiceServicesCommunicationsGateway#api_bridge}.

---

##### `auto_generated_domain_name_label_scope`<sup>Optional</sup> <a name="auto_generated_domain_name_label_scope" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.autoGeneratedDomainNameLabelScope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#auto_generated_domain_name_label_scope VoiceServicesCommunicationsGateway#auto_generated_domain_name_label_scope}.

---

##### `emergency_dial_strings`<sup>Optional</sup> <a name="emergency_dial_strings" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.emergencyDialStrings"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#emergency_dial_strings VoiceServicesCommunicationsGateway#emergency_dial_strings}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#id VoiceServicesCommunicationsGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `microsoft_teams_voicemail_pilot_number`<sup>Optional</sup> <a name="microsoft_teams_voicemail_pilot_number" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.microsoftTeamsVoicemailPilotNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#microsoft_teams_voicemail_pilot_number VoiceServicesCommunicationsGateway#microsoft_teams_voicemail_pilot_number}.

---

##### `on_prem_mcp_enabled`<sup>Optional</sup> <a name="on_prem_mcp_enabled" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.onPremMcpEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#on_prem_mcp_enabled VoiceServicesCommunicationsGateway#on_prem_mcp_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#tags VoiceServicesCommunicationsGateway#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts">VoiceServicesCommunicationsGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#timeouts VoiceServicesCommunicationsGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.putServiceLocation">put_service_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetApiBridge">reset_api_bridge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetAutoGeneratedDomainNameLabelScope">reset_auto_generated_domain_name_label_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetEmergencyDialStrings">reset_emergency_dial_strings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetMicrosoftTeamsVoicemailPilotNumber">reset_microsoft_teams_voicemail_pilot_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetOnPremMcpEnabled">reset_on_prem_mcp_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_service_location` <a name="put_service_location" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.putServiceLocation"></a>

```python
def put_service_location(
  value: typing.Union[IResolvable, typing.List[VoiceServicesCommunicationsGatewayServiceLocation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.putServiceLocation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation">VoiceServicesCommunicationsGatewayServiceLocation</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#create VoiceServicesCommunicationsGateway#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#delete VoiceServicesCommunicationsGateway#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#read VoiceServicesCommunicationsGateway#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#update VoiceServicesCommunicationsGateway#update}.

---

##### `reset_api_bridge` <a name="reset_api_bridge" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetApiBridge"></a>

```python
def reset_api_bridge() -> None
```

##### `reset_auto_generated_domain_name_label_scope` <a name="reset_auto_generated_domain_name_label_scope" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetAutoGeneratedDomainNameLabelScope"></a>

```python
def reset_auto_generated_domain_name_label_scope() -> None
```

##### `reset_emergency_dial_strings` <a name="reset_emergency_dial_strings" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetEmergencyDialStrings"></a>

```python
def reset_emergency_dial_strings() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_microsoft_teams_voicemail_pilot_number` <a name="reset_microsoft_teams_voicemail_pilot_number" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetMicrosoftTeamsVoicemailPilotNumber"></a>

```python
def reset_microsoft_teams_voicemail_pilot_number() -> None
```

##### `reset_on_prem_mcp_enabled` <a name="reset_on_prem_mcp_enabled" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetOnPremMcpEnabled"></a>

```python
def reset_on_prem_mcp_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VoiceServicesCommunicationsGateway resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import voice_services_communications_gateway

voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import voice_services_communications_gateway

voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import voice_services_communications_gateway

voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import voice_services_communications_gateway

voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VoiceServicesCommunicationsGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VoiceServicesCommunicationsGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VoiceServicesCommunicationsGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VoiceServicesCommunicationsGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.serviceLocation">service_location</a></code> | <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList">VoiceServicesCommunicationsGatewayServiceLocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference">VoiceServicesCommunicationsGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.apiBridgeInput">api_bridge_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.autoGeneratedDomainNameLabelScopeInput">auto_generated_domain_name_label_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.codecsInput">codecs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.connectivityInput">connectivity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.e911TypeInput">e911_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.emergencyDialStringsInput">emergency_dial_strings_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.microsoftTeamsVoicemailPilotNumberInput">microsoft_teams_voicemail_pilot_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.onPremMcpEnabledInput">on_prem_mcp_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.platformsInput">platforms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.serviceLocationInput">service_location_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation">VoiceServicesCommunicationsGatewayServiceLocation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts">VoiceServicesCommunicationsGatewayTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.apiBridge">api_bridge</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.autoGeneratedDomainNameLabelScope">auto_generated_domain_name_label_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.codecs">codecs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.connectivity">connectivity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.e911Type">e911_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.emergencyDialStrings">emergency_dial_strings</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.microsoftTeamsVoicemailPilotNumber">microsoft_teams_voicemail_pilot_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.onPremMcpEnabled">on_prem_mcp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.platforms">platforms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_location`<sup>Required</sup> <a name="service_location" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.serviceLocation"></a>

```python
service_location: VoiceServicesCommunicationsGatewayServiceLocationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList">VoiceServicesCommunicationsGatewayServiceLocationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.timeouts"></a>

```python
timeouts: VoiceServicesCommunicationsGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference">VoiceServicesCommunicationsGatewayTimeoutsOutputReference</a>

---

##### `api_bridge_input`<sup>Optional</sup> <a name="api_bridge_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.apiBridgeInput"></a>

```python
api_bridge_input: str
```

- *Type:* str

---

##### `auto_generated_domain_name_label_scope_input`<sup>Optional</sup> <a name="auto_generated_domain_name_label_scope_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.autoGeneratedDomainNameLabelScopeInput"></a>

```python
auto_generated_domain_name_label_scope_input: str
```

- *Type:* str

---

##### `codecs_input`<sup>Optional</sup> <a name="codecs_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.codecsInput"></a>

```python
codecs_input: str
```

- *Type:* str

---

##### `connectivity_input`<sup>Optional</sup> <a name="connectivity_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.connectivityInput"></a>

```python
connectivity_input: str
```

- *Type:* str

---

##### `e911_type_input`<sup>Optional</sup> <a name="e911_type_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.e911TypeInput"></a>

```python
e911_type_input: str
```

- *Type:* str

---

##### `emergency_dial_strings_input`<sup>Optional</sup> <a name="emergency_dial_strings_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.emergencyDialStringsInput"></a>

```python
emergency_dial_strings_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `microsoft_teams_voicemail_pilot_number_input`<sup>Optional</sup> <a name="microsoft_teams_voicemail_pilot_number_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.microsoftTeamsVoicemailPilotNumberInput"></a>

```python
microsoft_teams_voicemail_pilot_number_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `on_prem_mcp_enabled_input`<sup>Optional</sup> <a name="on_prem_mcp_enabled_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.onPremMcpEnabledInput"></a>

```python
on_prem_mcp_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `platforms_input`<sup>Optional</sup> <a name="platforms_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.platformsInput"></a>

```python
platforms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `service_location_input`<sup>Optional</sup> <a name="service_location_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.serviceLocationInput"></a>

```python
service_location_input: typing.Union[IResolvable, typing.List[VoiceServicesCommunicationsGatewayServiceLocation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation">VoiceServicesCommunicationsGatewayServiceLocation</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VoiceServicesCommunicationsGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts">VoiceServicesCommunicationsGatewayTimeouts</a>]

---

##### `api_bridge`<sup>Required</sup> <a name="api_bridge" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.apiBridge"></a>

```python
api_bridge: str
```

- *Type:* str

---

##### `auto_generated_domain_name_label_scope`<sup>Required</sup> <a name="auto_generated_domain_name_label_scope" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.autoGeneratedDomainNameLabelScope"></a>

```python
auto_generated_domain_name_label_scope: str
```

- *Type:* str

---

##### `codecs`<sup>Required</sup> <a name="codecs" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.codecs"></a>

```python
codecs: str
```

- *Type:* str

---

##### `connectivity`<sup>Required</sup> <a name="connectivity" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.connectivity"></a>

```python
connectivity: str
```

- *Type:* str

---

##### `e911_type`<sup>Required</sup> <a name="e911_type" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.e911Type"></a>

```python
e911_type: str
```

- *Type:* str

---

##### `emergency_dial_strings`<sup>Required</sup> <a name="emergency_dial_strings" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.emergencyDialStrings"></a>

```python
emergency_dial_strings: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `microsoft_teams_voicemail_pilot_number`<sup>Required</sup> <a name="microsoft_teams_voicemail_pilot_number" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.microsoftTeamsVoicemailPilotNumber"></a>

```python
microsoft_teams_voicemail_pilot_number: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `on_prem_mcp_enabled`<sup>Required</sup> <a name="on_prem_mcp_enabled" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.onPremMcpEnabled"></a>

```python
on_prem_mcp_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.platforms"></a>

```python
platforms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VoiceServicesCommunicationsGatewayConfig <a name="VoiceServicesCommunicationsGatewayConfig" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import voice_services_communications_gateway

voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  codecs: str,
  connectivity: str,
  e911_type: str,
  location: str,
  name: str,
  platforms: typing.List[str],
  resource_group_name: str,
  service_location: typing.Union[IResolvable, typing.List[VoiceServicesCommunicationsGatewayServiceLocation]],
  api_bridge: str = None,
  auto_generated_domain_name_label_scope: str = None,
  emergency_dial_strings: typing.List[str] = None,
  id: str = None,
  microsoft_teams_voicemail_pilot_number: str = None,
  on_prem_mcp_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: VoiceServicesCommunicationsGatewayTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.codecs">codecs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#codecs VoiceServicesCommunicationsGateway#codecs}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.connectivity">connectivity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#connectivity VoiceServicesCommunicationsGateway#connectivity}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.e911Type">e911_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#e911_type VoiceServicesCommunicationsGateway#e911_type}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#location VoiceServicesCommunicationsGateway#location}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#name VoiceServicesCommunicationsGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.platforms">platforms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#platforms VoiceServicesCommunicationsGateway#platforms}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#resource_group_name VoiceServicesCommunicationsGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.serviceLocation">service_location</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation">VoiceServicesCommunicationsGatewayServiceLocation</a>]]</code> | service_location block. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.apiBridge">api_bridge</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#api_bridge VoiceServicesCommunicationsGateway#api_bridge}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.autoGeneratedDomainNameLabelScope">auto_generated_domain_name_label_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#auto_generated_domain_name_label_scope VoiceServicesCommunicationsGateway#auto_generated_domain_name_label_scope}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.emergencyDialStrings">emergency_dial_strings</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#emergency_dial_strings VoiceServicesCommunicationsGateway#emergency_dial_strings}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#id VoiceServicesCommunicationsGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.microsoftTeamsVoicemailPilotNumber">microsoft_teams_voicemail_pilot_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#microsoft_teams_voicemail_pilot_number VoiceServicesCommunicationsGateway#microsoft_teams_voicemail_pilot_number}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.onPremMcpEnabled">on_prem_mcp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#on_prem_mcp_enabled VoiceServicesCommunicationsGateway#on_prem_mcp_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#tags VoiceServicesCommunicationsGateway#tags}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts">VoiceServicesCommunicationsGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `codecs`<sup>Required</sup> <a name="codecs" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.codecs"></a>

```python
codecs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#codecs VoiceServicesCommunicationsGateway#codecs}.

---

##### `connectivity`<sup>Required</sup> <a name="connectivity" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.connectivity"></a>

```python
connectivity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#connectivity VoiceServicesCommunicationsGateway#connectivity}.

---

##### `e911_type`<sup>Required</sup> <a name="e911_type" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.e911Type"></a>

```python
e911_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#e911_type VoiceServicesCommunicationsGateway#e911_type}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#location VoiceServicesCommunicationsGateway#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#name VoiceServicesCommunicationsGateway#name}.

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.platforms"></a>

```python
platforms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#platforms VoiceServicesCommunicationsGateway#platforms}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#resource_group_name VoiceServicesCommunicationsGateway#resource_group_name}.

---

##### `service_location`<sup>Required</sup> <a name="service_location" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.serviceLocation"></a>

```python
service_location: typing.Union[IResolvable, typing.List[VoiceServicesCommunicationsGatewayServiceLocation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation">VoiceServicesCommunicationsGatewayServiceLocation</a>]]

service_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#service_location VoiceServicesCommunicationsGateway#service_location}

---

##### `api_bridge`<sup>Optional</sup> <a name="api_bridge" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.apiBridge"></a>

```python
api_bridge: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#api_bridge VoiceServicesCommunicationsGateway#api_bridge}.

---

##### `auto_generated_domain_name_label_scope`<sup>Optional</sup> <a name="auto_generated_domain_name_label_scope" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.autoGeneratedDomainNameLabelScope"></a>

```python
auto_generated_domain_name_label_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#auto_generated_domain_name_label_scope VoiceServicesCommunicationsGateway#auto_generated_domain_name_label_scope}.

---

##### `emergency_dial_strings`<sup>Optional</sup> <a name="emergency_dial_strings" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.emergencyDialStrings"></a>

```python
emergency_dial_strings: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#emergency_dial_strings VoiceServicesCommunicationsGateway#emergency_dial_strings}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#id VoiceServicesCommunicationsGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `microsoft_teams_voicemail_pilot_number`<sup>Optional</sup> <a name="microsoft_teams_voicemail_pilot_number" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.microsoftTeamsVoicemailPilotNumber"></a>

```python
microsoft_teams_voicemail_pilot_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#microsoft_teams_voicemail_pilot_number VoiceServicesCommunicationsGateway#microsoft_teams_voicemail_pilot_number}.

---

##### `on_prem_mcp_enabled`<sup>Optional</sup> <a name="on_prem_mcp_enabled" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.onPremMcpEnabled"></a>

```python
on_prem_mcp_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#on_prem_mcp_enabled VoiceServicesCommunicationsGateway#on_prem_mcp_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#tags VoiceServicesCommunicationsGateway#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.timeouts"></a>

```python
timeouts: VoiceServicesCommunicationsGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts">VoiceServicesCommunicationsGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#timeouts VoiceServicesCommunicationsGateway#timeouts}

---

### VoiceServicesCommunicationsGatewayServiceLocation <a name="VoiceServicesCommunicationsGatewayServiceLocation" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import voice_services_communications_gateway

voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation(
  location: str,
  operator_addresses: typing.List[str],
  allowed_media_source_address_prefixes: typing.List[str] = None,
  allowed_signaling_source_address_prefixes: typing.List[str] = None,
  esrp_addresses: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#location VoiceServicesCommunicationsGateway#location}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation.property.operatorAddresses">operator_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#operator_addresses VoiceServicesCommunicationsGateway#operator_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation.property.allowedMediaSourceAddressPrefixes">allowed_media_source_address_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#allowed_media_source_address_prefixes VoiceServicesCommunicationsGateway#allowed_media_source_address_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation.property.allowedSignalingSourceAddressPrefixes">allowed_signaling_source_address_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#allowed_signaling_source_address_prefixes VoiceServicesCommunicationsGateway#allowed_signaling_source_address_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation.property.esrpAddresses">esrp_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#esrp_addresses VoiceServicesCommunicationsGateway#esrp_addresses}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#location VoiceServicesCommunicationsGateway#location}.

---

##### `operator_addresses`<sup>Required</sup> <a name="operator_addresses" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation.property.operatorAddresses"></a>

```python
operator_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#operator_addresses VoiceServicesCommunicationsGateway#operator_addresses}.

---

##### `allowed_media_source_address_prefixes`<sup>Optional</sup> <a name="allowed_media_source_address_prefixes" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation.property.allowedMediaSourceAddressPrefixes"></a>

```python
allowed_media_source_address_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#allowed_media_source_address_prefixes VoiceServicesCommunicationsGateway#allowed_media_source_address_prefixes}.

---

##### `allowed_signaling_source_address_prefixes`<sup>Optional</sup> <a name="allowed_signaling_source_address_prefixes" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation.property.allowedSignalingSourceAddressPrefixes"></a>

```python
allowed_signaling_source_address_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#allowed_signaling_source_address_prefixes VoiceServicesCommunicationsGateway#allowed_signaling_source_address_prefixes}.

---

##### `esrp_addresses`<sup>Optional</sup> <a name="esrp_addresses" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation.property.esrpAddresses"></a>

```python
esrp_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#esrp_addresses VoiceServicesCommunicationsGateway#esrp_addresses}.

---

### VoiceServicesCommunicationsGatewayTimeouts <a name="VoiceServicesCommunicationsGatewayTimeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import voice_services_communications_gateway

voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#create VoiceServicesCommunicationsGateway#create}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#delete VoiceServicesCommunicationsGateway#delete}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#read VoiceServicesCommunicationsGateway#read}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#update VoiceServicesCommunicationsGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#create VoiceServicesCommunicationsGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#delete VoiceServicesCommunicationsGateway#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#read VoiceServicesCommunicationsGateway#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/voice_services_communications_gateway#update VoiceServicesCommunicationsGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VoiceServicesCommunicationsGatewayServiceLocationList <a name="VoiceServicesCommunicationsGatewayServiceLocationList" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import voice_services_communications_gateway

voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VoiceServicesCommunicationsGatewayServiceLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation">VoiceServicesCommunicationsGatewayServiceLocation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VoiceServicesCommunicationsGatewayServiceLocation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation">VoiceServicesCommunicationsGatewayServiceLocation</a>]]

---


### VoiceServicesCommunicationsGatewayServiceLocationOutputReference <a name="VoiceServicesCommunicationsGatewayServiceLocationOutputReference" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import voice_services_communications_gateway

voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.resetAllowedMediaSourceAddressPrefixes">reset_allowed_media_source_address_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.resetAllowedSignalingSourceAddressPrefixes">reset_allowed_signaling_source_address_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.resetEsrpAddresses">reset_esrp_addresses</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_media_source_address_prefixes` <a name="reset_allowed_media_source_address_prefixes" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.resetAllowedMediaSourceAddressPrefixes"></a>

```python
def reset_allowed_media_source_address_prefixes() -> None
```

##### `reset_allowed_signaling_source_address_prefixes` <a name="reset_allowed_signaling_source_address_prefixes" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.resetAllowedSignalingSourceAddressPrefixes"></a>

```python
def reset_allowed_signaling_source_address_prefixes() -> None
```

##### `reset_esrp_addresses` <a name="reset_esrp_addresses" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.resetEsrpAddresses"></a>

```python
def reset_esrp_addresses() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.allowedMediaSourceAddressPrefixesInput">allowed_media_source_address_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.allowedSignalingSourceAddressPrefixesInput">allowed_signaling_source_address_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.esrpAddressesInput">esrp_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.operatorAddressesInput">operator_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.allowedMediaSourceAddressPrefixes">allowed_media_source_address_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.allowedSignalingSourceAddressPrefixes">allowed_signaling_source_address_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.esrpAddresses">esrp_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.operatorAddresses">operator_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation">VoiceServicesCommunicationsGatewayServiceLocation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_media_source_address_prefixes_input`<sup>Optional</sup> <a name="allowed_media_source_address_prefixes_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.allowedMediaSourceAddressPrefixesInput"></a>

```python
allowed_media_source_address_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_signaling_source_address_prefixes_input`<sup>Optional</sup> <a name="allowed_signaling_source_address_prefixes_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.allowedSignalingSourceAddressPrefixesInput"></a>

```python
allowed_signaling_source_address_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `esrp_addresses_input`<sup>Optional</sup> <a name="esrp_addresses_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.esrpAddressesInput"></a>

```python
esrp_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `operator_addresses_input`<sup>Optional</sup> <a name="operator_addresses_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.operatorAddressesInput"></a>

```python
operator_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_media_source_address_prefixes`<sup>Required</sup> <a name="allowed_media_source_address_prefixes" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.allowedMediaSourceAddressPrefixes"></a>

```python
allowed_media_source_address_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_signaling_source_address_prefixes`<sup>Required</sup> <a name="allowed_signaling_source_address_prefixes" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.allowedSignalingSourceAddressPrefixes"></a>

```python
allowed_signaling_source_address_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `esrp_addresses`<sup>Required</sup> <a name="esrp_addresses" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.esrpAddresses"></a>

```python
esrp_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `operator_addresses`<sup>Required</sup> <a name="operator_addresses" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.operatorAddresses"></a>

```python
operator_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VoiceServicesCommunicationsGatewayServiceLocation]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation">VoiceServicesCommunicationsGatewayServiceLocation</a>]

---


### VoiceServicesCommunicationsGatewayTimeoutsOutputReference <a name="VoiceServicesCommunicationsGatewayTimeoutsOutputReference" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import voice_services_communications_gateway

voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts">VoiceServicesCommunicationsGatewayTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VoiceServicesCommunicationsGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts">VoiceServicesCommunicationsGatewayTimeouts</a>]

---



