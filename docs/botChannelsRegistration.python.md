# `azurerm_bot_channels_registration`

Refer to the Terraform Registory for docs: [`azurerm_bot_channels_registration`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration).

# `botChannelsRegistration` Submodule <a name="`botChannelsRegistration` Submodule" id="@cdktf/provider-azurerm.botChannelsRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotChannelsRegistration <a name="BotChannelsRegistration" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration azurerm_bot_channels_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channels_registration

botChannelsRegistration.BotChannelsRegistration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  microsoft_app_id: str,
  name: str,
  resource_group_name: str,
  sku: str,
  cmk_key_vault_url: str = None,
  description: str = None,
  developer_app_insights_api_key: str = None,
  developer_app_insights_application_id: str = None,
  developer_app_insights_key: str = None,
  display_name: str = None,
  endpoint: str = None,
  icon_url: str = None,
  id: str = None,
  isolated_network_enabled: typing.Union[bool, IResolvable] = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  streaming_endpoint_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: BotChannelsRegistrationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#location BotChannelsRegistration#location}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.microsoftAppId">microsoft_app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#microsoft_app_id BotChannelsRegistration#microsoft_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#name BotChannelsRegistration#name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#resource_group_name BotChannelsRegistration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#sku BotChannelsRegistration#sku}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.cmkKeyVaultUrl">cmk_key_vault_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#cmk_key_vault_url BotChannelsRegistration#cmk_key_vault_url}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#description BotChannelsRegistration#description}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.developerAppInsightsApiKey">developer_app_insights_api_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#developer_app_insights_api_key BotChannelsRegistration#developer_app_insights_api_key}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.developerAppInsightsApplicationId">developer_app_insights_application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#developer_app_insights_application_id BotChannelsRegistration#developer_app_insights_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.developerAppInsightsKey">developer_app_insights_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#developer_app_insights_key BotChannelsRegistration#developer_app_insights_key}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#display_name BotChannelsRegistration#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#endpoint BotChannelsRegistration#endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.iconUrl">icon_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#icon_url BotChannelsRegistration#icon_url}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#id BotChannelsRegistration#id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.isolatedNetworkEnabled">isolated_network_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#isolated_network_enabled BotChannelsRegistration#isolated_network_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#public_network_access_enabled BotChannelsRegistration#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.streamingEndpointEnabled">streaming_endpoint_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#streaming_endpoint_enabled BotChannelsRegistration#streaming_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#tags BotChannelsRegistration#tags}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts">BotChannelsRegistrationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#location BotChannelsRegistration#location}.

---

##### `microsoft_app_id`<sup>Required</sup> <a name="microsoft_app_id" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.microsoftAppId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#microsoft_app_id BotChannelsRegistration#microsoft_app_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#name BotChannelsRegistration#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#resource_group_name BotChannelsRegistration#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#sku BotChannelsRegistration#sku}.

---

##### `cmk_key_vault_url`<sup>Optional</sup> <a name="cmk_key_vault_url" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.cmkKeyVaultUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#cmk_key_vault_url BotChannelsRegistration#cmk_key_vault_url}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#description BotChannelsRegistration#description}.

---

##### `developer_app_insights_api_key`<sup>Optional</sup> <a name="developer_app_insights_api_key" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.developerAppInsightsApiKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#developer_app_insights_api_key BotChannelsRegistration#developer_app_insights_api_key}.

---

##### `developer_app_insights_application_id`<sup>Optional</sup> <a name="developer_app_insights_application_id" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.developerAppInsightsApplicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#developer_app_insights_application_id BotChannelsRegistration#developer_app_insights_application_id}.

---

##### `developer_app_insights_key`<sup>Optional</sup> <a name="developer_app_insights_key" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.developerAppInsightsKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#developer_app_insights_key BotChannelsRegistration#developer_app_insights_key}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#display_name BotChannelsRegistration#display_name}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.endpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#endpoint BotChannelsRegistration#endpoint}.

---

