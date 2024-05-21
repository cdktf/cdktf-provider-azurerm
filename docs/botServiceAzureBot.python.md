# `botServiceAzureBot` Submodule <a name="`botServiceAzureBot` Submodule" id="@cdktf/provider-azurerm.botServiceAzureBot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotServiceAzureBot <a name="BotServiceAzureBot" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot azurerm_bot_service_azure_bot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_service_azure_bot

botServiceAzureBot.BotServiceAzureBot(
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
  cmk_key_vault_key_url: str = None,
  developer_app_insights_api_key: str = None,
  developer_app_insights_application_id: str = None,
  developer_app_insights_key: str = None,
  display_name: str = None,
  endpoint: str = None,
  icon_url: str = None,
  id: str = None,
  local_authentication_enabled: typing.Union[bool, IResolvable] = None,
  luis_app_ids: typing.List[str] = None,
  luis_key: str = None,
  microsoft_app_msi_id: str = None,
  microsoft_app_tenant_id: str = None,
  microsoft_app_type: str = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  streaming_endpoint_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: BotServiceAzureBotTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#location BotServiceAzureBot#location}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.microsoftAppId">microsoft_app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#microsoft_app_id BotServiceAzureBot#microsoft_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#name BotServiceAzureBot#name}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#resource_group_name BotServiceAzureBot#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#sku BotServiceAzureBot#sku}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.cmkKeyVaultKeyUrl">cmk_key_vault_key_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#cmk_key_vault_key_url BotServiceAzureBot#cmk_key_vault_key_url}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.developerAppInsightsApiKey">developer_app_insights_api_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#developer_app_insights_api_key BotServiceAzureBot#developer_app_insights_api_key}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.developerAppInsightsApplicationId">developer_app_insights_application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#developer_app_insights_application_id BotServiceAzureBot#developer_app_insights_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.developerAppInsightsKey">developer_app_insights_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#developer_app_insights_key BotServiceAzureBot#developer_app_insights_key}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#display_name BotServiceAzureBot#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#endpoint BotServiceAzureBot#endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.iconUrl">icon_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#icon_url BotServiceAzureBot#icon_url}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#id BotServiceAzureBot#id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.localAuthenticationEnabled">local_authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#local_authentication_enabled BotServiceAzureBot#local_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.luisAppIds">luis_app_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#luis_app_ids BotServiceAzureBot#luis_app_ids}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.luisKey">luis_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#luis_key BotServiceAzureBot#luis_key}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.microsoftAppMsiId">microsoft_app_msi_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#microsoft_app_msi_id BotServiceAzureBot#microsoft_app_msi_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.microsoftAppTenantId">microsoft_app_tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#microsoft_app_tenant_id BotServiceAzureBot#microsoft_app_tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.microsoftAppType">microsoft_app_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#microsoft_app_type BotServiceAzureBot#microsoft_app_type}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#public_network_access_enabled BotServiceAzureBot#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.streamingEndpointEnabled">streaming_endpoint_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#streaming_endpoint_enabled BotServiceAzureBot#streaming_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#tags BotServiceAzureBot#tags}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#location BotServiceAzureBot#location}.

---

##### `microsoft_app_id`<sup>Required</sup> <a name="microsoft_app_id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.microsoftAppId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#microsoft_app_id BotServiceAzureBot#microsoft_app_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#name BotServiceAzureBot#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#resource_group_name BotServiceAzureBot#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#sku BotServiceAzureBot#sku}.

---

##### `cmk_key_vault_key_url`<sup>Optional</sup> <a name="cmk_key_vault_key_url" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.cmkKeyVaultKeyUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#cmk_key_vault_key_url BotServiceAzureBot#cmk_key_vault_key_url}.

---

##### `developer_app_insights_api_key`<sup>Optional</sup> <a name="developer_app_insights_api_key" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.developerAppInsightsApiKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#developer_app_insights_api_key BotServiceAzureBot#developer_app_insights_api_key}.

---

##### `developer_app_insights_application_id`<sup>Optional</sup> <a name="developer_app_insights_application_id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.developerAppInsightsApplicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#developer_app_insights_application_id BotServiceAzureBot#developer_app_insights_application_id}.

---

##### `developer_app_insights_key`<sup>Optional</sup> <a name="developer_app_insights_key" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.developerAppInsightsKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#developer_app_insights_key BotServiceAzureBot#developer_app_insights_key}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#display_name BotServiceAzureBot#display_name}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.endpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#endpoint BotServiceAzureBot#endpoint}.

---

##### `icon_url`<sup>Optional</sup> <a name="icon_url" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.iconUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#icon_url BotServiceAzureBot#icon_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#id BotServiceAzureBot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local_authentication_enabled`<sup>Optional</sup> <a name="local_authentication_enabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.localAuthenticationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#local_authentication_enabled BotServiceAzureBot#local_authentication_enabled}.

---

##### `luis_app_ids`<sup>Optional</sup> <a name="luis_app_ids" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.luisAppIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#luis_app_ids BotServiceAzureBot#luis_app_ids}.

---

##### `luis_key`<sup>Optional</sup> <a name="luis_key" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.luisKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#luis_key BotServiceAzureBot#luis_key}.

---

##### `microsoft_app_msi_id`<sup>Optional</sup> <a name="microsoft_app_msi_id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.microsoftAppMsiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#microsoft_app_msi_id BotServiceAzureBot#microsoft_app_msi_id}.

---

##### `microsoft_app_tenant_id`<sup>Optional</sup> <a name="microsoft_app_tenant_id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.microsoftAppTenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#microsoft_app_tenant_id BotServiceAzureBot#microsoft_app_tenant_id}.

---

##### `microsoft_app_type`<sup>Optional</sup> <a name="microsoft_app_type" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.microsoftAppType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#microsoft_app_type BotServiceAzureBot#microsoft_app_type}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#public_network_access_enabled BotServiceAzureBot#public_network_access_enabled}.

---

##### `streaming_endpoint_enabled`<sup>Optional</sup> <a name="streaming_endpoint_enabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.streamingEndpointEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#streaming_endpoint_enabled BotServiceAzureBot#streaming_endpoint_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#tags BotServiceAzureBot#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#timeouts BotServiceAzureBot#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetCmkKeyVaultKeyUrl">reset_cmk_key_vault_key_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsApiKey">reset_developer_app_insights_api_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsApplicationId">reset_developer_app_insights_application_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsKey">reset_developer_app_insights_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetIconUrl">reset_icon_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLocalAuthenticationEnabled">reset_local_authentication_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLuisAppIds">reset_luis_app_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLuisKey">reset_luis_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppMsiId">reset_microsoft_app_msi_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppTenantId">reset_microsoft_app_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppType">reset_microsoft_app_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetStreamingEndpointEnabled">reset_streaming_endpoint_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#create BotServiceAzureBot#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#delete BotServiceAzureBot#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#read BotServiceAzureBot#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#update BotServiceAzureBot#update}.

---

##### `reset_cmk_key_vault_key_url` <a name="reset_cmk_key_vault_key_url" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetCmkKeyVaultKeyUrl"></a>

```python
def reset_cmk_key_vault_key_url() -> None
```

##### `reset_developer_app_insights_api_key` <a name="reset_developer_app_insights_api_key" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsApiKey"></a>

```python
def reset_developer_app_insights_api_key() -> None
```

##### `reset_developer_app_insights_application_id` <a name="reset_developer_app_insights_application_id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsApplicationId"></a>

```python
def reset_developer_app_insights_application_id() -> None
```

##### `reset_developer_app_insights_key` <a name="reset_developer_app_insights_key" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsKey"></a>

```python
def reset_developer_app_insights_key() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_icon_url` <a name="reset_icon_url" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetIconUrl"></a>

```python
def reset_icon_url() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_local_authentication_enabled` <a name="reset_local_authentication_enabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLocalAuthenticationEnabled"></a>

```python
def reset_local_authentication_enabled() -> None
```

##### `reset_luis_app_ids` <a name="reset_luis_app_ids" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLuisAppIds"></a>

```python
def reset_luis_app_ids() -> None
```

##### `reset_luis_key` <a name="reset_luis_key" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLuisKey"></a>

```python
def reset_luis_key() -> None
```

##### `reset_microsoft_app_msi_id` <a name="reset_microsoft_app_msi_id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppMsiId"></a>

```python
def reset_microsoft_app_msi_id() -> None
```

##### `reset_microsoft_app_tenant_id` <a name="reset_microsoft_app_tenant_id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppTenantId"></a>

```python
def reset_microsoft_app_tenant_id() -> None
```

##### `reset_microsoft_app_type` <a name="reset_microsoft_app_type" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppType"></a>

```python
def reset_microsoft_app_type() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_streaming_endpoint_enabled` <a name="reset_streaming_endpoint_enabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetStreamingEndpointEnabled"></a>

```python
def reset_streaming_endpoint_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BotServiceAzureBot resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_service_azure_bot

botServiceAzureBot.BotServiceAzureBot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_service_azure_bot

botServiceAzureBot.BotServiceAzureBot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_service_azure_bot

botServiceAzureBot.BotServiceAzureBot.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_service_azure_bot

botServiceAzureBot.BotServiceAzureBot.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BotServiceAzureBot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BotServiceAzureBot to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BotServiceAzureBot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BotServiceAzureBot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference">BotServiceAzureBotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.cmkKeyVaultKeyUrlInput">cmk_key_vault_key_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApiKeyInput">developer_app_insights_api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApplicationIdInput">developer_app_insights_application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsKeyInput">developer_app_insights_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.iconUrlInput">icon_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.localAuthenticationEnabledInput">local_authentication_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisAppIdsInput">luis_app_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisKeyInput">luis_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppIdInput">microsoft_app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppMsiIdInput">microsoft_app_msi_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTenantIdInput">microsoft_app_tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTypeInput">microsoft_app_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.streamingEndpointEnabledInput">streaming_endpoint_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.cmkKeyVaultKeyUrl">cmk_key_vault_key_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApiKey">developer_app_insights_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApplicationId">developer_app_insights_application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsKey">developer_app_insights_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.iconUrl">icon_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.localAuthenticationEnabled">local_authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisAppIds">luis_app_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisKey">luis_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppId">microsoft_app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppMsiId">microsoft_app_msi_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTenantId">microsoft_app_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppType">microsoft_app_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.streamingEndpointEnabled">streaming_endpoint_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.timeouts"></a>

```python
timeouts: BotServiceAzureBotTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference">BotServiceAzureBotTimeoutsOutputReference</a>

---

##### `cmk_key_vault_key_url_input`<sup>Optional</sup> <a name="cmk_key_vault_key_url_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.cmkKeyVaultKeyUrlInput"></a>

```python
cmk_key_vault_key_url_input: str
```

- *Type:* str

---

##### `developer_app_insights_api_key_input`<sup>Optional</sup> <a name="developer_app_insights_api_key_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApiKeyInput"></a>

```python
developer_app_insights_api_key_input: str
```

- *Type:* str

---

##### `developer_app_insights_application_id_input`<sup>Optional</sup> <a name="developer_app_insights_application_id_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApplicationIdInput"></a>

```python
developer_app_insights_application_id_input: str
```

- *Type:* str

---

##### `developer_app_insights_key_input`<sup>Optional</sup> <a name="developer_app_insights_key_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsKeyInput"></a>

```python
developer_app_insights_key_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `icon_url_input`<sup>Optional</sup> <a name="icon_url_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.iconUrlInput"></a>

```python
icon_url_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `local_authentication_enabled_input`<sup>Optional</sup> <a name="local_authentication_enabled_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.localAuthenticationEnabledInput"></a>

```python
local_authentication_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `luis_app_ids_input`<sup>Optional</sup> <a name="luis_app_ids_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisAppIdsInput"></a>

```python
luis_app_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `luis_key_input`<sup>Optional</sup> <a name="luis_key_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisKeyInput"></a>

```python
luis_key_input: str
```

- *Type:* str

---

##### `microsoft_app_id_input`<sup>Optional</sup> <a name="microsoft_app_id_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppIdInput"></a>

```python
microsoft_app_id_input: str
```

- *Type:* str

---

##### `microsoft_app_msi_id_input`<sup>Optional</sup> <a name="microsoft_app_msi_id_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppMsiIdInput"></a>

```python
microsoft_app_msi_id_input: str
```

- *Type:* str

---

##### `microsoft_app_tenant_id_input`<sup>Optional</sup> <a name="microsoft_app_tenant_id_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTenantIdInput"></a>

```python
microsoft_app_tenant_id_input: str
```

- *Type:* str

---

##### `microsoft_app_type_input`<sup>Optional</sup> <a name="microsoft_app_type_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTypeInput"></a>

```python
microsoft_app_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `streaming_endpoint_enabled_input`<sup>Optional</sup> <a name="streaming_endpoint_enabled_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.streamingEndpointEnabledInput"></a>

```python
streaming_endpoint_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BotServiceAzureBotTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a>]

