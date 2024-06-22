# `botServiceAzureBot` Submodule <a name="`botServiceAzureBot` Submodule" id="@cdktf/provider-azurerm.botServiceAzureBot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotServiceAzureBot <a name="BotServiceAzureBot" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot azurerm_bot_service_azure_bot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.bot_service_azure_bot.BotServiceAzureBot;

BotServiceAzureBot.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .microsoftAppId(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .sku(java.lang.String)
//  .cmkKeyVaultKeyUrl(java.lang.String)
//  .developerAppInsightsApiKey(java.lang.String)
//  .developerAppInsightsApplicationId(java.lang.String)
//  .developerAppInsightsKey(java.lang.String)
//  .displayName(java.lang.String)
//  .endpoint(java.lang.String)
//  .iconUrl(java.lang.String)
//  .id(java.lang.String)
//  .localAuthenticationEnabled(java.lang.Boolean)
//  .localAuthenticationEnabled(IResolvable)
//  .luisAppIds(java.util.List<java.lang.String>)
//  .luisKey(java.lang.String)
//  .microsoftAppMsiId(java.lang.String)
//  .microsoftAppTenantId(java.lang.String)
//  .microsoftAppType(java.lang.String)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .streamingEndpointEnabled(java.lang.Boolean)
//  .streamingEndpointEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(BotServiceAzureBotTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#location BotServiceAzureBot#location}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.microsoftAppId">microsoftAppId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#microsoft_app_id BotServiceAzureBot#microsoft_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#name BotServiceAzureBot#name}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#resource_group_name BotServiceAzureBot#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#sku BotServiceAzureBot#sku}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.cmkKeyVaultKeyUrl">cmkKeyVaultKeyUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#cmk_key_vault_key_url BotServiceAzureBot#cmk_key_vault_key_url}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.developerAppInsightsApiKey">developerAppInsightsApiKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#developer_app_insights_api_key BotServiceAzureBot#developer_app_insights_api_key}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.developerAppInsightsApplicationId">developerAppInsightsApplicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#developer_app_insights_application_id BotServiceAzureBot#developer_app_insights_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.developerAppInsightsKey">developerAppInsightsKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#developer_app_insights_key BotServiceAzureBot#developer_app_insights_key}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#display_name BotServiceAzureBot#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#endpoint BotServiceAzureBot#endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.iconUrl">iconUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#icon_url BotServiceAzureBot#icon_url}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#id BotServiceAzureBot#id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.localAuthenticationEnabled">localAuthenticationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#local_authentication_enabled BotServiceAzureBot#local_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.luisAppIds">luisAppIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#luis_app_ids BotServiceAzureBot#luis_app_ids}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.luisKey">luisKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#luis_key BotServiceAzureBot#luis_key}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.microsoftAppMsiId">microsoftAppMsiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#microsoft_app_msi_id BotServiceAzureBot#microsoft_app_msi_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.microsoftAppTenantId">microsoftAppTenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#microsoft_app_tenant_id BotServiceAzureBot#microsoft_app_tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.microsoftAppType">microsoftAppType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#microsoft_app_type BotServiceAzureBot#microsoft_app_type}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#public_network_access_enabled BotServiceAzureBot#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.streamingEndpointEnabled">streamingEndpointEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#streaming_endpoint_enabled BotServiceAzureBot#streaming_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#tags BotServiceAzureBot#tags}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#location BotServiceAzureBot#location}.

---

##### `microsoftAppId`<sup>Required</sup> <a name="microsoftAppId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.microsoftAppId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#microsoft_app_id BotServiceAzureBot#microsoft_app_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#name BotServiceAzureBot#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#resource_group_name BotServiceAzureBot#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.sku"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#sku BotServiceAzureBot#sku}.

---

##### `cmkKeyVaultKeyUrl`<sup>Optional</sup> <a name="cmkKeyVaultKeyUrl" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.cmkKeyVaultKeyUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#cmk_key_vault_key_url BotServiceAzureBot#cmk_key_vault_key_url}.

---

##### `developerAppInsightsApiKey`<sup>Optional</sup> <a name="developerAppInsightsApiKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.developerAppInsightsApiKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#developer_app_insights_api_key BotServiceAzureBot#developer_app_insights_api_key}.

---

##### `developerAppInsightsApplicationId`<sup>Optional</sup> <a name="developerAppInsightsApplicationId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.developerAppInsightsApplicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#developer_app_insights_application_id BotServiceAzureBot#developer_app_insights_application_id}.

---

##### `developerAppInsightsKey`<sup>Optional</sup> <a name="developerAppInsightsKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.developerAppInsightsKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#developer_app_insights_key BotServiceAzureBot#developer_app_insights_key}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#display_name BotServiceAzureBot#display_name}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.endpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#endpoint BotServiceAzureBot#endpoint}.

---

##### `iconUrl`<sup>Optional</sup> <a name="iconUrl" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.iconUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#icon_url BotServiceAzureBot#icon_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#id BotServiceAzureBot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `localAuthenticationEnabled`<sup>Optional</sup> <a name="localAuthenticationEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.localAuthenticationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#local_authentication_enabled BotServiceAzureBot#local_authentication_enabled}.

---

##### `luisAppIds`<sup>Optional</sup> <a name="luisAppIds" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.luisAppIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#luis_app_ids BotServiceAzureBot#luis_app_ids}.

---

##### `luisKey`<sup>Optional</sup> <a name="luisKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.luisKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#luis_key BotServiceAzureBot#luis_key}.

---

##### `microsoftAppMsiId`<sup>Optional</sup> <a name="microsoftAppMsiId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.microsoftAppMsiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#microsoft_app_msi_id BotServiceAzureBot#microsoft_app_msi_id}.

---

##### `microsoftAppTenantId`<sup>Optional</sup> <a name="microsoftAppTenantId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.microsoftAppTenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#microsoft_app_tenant_id BotServiceAzureBot#microsoft_app_tenant_id}.

---

##### `microsoftAppType`<sup>Optional</sup> <a name="microsoftAppType" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.microsoftAppType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#microsoft_app_type BotServiceAzureBot#microsoft_app_type}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#public_network_access_enabled BotServiceAzureBot#public_network_access_enabled}.

---

##### `streamingEndpointEnabled`<sup>Optional</sup> <a name="streamingEndpointEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.streamingEndpointEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#streaming_endpoint_enabled BotServiceAzureBot#streaming_endpoint_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#tags BotServiceAzureBot#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#timeouts BotServiceAzureBot#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetCmkKeyVaultKeyUrl">resetCmkKeyVaultKeyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsApiKey">resetDeveloperAppInsightsApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsApplicationId">resetDeveloperAppInsightsApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsKey">resetDeveloperAppInsightsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetIconUrl">resetIconUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLocalAuthenticationEnabled">resetLocalAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLuisAppIds">resetLuisAppIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLuisKey">resetLuisKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppMsiId">resetMicrosoftAppMsiId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppTenantId">resetMicrosoftAppTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppType">resetMicrosoftAppType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetStreamingEndpointEnabled">resetStreamingEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.putTimeouts"></a>

```java
public void putTimeouts(BotServiceAzureBotTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a>

---

##### `resetCmkKeyVaultKeyUrl` <a name="resetCmkKeyVaultKeyUrl" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetCmkKeyVaultKeyUrl"></a>

```java
public void resetCmkKeyVaultKeyUrl()
```

##### `resetDeveloperAppInsightsApiKey` <a name="resetDeveloperAppInsightsApiKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsApiKey"></a>

```java
public void resetDeveloperAppInsightsApiKey()
```

##### `resetDeveloperAppInsightsApplicationId` <a name="resetDeveloperAppInsightsApplicationId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsApplicationId"></a>

```java
public void resetDeveloperAppInsightsApplicationId()
```

##### `resetDeveloperAppInsightsKey` <a name="resetDeveloperAppInsightsKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsKey"></a>

```java
public void resetDeveloperAppInsightsKey()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetIconUrl` <a name="resetIconUrl" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetIconUrl"></a>

```java
public void resetIconUrl()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetId"></a>

```java
public void resetId()
```

##### `resetLocalAuthenticationEnabled` <a name="resetLocalAuthenticationEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLocalAuthenticationEnabled"></a>

```java
public void resetLocalAuthenticationEnabled()
```

##### `resetLuisAppIds` <a name="resetLuisAppIds" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLuisAppIds"></a>

```java
public void resetLuisAppIds()
```

##### `resetLuisKey` <a name="resetLuisKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLuisKey"></a>

```java
public void resetLuisKey()
```

##### `resetMicrosoftAppMsiId` <a name="resetMicrosoftAppMsiId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppMsiId"></a>

```java
public void resetMicrosoftAppMsiId()
```

##### `resetMicrosoftAppTenantId` <a name="resetMicrosoftAppTenantId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppTenantId"></a>

```java
public void resetMicrosoftAppTenantId()
```

##### `resetMicrosoftAppType` <a name="resetMicrosoftAppType" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppType"></a>

```java
public void resetMicrosoftAppType()
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetPublicNetworkAccessEnabled"></a>

```java
public void resetPublicNetworkAccessEnabled()
```

##### `resetStreamingEndpointEnabled` <a name="resetStreamingEndpointEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetStreamingEndpointEnabled"></a>

```java
public void resetStreamingEndpointEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BotServiceAzureBot resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.bot_service_azure_bot.BotServiceAzureBot;

BotServiceAzureBot.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.bot_service_azure_bot.BotServiceAzureBot;

BotServiceAzureBot.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.bot_service_azure_bot.BotServiceAzureBot;

BotServiceAzureBot.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.bot_service_azure_bot.BotServiceAzureBot;

BotServiceAzureBot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BotServiceAzureBot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BotServiceAzureBot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BotServiceAzureBot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BotServiceAzureBot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BotServiceAzureBot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference">BotServiceAzureBotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.cmkKeyVaultKeyUrlInput">cmkKeyVaultKeyUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApiKeyInput">developerAppInsightsApiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApplicationIdInput">developerAppInsightsApplicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsKeyInput">developerAppInsightsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.iconUrlInput">iconUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.localAuthenticationEnabledInput">localAuthenticationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisAppIdsInput">luisAppIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisKeyInput">luisKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppIdInput">microsoftAppIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppMsiIdInput">microsoftAppMsiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTenantIdInput">microsoftAppTenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTypeInput">microsoftAppTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.streamingEndpointEnabledInput">streamingEndpointEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.cmkKeyVaultKeyUrl">cmkKeyVaultKeyUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApiKey">developerAppInsightsApiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApplicationId">developerAppInsightsApplicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsKey">developerAppInsightsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.iconUrl">iconUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.localAuthenticationEnabled">localAuthenticationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisAppIds">luisAppIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisKey">luisKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppId">microsoftAppId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppMsiId">microsoftAppMsiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTenantId">microsoftAppTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppType">microsoftAppType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.streamingEndpointEnabled">streamingEndpointEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.timeouts"></a>

```java
public BotServiceAzureBotTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference">BotServiceAzureBotTimeoutsOutputReference</a>

---

##### `cmkKeyVaultKeyUrlInput`<sup>Optional</sup> <a name="cmkKeyVaultKeyUrlInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.cmkKeyVaultKeyUrlInput"></a>

```java
public java.lang.String getCmkKeyVaultKeyUrlInput();
```

- *Type:* java.lang.String

---

##### `developerAppInsightsApiKeyInput`<sup>Optional</sup> <a name="developerAppInsightsApiKeyInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApiKeyInput"></a>

```java
public java.lang.String getDeveloperAppInsightsApiKeyInput();
```

- *Type:* java.lang.String

---

##### `developerAppInsightsApplicationIdInput`<sup>Optional</sup> <a name="developerAppInsightsApplicationIdInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApplicationIdInput"></a>

```java
public java.lang.String getDeveloperAppInsightsApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `developerAppInsightsKeyInput`<sup>Optional</sup> <a name="developerAppInsightsKeyInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsKeyInput"></a>

```java
public java.lang.String getDeveloperAppInsightsKeyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `iconUrlInput`<sup>Optional</sup> <a name="iconUrlInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.iconUrlInput"></a>

```java
public java.lang.String getIconUrlInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `localAuthenticationEnabledInput`<sup>Optional</sup> <a name="localAuthenticationEnabledInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.localAuthenticationEnabledInput"></a>

```java
public java.lang.Object getLocalAuthenticationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `luisAppIdsInput`<sup>Optional</sup> <a name="luisAppIdsInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisAppIdsInput"></a>

```java
public java.util.List<java.lang.String> getLuisAppIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `luisKeyInput`<sup>Optional</sup> <a name="luisKeyInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisKeyInput"></a>

```java
public java.lang.String getLuisKeyInput();
```

- *Type:* java.lang.String

---

##### `microsoftAppIdInput`<sup>Optional</sup> <a name="microsoftAppIdInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppIdInput"></a>

```java
public java.lang.String getMicrosoftAppIdInput();
```

- *Type:* java.lang.String

---

##### `microsoftAppMsiIdInput`<sup>Optional</sup> <a name="microsoftAppMsiIdInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppMsiIdInput"></a>

```java
public java.lang.String getMicrosoftAppMsiIdInput();
```

- *Type:* java.lang.String

---

##### `microsoftAppTenantIdInput`<sup>Optional</sup> <a name="microsoftAppTenantIdInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTenantIdInput"></a>

```java
public java.lang.String getMicrosoftAppTenantIdInput();
```

- *Type:* java.lang.String

---

##### `microsoftAppTypeInput`<sup>Optional</sup> <a name="microsoftAppTypeInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTypeInput"></a>

```java
public java.lang.String getMicrosoftAppTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.publicNetworkAccessEnabledInput"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `streamingEndpointEnabledInput`<sup>Optional</sup> <a name="streamingEndpointEnabledInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.streamingEndpointEnabledInput"></a>

```java
public java.lang.Object getStreamingEndpointEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a>

---

##### `cmkKeyVaultKeyUrl`<sup>Required</sup> <a name="cmkKeyVaultKeyUrl" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.cmkKeyVaultKeyUrl"></a>

```java
public java.lang.String getCmkKeyVaultKeyUrl();
```

- *Type:* java.lang.String

---

##### `developerAppInsightsApiKey`<sup>Required</sup> <a name="developerAppInsightsApiKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApiKey"></a>

```java
public java.lang.String getDeveloperAppInsightsApiKey();
```

- *Type:* java.lang.String

---

##### `developerAppInsightsApplicationId`<sup>Required</sup> <a name="developerAppInsightsApplicationId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApplicationId"></a>

```java
public java.lang.String getDeveloperAppInsightsApplicationId();
```

- *Type:* java.lang.String

---

##### `developerAppInsightsKey`<sup>Required</sup> <a name="developerAppInsightsKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsKey"></a>

```java
public java.lang.String getDeveloperAppInsightsKey();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `iconUrl`<sup>Required</sup> <a name="iconUrl" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.iconUrl"></a>

```java
public java.lang.String getIconUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `localAuthenticationEnabled`<sup>Required</sup> <a name="localAuthenticationEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.localAuthenticationEnabled"></a>

```java
public java.lang.Object getLocalAuthenticationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `luisAppIds`<sup>Required</sup> <a name="luisAppIds" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisAppIds"></a>

```java
public java.util.List<java.lang.String> getLuisAppIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `luisKey`<sup>Required</sup> <a name="luisKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisKey"></a>

```java
public java.lang.String getLuisKey();
```

- *Type:* java.lang.String

---

##### `microsoftAppId`<sup>Required</sup> <a name="microsoftAppId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppId"></a>

```java
public java.lang.String getMicrosoftAppId();
```

- *Type:* java.lang.String

---

##### `microsoftAppMsiId`<sup>Required</sup> <a name="microsoftAppMsiId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppMsiId"></a>

```java
public java.lang.String getMicrosoftAppMsiId();
```

- *Type:* java.lang.String

---

##### `microsoftAppTenantId`<sup>Required</sup> <a name="microsoftAppTenantId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTenantId"></a>

```java
public java.lang.String getMicrosoftAppTenantId();
```

- *Type:* java.lang.String

---

##### `microsoftAppType`<sup>Required</sup> <a name="microsoftAppType" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppType"></a>

```java
public java.lang.String getMicrosoftAppType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `streamingEndpointEnabled`<sup>Required</sup> <a name="streamingEndpointEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.streamingEndpointEnabled"></a>

```java
public java.lang.Object getStreamingEndpointEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BotServiceAzureBotConfig <a name="BotServiceAzureBotConfig" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.bot_service_azure_bot.BotServiceAzureBotConfig;

BotServiceAzureBotConfig.builder()
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
    .location(java.lang.String)
    .microsoftAppId(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .sku(java.lang.String)
//  .cmkKeyVaultKeyUrl(java.lang.String)
//  .developerAppInsightsApiKey(java.lang.String)
//  .developerAppInsightsApplicationId(java.lang.String)
//  .developerAppInsightsKey(java.lang.String)
//  .displayName(java.lang.String)
//  .endpoint(java.lang.String)
//  .iconUrl(java.lang.String)
//  .id(java.lang.String)
//  .localAuthenticationEnabled(java.lang.Boolean)
//  .localAuthenticationEnabled(IResolvable)
//  .luisAppIds(java.util.List<java.lang.String>)
//  .luisKey(java.lang.String)
//  .microsoftAppMsiId(java.lang.String)
//  .microsoftAppTenantId(java.lang.String)
//  .microsoftAppType(java.lang.String)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .streamingEndpointEnabled(java.lang.Boolean)
//  .streamingEndpointEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(BotServiceAzureBotTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#location BotServiceAzureBot#location}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppId">microsoftAppId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#microsoft_app_id BotServiceAzureBot#microsoft_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#name BotServiceAzureBot#name}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#resource_group_name BotServiceAzureBot#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#sku BotServiceAzureBot#sku}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.cmkKeyVaultKeyUrl">cmkKeyVaultKeyUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#cmk_key_vault_key_url BotServiceAzureBot#cmk_key_vault_key_url}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsApiKey">developerAppInsightsApiKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#developer_app_insights_api_key BotServiceAzureBot#developer_app_insights_api_key}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsApplicationId">developerAppInsightsApplicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#developer_app_insights_application_id BotServiceAzureBot#developer_app_insights_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsKey">developerAppInsightsKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#developer_app_insights_key BotServiceAzureBot#developer_app_insights_key}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#display_name BotServiceAzureBot#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#endpoint BotServiceAzureBot#endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.iconUrl">iconUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#icon_url BotServiceAzureBot#icon_url}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#id BotServiceAzureBot#id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.localAuthenticationEnabled">localAuthenticationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#local_authentication_enabled BotServiceAzureBot#local_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.luisAppIds">luisAppIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#luis_app_ids BotServiceAzureBot#luis_app_ids}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.luisKey">luisKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#luis_key BotServiceAzureBot#luis_key}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppMsiId">microsoftAppMsiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#microsoft_app_msi_id BotServiceAzureBot#microsoft_app_msi_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppTenantId">microsoftAppTenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#microsoft_app_tenant_id BotServiceAzureBot#microsoft_app_tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppType">microsoftAppType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#microsoft_app_type BotServiceAzureBot#microsoft_app_type}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#public_network_access_enabled BotServiceAzureBot#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.streamingEndpointEnabled">streamingEndpointEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#streaming_endpoint_enabled BotServiceAzureBot#streaming_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#tags BotServiceAzureBot#tags}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#location BotServiceAzureBot#location}.

---

##### `microsoftAppId`<sup>Required</sup> <a name="microsoftAppId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppId"></a>

```java
public java.lang.String getMicrosoftAppId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#microsoft_app_id BotServiceAzureBot#microsoft_app_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#name BotServiceAzureBot#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#resource_group_name BotServiceAzureBot#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#sku BotServiceAzureBot#sku}.

---

##### `cmkKeyVaultKeyUrl`<sup>Optional</sup> <a name="cmkKeyVaultKeyUrl" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.cmkKeyVaultKeyUrl"></a>

```java
public java.lang.String getCmkKeyVaultKeyUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#cmk_key_vault_key_url BotServiceAzureBot#cmk_key_vault_key_url}.

---

##### `developerAppInsightsApiKey`<sup>Optional</sup> <a name="developerAppInsightsApiKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsApiKey"></a>

```java
public java.lang.String getDeveloperAppInsightsApiKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#developer_app_insights_api_key BotServiceAzureBot#developer_app_insights_api_key}.

---

##### `developerAppInsightsApplicationId`<sup>Optional</sup> <a name="developerAppInsightsApplicationId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsApplicationId"></a>

```java
public java.lang.String getDeveloperAppInsightsApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#developer_app_insights_application_id BotServiceAzureBot#developer_app_insights_application_id}.

---

##### `developerAppInsightsKey`<sup>Optional</sup> <a name="developerAppInsightsKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsKey"></a>

```java
public java.lang.String getDeveloperAppInsightsKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#developer_app_insights_key BotServiceAzureBot#developer_app_insights_key}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#display_name BotServiceAzureBot#display_name}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#endpoint BotServiceAzureBot#endpoint}.

---

##### `iconUrl`<sup>Optional</sup> <a name="iconUrl" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.iconUrl"></a>

```java
public java.lang.String getIconUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#icon_url BotServiceAzureBot#icon_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#id BotServiceAzureBot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `localAuthenticationEnabled`<sup>Optional</sup> <a name="localAuthenticationEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.localAuthenticationEnabled"></a>

```java
public java.lang.Object getLocalAuthenticationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#local_authentication_enabled BotServiceAzureBot#local_authentication_enabled}.

---

##### `luisAppIds`<sup>Optional</sup> <a name="luisAppIds" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.luisAppIds"></a>

```java
public java.util.List<java.lang.String> getLuisAppIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#luis_app_ids BotServiceAzureBot#luis_app_ids}.

---

##### `luisKey`<sup>Optional</sup> <a name="luisKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.luisKey"></a>

```java
public java.lang.String getLuisKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#luis_key BotServiceAzureBot#luis_key}.

---

##### `microsoftAppMsiId`<sup>Optional</sup> <a name="microsoftAppMsiId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppMsiId"></a>

```java
public java.lang.String getMicrosoftAppMsiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#microsoft_app_msi_id BotServiceAzureBot#microsoft_app_msi_id}.

---

##### `microsoftAppTenantId`<sup>Optional</sup> <a name="microsoftAppTenantId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppTenantId"></a>

```java
public java.lang.String getMicrosoftAppTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#microsoft_app_tenant_id BotServiceAzureBot#microsoft_app_tenant_id}.

---

##### `microsoftAppType`<sup>Optional</sup> <a name="microsoftAppType" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppType"></a>

```java
public java.lang.String getMicrosoftAppType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#microsoft_app_type BotServiceAzureBot#microsoft_app_type}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#public_network_access_enabled BotServiceAzureBot#public_network_access_enabled}.

---

##### `streamingEndpointEnabled`<sup>Optional</sup> <a name="streamingEndpointEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.streamingEndpointEnabled"></a>

```java
public java.lang.Object getStreamingEndpointEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#streaming_endpoint_enabled BotServiceAzureBot#streaming_endpoint_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#tags BotServiceAzureBot#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.timeouts"></a>

```java
public BotServiceAzureBotTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#timeouts BotServiceAzureBot#timeouts}

---

### BotServiceAzureBotTimeouts <a name="BotServiceAzureBotTimeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.bot_service_azure_bot.BotServiceAzureBotTimeouts;

BotServiceAzureBotTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#create BotServiceAzureBot#create}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#delete BotServiceAzureBot#delete}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#read BotServiceAzureBot#read}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#update BotServiceAzureBot#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#create BotServiceAzureBot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#delete BotServiceAzureBot#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#read BotServiceAzureBot#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_service_azure_bot#update BotServiceAzureBot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BotServiceAzureBotTimeoutsOutputReference <a name="BotServiceAzureBotTimeoutsOutputReference" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.bot_service_azure_bot.BotServiceAzureBotTimeoutsOutputReference;

new BotServiceAzureBotTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a>

---