##### `icon_url`<sup>Optional</sup> <a name="icon_url" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.iconUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#icon_url BotChannelsRegistration#icon_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#id BotChannelsRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isolated_network_enabled`<sup>Optional</sup> <a name="isolated_network_enabled" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.isolatedNetworkEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#isolated_network_enabled BotChannelsRegistration#isolated_network_enabled}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#public_network_access_enabled BotChannelsRegistration#public_network_access_enabled}.

---

##### `streaming_endpoint_enabled`<sup>Optional</sup> <a name="streaming_endpoint_enabled" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.streamingEndpointEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#streaming_endpoint_enabled BotChannelsRegistration#streaming_endpoint_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#tags BotChannelsRegistration#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts">BotChannelsRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#timeouts BotChannelsRegistration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetCmkKeyVaultUrl">reset_cmk_key_vault_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDeveloperAppInsightsApiKey">reset_developer_app_insights_api_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDeveloperAppInsightsApplicationId">reset_developer_app_insights_application_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDeveloperAppInsightsKey">reset_developer_app_insights_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetIconUrl">reset_icon_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetIsolatedNetworkEnabled">reset_isolated_network_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetStreamingEndpointEnabled">reset_streaming_endpoint_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#create BotChannelsRegistration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#delete BotChannelsRegistration#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#read BotChannelsRegistration#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#update BotChannelsRegistration#update}.

---

##### `reset_cmk_key_vault_url` <a name="reset_cmk_key_vault_url" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetCmkKeyVaultUrl"></a>

```python
def reset_cmk_key_vault_url() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_developer_app_insights_api_key` <a name="reset_developer_app_insights_api_key" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDeveloperAppInsightsApiKey"></a>

```python
def reset_developer_app_insights_api_key() -> None
```

##### `reset_developer_app_insights_application_id` <a name="reset_developer_app_insights_application_id" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDeveloperAppInsightsApplicationId"></a>

```python
def reset_developer_app_insights_application_id() -> None
```

##### `reset_developer_app_insights_key` <a name="reset_developer_app_insights_key" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDeveloperAppInsightsKey"></a>

```python
def reset_developer_app_insights_key() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_icon_url` <a name="reset_icon_url" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetIconUrl"></a>

```python
def reset_icon_url() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_isolated_network_enabled` <a name="reset_isolated_network_enabled" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetIsolatedNetworkEnabled"></a>

```python
def reset_isolated_network_enabled() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_streaming_endpoint_enabled` <a name="reset_streaming_endpoint_enabled" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetStreamingEndpointEnabled"></a>

```python
def reset_streaming_endpoint_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channels_registration

botChannelsRegistration.BotChannelsRegistration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channels_registration

botChannelsRegistration.BotChannelsRegistration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channels_registration

botChannelsRegistration.BotChannelsRegistration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference">BotChannelsRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.cmkKeyVaultUrlInput">cmk_key_vault_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsApiKeyInput">developer_app_insights_api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsApplicationIdInput">developer_app_insights_application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsKeyInput">developer_app_insights_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.iconUrlInput">icon_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.isolatedNetworkEnabledInput">isolated_network_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.microsoftAppIdInput">microsoft_app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.streamingEndpointEnabledInput">streaming_endpoint_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts">BotChannelsRegistrationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.cmkKeyVaultUrl">cmk_key_vault_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsApiKey">developer_app_insights_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsApplicationId">developer_app_insights_application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsKey">developer_app_insights_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.iconUrl">icon_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.isolatedNetworkEnabled">isolated_network_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.microsoftAppId">microsoft_app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.streamingEndpointEnabled">streaming_endpoint_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.timeouts"></a>

```python
timeouts: BotChannelsRegistrationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference">BotChannelsRegistrationTimeoutsOutputReference</a>

---

##### `cmk_key_vault_url_input`<sup>Optional</sup> <a name="cmk_key_vault_url_input" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.cmkKeyVaultUrlInput"></a>