---

##### `cmk_key_vault_key_url`<sup>Required</sup> <a name="cmk_key_vault_key_url" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.cmkKeyVaultKeyUrl"></a>

```python
cmk_key_vault_key_url: str
```

- *Type:* str

---

##### `developer_app_insights_api_key`<sup>Required</sup> <a name="developer_app_insights_api_key" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApiKey"></a>

```python
developer_app_insights_api_key: str
```

- *Type:* str

---

##### `developer_app_insights_application_id`<sup>Required</sup> <a name="developer_app_insights_application_id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApplicationId"></a>

```python
developer_app_insights_application_id: str
```

- *Type:* str

---

##### `developer_app_insights_key`<sup>Required</sup> <a name="developer_app_insights_key" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsKey"></a>

```python
developer_app_insights_key: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `icon_url`<sup>Required</sup> <a name="icon_url" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.iconUrl"></a>

```python
icon_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `local_authentication_enabled`<sup>Required</sup> <a name="local_authentication_enabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.localAuthenticationEnabled"></a>

```python
local_authentication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `luis_app_ids`<sup>Required</sup> <a name="luis_app_ids" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisAppIds"></a>

```python
luis_app_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `luis_key`<sup>Required</sup> <a name="luis_key" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisKey"></a>

```python
luis_key: str
```

- *Type:* str

---

##### `microsoft_app_id`<sup>Required</sup> <a name="microsoft_app_id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppId"></a>

```python
microsoft_app_id: str
```

- *Type:* str

---

##### `microsoft_app_msi_id`<sup>Required</sup> <a name="microsoft_app_msi_id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppMsiId"></a>

```python
microsoft_app_msi_id: str
```

- *Type:* str

---

##### `microsoft_app_tenant_id`<sup>Required</sup> <a name="microsoft_app_tenant_id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTenantId"></a>

```python
microsoft_app_tenant_id: str
```

- *Type:* str

---

##### `microsoft_app_type`<sup>Required</sup> <a name="microsoft_app_type" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppType"></a>

```python
microsoft_app_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `streaming_endpoint_enabled`<sup>Required</sup> <a name="streaming_endpoint_enabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.streamingEndpointEnabled"></a>

```python
streaming_endpoint_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BotServiceAzureBotConfig <a name="BotServiceAzureBotConfig" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_service_azure_bot

botServiceAzureBot.BotServiceAzureBotConfig(
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
  cmk_key_vault_key_url: str = None,
  developer_app_insights_api_key: str = None,
  developer_app_insights_application_id: str = None,
  developer_app_insights_key: str = None,
  display_name: str = None,
  endpoint: str = None,
  icon_url: str = None,
  id: str = None,
  local_authentication_enabled: typing.Union[bool, IResolvable] = None,
  luis_app_ids: typing.List[str] = None,
  luis_key: str = None,
  microsoft_app_msi_id: str = None,
  microsoft_app_tenant_id: str = None,
  microsoft_app_type: str = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  streaming_endpoint_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: BotServiceAzureBotTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#location BotServiceAzureBot#location}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppId">microsoft_app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#microsoft_app_id BotServiceAzureBot#microsoft_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#name BotServiceAzureBot#name}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#resource_group_name BotServiceAzureBot#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#sku BotServiceAzureBot#sku}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.cmkKeyVaultKeyUrl">cmk_key_vault_key_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#cmk_key_vault_key_url BotServiceAzureBot#cmk_key_vault_key_url}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsApiKey">developer_app_insights_api_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#developer_app_insights_api_key BotServiceAzureBot#developer_app_insights_api_key}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsApplicationId">developer_app_insights_application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#developer_app_insights_application_id BotServiceAzureBot#developer_app_insights_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsKey">developer_app_insights_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#developer_app_insights_key BotServiceAzureBot#developer_app_insights_key}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#display_name BotServiceAzureBot#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#endpoint BotServiceAzureBot#endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.iconUrl">icon_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#icon_url BotServiceAzureBot#icon_url}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#id BotServiceAzureBot#id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.localAuthenticationEnabled">local_authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#local_authentication_enabled BotServiceAzureBot#local_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.luisAppIds">luis_app_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#luis_app_ids BotServiceAzureBot#luis_app_ids}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.luisKey">luis_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#luis_key BotServiceAzureBot#luis_key}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppMsiId">microsoft_app_msi_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#microsoft_app_msi_id BotServiceAzureBot#microsoft_app_msi_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppTenantId">microsoft_app_tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#microsoft_app_tenant_id BotServiceAzureBot#microsoft_app_tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppType">microsoft_app_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#microsoft_app_type BotServiceAzureBot#microsoft_app_type}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#public_network_access_enabled BotServiceAzureBot#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.streamingEndpointEnabled">streaming_endpoint_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#streaming_endpoint_enabled BotServiceAzureBot#streaming_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#tags BotServiceAzureBot#tags}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#location BotServiceAzureBot#location}.

---

##### `microsoft_app_id`<sup>Required</sup> <a name="microsoft_app_id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppId"></a>

```python
microsoft_app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#microsoft_app_id BotServiceAzureBot#microsoft_app_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#name BotServiceAzureBot#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#resource_group_name BotServiceAzureBot#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#sku BotServiceAzureBot#sku}.

---

##### `cmk_key_vault_key_url`<sup>Optional</sup> <a name="cmk_key_vault_key_url" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.cmkKeyVaultKeyUrl"></a>

```python
cmk_key_vault_key_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#cmk_key_vault_key_url BotServiceAzureBot#cmk_key_vault_key_url}.

---

##### `developer_app_insights_api_key`<sup>Optional</sup> <a name="developer_app_insights_api_key" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsApiKey"></a>

```python
developer_app_insights_api_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#developer_app_insights_api_key BotServiceAzureBot#developer_app_insights_api_key}.

---

##### `developer_app_insights_application_id`<sup>Optional</sup> <a name="developer_app_insights_application_id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsApplicationId"></a>

```python
developer_app_insights_application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#developer_app_insights_application_id BotServiceAzureBot#developer_app_insights_application_id}.

---

##### `developer_app_insights_key`<sup>Optional</sup> <a name="developer_app_insights_key" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsKey"></a>

```python
developer_app_insights_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#developer_app_insights_key BotServiceAzureBot#developer_app_insights_key}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#display_name BotServiceAzureBot#display_name}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#endpoint BotServiceAzureBot#endpoint}.

---

##### `icon_url`<sup>Optional</sup> <a name="icon_url" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.iconUrl"></a>

```python
icon_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#icon_url BotServiceAzureBot#icon_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#id BotServiceAzureBot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local_authentication_enabled`<sup>Optional</sup> <a name="local_authentication_enabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.localAuthenticationEnabled"></a>

```python
local_authentication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#local_authentication_enabled BotServiceAzureBot#local_authentication_enabled}.

---

##### `luis_app_ids`<sup>Optional</sup> <a name="luis_app_ids" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.luisAppIds"></a>

```python
luis_app_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#luis_app_ids BotServiceAzureBot#luis_app_ids}.

---

##### `luis_key`<sup>Optional</sup> <a name="luis_key" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.luisKey"></a>

```python
luis_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#luis_key BotServiceAzureBot#luis_key}.

---

##### `microsoft_app_msi_id`<sup>Optional</sup> <a name="microsoft_app_msi_id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppMsiId"></a>

```python
microsoft_app_msi_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#microsoft_app_msi_id BotServiceAzureBot#microsoft_app_msi_id}.

---

##### `microsoft_app_tenant_id`<sup>Optional</sup> <a name="microsoft_app_tenant_id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppTenantId"></a>

```python
microsoft_app_tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#microsoft_app_tenant_id BotServiceAzureBot#microsoft_app_tenant_id}.

---

##### `microsoft_app_type`<sup>Optional</sup> <a name="microsoft_app_type" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppType"></a>

```python
microsoft_app_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#microsoft_app_type BotServiceAzureBot#microsoft_app_type}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#public_network_access_enabled BotServiceAzureBot#public_network_access_enabled}.

---

##### `streaming_endpoint_enabled`<sup>Optional</sup> <a name="streaming_endpoint_enabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.streamingEndpointEnabled"></a>

```python
streaming_endpoint_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#streaming_endpoint_enabled BotServiceAzureBot#streaming_endpoint_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#tags BotServiceAzureBot#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.timeouts"></a>

```python
timeouts: BotServiceAzureBotTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#timeouts BotServiceAzureBot#timeouts}

---

### BotServiceAzureBotTimeouts <a name="BotServiceAzureBotTimeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_service_azure_bot

botServiceAzureBot.BotServiceAzureBotTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#create BotServiceAzureBot#create}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#delete BotServiceAzureBot#delete}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#read BotServiceAzureBot#read}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#update BotServiceAzureBot#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#create BotServiceAzureBot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#delete BotServiceAzureBot#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#read BotServiceAzureBot#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/bot_service_azure_bot#update BotServiceAzureBot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BotServiceAzureBotTimeoutsOutputReference <a name="BotServiceAzureBotTimeoutsOutputReference" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_service_azure_bot

botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BotServiceAzureBotTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a>]

---