```python
cmk_key_vault_url_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `developer_app_insights_api_key_input`<sup>Optional</sup> <a name="developer_app_insights_api_key_input" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsApiKeyInput"></a>

```python
developer_app_insights_api_key_input: str
```

- *Type:* str

---

##### `developer_app_insights_application_id_input`<sup>Optional</sup> <a name="developer_app_insights_application_id_input" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsApplicationIdInput"></a>

```python
developer_app_insights_application_id_input: str
```

- *Type:* str

---

##### `developer_app_insights_key_input`<sup>Optional</sup> <a name="developer_app_insights_key_input" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsKeyInput"></a>

```python
developer_app_insights_key_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `icon_url_input`<sup>Optional</sup> <a name="icon_url_input" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.iconUrlInput"></a>

```python
icon_url_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `isolated_network_enabled_input`<sup>Optional</sup> <a name="isolated_network_enabled_input" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.isolatedNetworkEnabledInput"></a>

```python
isolated_network_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `microsoft_app_id_input`<sup>Optional</sup> <a name="microsoft_app_id_input" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.microsoftAppIdInput"></a>

```python
microsoft_app_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `streaming_endpoint_enabled_input`<sup>Optional</sup> <a name="streaming_endpoint_enabled_input" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.streamingEndpointEnabledInput"></a>

```python
streaming_endpoint_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[BotChannelsRegistrationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts">BotChannelsRegistrationTimeouts</a>, cdktf.IResolvable]

---

##### `cmk_key_vault_url`<sup>Required</sup> <a name="cmk_key_vault_url" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.cmkKeyVaultUrl"></a>

```python
cmk_key_vault_url: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `developer_app_insights_api_key`<sup>Required</sup> <a name="developer_app_insights_api_key" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsApiKey"></a>

```python
developer_app_insights_api_key: str
```

- *Type:* str

---

##### `developer_app_insights_application_id`<sup>Required</sup> <a name="developer_app_insights_application_id" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsApplicationId"></a>

```python
developer_app_insights_application_id: str
```

- *Type:* str

---

##### `developer_app_insights_key`<sup>Required</sup> <a name="developer_app_insights_key" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsKey"></a>

```python
developer_app_insights_key: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `icon_url`<sup>Required</sup> <a name="icon_url" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.iconUrl"></a>

```python
icon_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `isolated_network_enabled`<sup>Required</sup> <a name="isolated_network_enabled" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.isolatedNetworkEnabled"></a>

```python
isolated_network_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `microsoft_app_id`<sup>Required</sup> <a name="microsoft_app_id" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.microsoftAppId"></a>

```python
microsoft_app_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `streaming_endpoint_enabled`<sup>Required</sup> <a name="streaming_endpoint_enabled" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.streamingEndpointEnabled"></a>

```python
streaming_endpoint_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BotChannelsRegistrationConfig <a name="BotChannelsRegistrationConfig" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channels_registration

botChannelsRegistration.BotChannelsRegistrationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  microsoft_app_id: str,
  name: str,
  resource_group_name: str,
  sku: str,
  cmk_key_vault_url: str = None,
  description: str = None,
  developer_app_insights_api_key: str = None,
  developer_app_insights_application_id: str = None,
  developer_app_insights_key: str = None,
  display_name: str = None,
  endpoint: str = None,
  icon_url: str = None,
  id: str = None,
  isolated_network_enabled: typing.Union[bool, IResolvable] = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  streaming_endpoint_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: BotChannelsRegistrationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#location BotChannelsRegistration#location}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.microsoftAppId">microsoft_app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#microsoft_app_id BotChannelsRegistration#microsoft_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#name BotChannelsRegistration#name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#resource_group_name BotChannelsRegistration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#sku BotChannelsRegistration#sku}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.cmkKeyVaultUrl">cmk_key_vault_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#cmk_key_vault_url BotChannelsRegistration#cmk_key_vault_url}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#description BotChannelsRegistration#description}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.developerAppInsightsApiKey">developer_app_insights_api_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#developer_app_insights_api_key BotChannelsRegistration#developer_app_insights_api_key}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.developerAppInsightsApplicationId">developer_app_insights_application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#developer_app_insights_application_id BotChannelsRegistration#developer_app_insights_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.developerAppInsightsKey">developer_app_insights_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#developer_app_insights_key BotChannelsRegistration#developer_app_insights_key}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#display_name BotChannelsRegistration#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#endpoint BotChannelsRegistration#endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.iconUrl">icon_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#icon_url BotChannelsRegistration#icon_url}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#id BotChannelsRegistration#id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.isolatedNetworkEnabled">isolated_network_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#isolated_network_enabled BotChannelsRegistration#isolated_network_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#public_network_access_enabled BotChannelsRegistration#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.streamingEndpointEnabled">streaming_endpoint_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#streaming_endpoint_enabled BotChannelsRegistration#streaming_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#tags BotChannelsRegistration#tags}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts">BotChannelsRegistrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#location BotChannelsRegistration#location}.

---

##### `microsoft_app_id`<sup>Required</sup> <a name="microsoft_app_id" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.microsoftAppId"></a>

```python
microsoft_app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#microsoft_app_id BotChannelsRegistration#microsoft_app_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#name BotChannelsRegistration#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#resource_group_name BotChannelsRegistration#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#sku BotChannelsRegistration#sku}.

---

##### `cmk_key_vault_url`<sup>Optional</sup> <a name="cmk_key_vault_url" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.cmkKeyVaultUrl"></a>

```python
cmk_key_vault_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#cmk_key_vault_url BotChannelsRegistration#cmk_key_vault_url}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#description BotChannelsRegistration#description}.

---

##### `developer_app_insights_api_key`<sup>Optional</sup> <a name="developer_app_insights_api_key" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.developerAppInsightsApiKey"></a>

```python
developer_app_insights_api_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#developer_app_insights_api_key BotChannelsRegistration#developer_app_insights_api_key}.

---

##### `developer_app_insights_application_id`<sup>Optional</sup> <a name="developer_app_insights_application_id" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.developerAppInsightsApplicationId"></a>

```python
developer_app_insights_application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#developer_app_insights_application_id BotChannelsRegistration#developer_app_insights_application_id}.

---

##### `developer_app_insights_key`<sup>Optional</sup> <a name="developer_app_insights_key" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.developerAppInsightsKey"></a>

```python
developer_app_insights_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#developer_app_insights_key BotChannelsRegistration#developer_app_insights_key}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#display_name BotChannelsRegistration#display_name}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#endpoint BotChannelsRegistration#endpoint}.

---

##### `icon_url`<sup>Optional</sup> <a name="icon_url" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.iconUrl"></a>

```python
icon_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#icon_url BotChannelsRegistration#icon_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#id BotChannelsRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isolated_network_enabled`<sup>Optional</sup> <a name="isolated_network_enabled" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.isolatedNetworkEnabled"></a>

```python
isolated_network_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#isolated_network_enabled BotChannelsRegistration#isolated_network_enabled}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#public_network_access_enabled BotChannelsRegistration#public_network_access_enabled}.

---

##### `streaming_endpoint_enabled`<sup>Optional</sup> <a name="streaming_endpoint_enabled" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.streamingEndpointEnabled"></a>

```python
streaming_endpoint_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#streaming_endpoint_enabled BotChannelsRegistration#streaming_endpoint_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#tags BotChannelsRegistration#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.timeouts"></a>

```python
timeouts: BotChannelsRegistrationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts">BotChannelsRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#timeouts BotChannelsRegistration#timeouts}

---

### BotChannelsRegistrationTimeouts <a name="BotChannelsRegistrationTimeouts" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channels_registration

botChannelsRegistration.BotChannelsRegistrationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#create BotChannelsRegistration#create}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#delete BotChannelsRegistration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#read BotChannelsRegistration#read}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#update BotChannelsRegistration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#create BotChannelsRegistration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#delete BotChannelsRegistration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#read BotChannelsRegistration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channels_registration#update BotChannelsRegistration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BotChannelsRegistrationTimeoutsOutputReference <a name="BotChannelsRegistrationTimeoutsOutputReference" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channels_registration

botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts">BotChannelsRegistrationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[BotChannelsRegistrationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts">BotChannelsRegistrationTimeouts</a>, cdktf.IResolvable]

---



